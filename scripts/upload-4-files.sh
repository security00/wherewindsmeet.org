#!/bin/bash

# Upload files to R2 using Cloudflare API
# Requires CLOUDFLARE_API_TOKEN environment variable

ACCOUNT_ID="faae494a756090f5f9c0ad7b8d1ddb88"
BUCKET_NAME="wherewindsmeet"
CDN_URL="https://static.wherewindsmeet.org"

# Files to upload
declare -A files=(
  ["public/guides/jiangnan-hangzhou/hero-640.webp"]="guides/jiangnan-hangzhou/hero-640.webp"
  ["public/guides/jiangnan-hangzhou/hero-960.webp"]="guides/jiangnan-hangzhou/hero-960.webp"
  ["public/guides/jiangnan-hangzhou/hero-1440.webp"]="guides/jiangnan-hangzhou/hero-1440.webp"
  ["public/guides/npc-list/wobbly-tang.png"]="guides/npc-list/wobbly-tang.png"
)

# Check for API token
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "❌ CLOUDFLARE_API_TOKEN environment variable not set"
  echo ""
  echo "To upload files to R2, you need a Cloudflare API token with R2 write permissions."
  echo ""
  echo "Create one at: https://dash.cloudflare.com/$ACCOUNT_ID/r2/api-tokens"
  echo ""
  echo "For this Cloud Agent, add it as a secret in Cursor Dashboard:"
  echo "  Cloud Agents > Secrets > Add Secret"
  echo "  Name: CLOUDFLARE_API_TOKEN"
  echo "  Value: <your token>"
  exit 1
fi

echo "🚀 Uploading files to R2 bucket: $BUCKET_NAME"
echo ""

uploaded=0
failed=0

for local_path in "${!files[@]}"; do
  r2_key="${files[$local_path]}"
  
  echo "📤 Uploading: $r2_key"
  
  # Determine content type
  case "$r2_key" in
    *.webp) content_type="image/webp" ;;
    *.png) content_type="image/png" ;;
    *) content_type="application/octet-stream" ;;
  esac
  
  # Upload using Cloudflare API
  response=$(curl -s -w "\n%{http_code}" -X PUT \
    "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/r2/buckets/$BUCKET_NAME/objects/$r2_key" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H "Content-Type: $content_type" \
    -H "Cache-Control: public, max-age=31536000" \
    --data-binary "@$local_path")
  
  http_code=$(echo "$response" | tail -n1)
  body=$(echo "$response" | head -n-1)
  
  if [ "$http_code" = "200" ]; then
    echo "   ✓ Uploaded successfully"
    ((uploaded++))
    
    # Verify CDN access (wait a moment for propagation)
    sleep 2
    cdn_status=$(curl -s -o /dev/null -w "%{http_code}" "$CDN_URL/$r2_key")
    
    if [ "$cdn_status" = "200" ]; then
      echo "   ✓ CDN accessible: $CDN_URL/$r2_key"
    else
      echo "   ⚠️  CDN status $cdn_status (may need time to propagate)"
    fi
  else
    echo "   ✗ Upload failed (HTTP $http_code)"
    echo "   Response: $body"
    ((failed++))
  fi
  
  echo ""
done

echo "📊 Summary:"
echo "   Uploaded: $uploaded files"
echo "   Failed: $failed files"
echo ""

if [ $failed -eq 0 ]; then
  echo "✅ All files uploaded successfully!"
  echo ""
  echo "📋 CDN URLs:"
  for local_path in "${!files[@]}"; do
    r2_key="${files[$local_path]}"
    echo "   $CDN_URL/$r2_key"
  done
else
  echo "❌ Some uploads failed. Check errors above."
  exit 1
fi
