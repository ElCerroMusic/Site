import { createFileRoute } from "@tanstack/react-router";
import { ArtistPage } from "@/components/ArtistPage";

export const Route = createFileRoute("/wazko")({
  head: () => ({
    meta: [
      { title: "Wazko · El Cerro" },
      { name: "description", content: "Wazko en El Cerro. Próximamente: Sin Receta." },
      { property: "og:title", content: "Wazko · El Cerro" },
      { property: "og:description", content: "Próximamente: Sin Receta, nuevo sencillo de Wazko." },
    ],
  }),
  component: () => (
    <ArtistPage
      name="Wazko"
      links={[
        { label: "Instagram", href: "https://www.instagram.com/wazzko_/" },
        { label: "Spotify", href: "#" },
        { label: "YouTube", href: "#" },
      ]}
      coverLines={["Sin", "Receta"]}
      releaseTitle="Sin Receta"
      releaseType="Sencillo"
    />
  ),
});
