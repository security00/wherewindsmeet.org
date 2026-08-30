import TheGreatFaceologistGuidePage, {
  buildGreatFaceologistMetadata,
  greatFaceologistContent,
} from "@/components/guides/TheGreatFaceologistGuidePage";

const content = greatFaceologistContent.en;

export const metadata = buildGreatFaceologistMetadata(content);

export default function GreatFaceologistPage() {
  return <TheGreatFaceologistGuidePage content={content} />;
}
