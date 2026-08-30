import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

export default defineCloudflareConfig({
  // This site has no ISR or on-demand revalidation. Pre-rendered Next cache
  // entries can therefore live in the Worker Static Assets binding instead of
  // making every page request pay the full Next server path.
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
