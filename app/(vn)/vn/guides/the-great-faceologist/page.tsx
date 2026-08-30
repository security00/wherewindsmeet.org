import TheGreatFaceologistGuidePage, {
  buildGreatFaceologistMetadata,
  greatFaceologistContent,
} from "@/components/guides/TheGreatFaceologistGuidePage";

const content = greatFaceologistContent.vi;

export const metadata = buildGreatFaceologistMetadata(content);

export default function GreatFaceologistPageVi() {
  return <TheGreatFaceologistGuidePage content={content} />;
}
