import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stackup Kenya — Software & Web Engineering",
    short_name: "Stackup Kenya",
    description:
      "Stackup Kenya is a leading software company and web development agency in Nairobi, Kenya: Custom Software, AI Solutions, Web Development, & Design.",
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
