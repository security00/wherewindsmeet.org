import TheGreatFaceologistGuidePage, {
  buildGreatFaceologistMetadata,
  greatFaceologistContent,
} from "@/components/guides/TheGreatFaceologistGuidePage";

const content = greatFaceologistContent.de;

export const metadata = buildGreatFaceologistMetadata(content);

export default function GreatFaceologistPageDe() {
  return <TheGreatFaceologistGuidePage content={content} />;
}
