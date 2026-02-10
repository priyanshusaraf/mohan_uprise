import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohan Uprise Pvt Ltd",
    short_name: "Mohan Uprise",
    description:
      "Real estate builders in Kolkata delivering residential, commercial, and infrastructure projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/mohan-uprise-logo.png",
        sizes: "762x726",
        type: "image/png",
      },
    ],
  };
}
