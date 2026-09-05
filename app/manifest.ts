import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stackup Kenya — Creative Agency",
    short_name: "Stackup Kenya",
    description:
      "Stackup Kenya is a leading full-service creative agency in Nairobi, Kenya: Web Development, Design, & Social Media Management.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0c0c",
    theme_color: "#5746e3",
    icons: [
      {
        src: "/stackup%20svg.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
