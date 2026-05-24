import { generateOgImage, OG_SIZE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "About Ninexgo";

export default function OgImage() {
  return generateOgImage({
    title: "About Ninexgo",
    description:
      "Independent software studio building developer tools and internet products.",
  });
}
