import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TWAiki",
    short_name: "TWAiki",
    start_url: "/",
    display: "standalone",
    description: "A description for your application",
    lang: "en",
    dir: "auto",
    theme_color: "#000000",
    background_color: "#000000",
    orientation: "any",
    icons: [
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Home",
        url: "/",
        description: "Go to homepage",
        icons: [
          {
            src: "/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
        ],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  };
}
