import { createFileRoute } from "@tanstack/react-router";
import { ArtistPage } from "@/components/ArtistPage";

export const Route = createFileRoute("/tenebris")({
  head: () => ({
    meta: [
      { title: "Tenebris · El Cerro" },
      { name: "description", content: "Tenebris en El Cerro. Nuevo material muy pronto." },
      { property: "og:title", content: "Tenebris · El Cerro" },
      { property: "og:description", content: "Nuevo material de Tenebris, muy pronto." },
    ],
  }),
  component: () => (
    <ArtistPage
      name="Tenebris"
      links={[
        { label: "Instagram", href: "#" },
        { label: "Spotify", href: "#" },
        { label: "YouTube", href: "#" },
      ]}
      coverLines={["Muy", "pronto"]}
      coverAlt
      releaseTitle="Nuevo material"
    />
  ),
});
