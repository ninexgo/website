import { generateOgImage, OG_SIZE } from "@/lib/og-image";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Ninexgo — Independent software studio";

export default function OgImage() {
  return generateOgImage({
    title: "Ninexgo",
    description:
      "Developer tools, platforms, and internet products — made to last.",
  });
}
