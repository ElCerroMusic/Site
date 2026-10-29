import { createFileRoute, Link } from "@tanstack/react-router";

const CLUEDO_COVER = "/__l5e/assets-v1/46422c5d-96b3-4c9a-816e-fd39b69d38a4/cluedo.jpg";
const CLUEDO_SPOTIFY = "https://open.spotify.com/intl-es/track/0F4WTkR1jLdjshpalFlCVp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EL CERRO · Lanzamientos" },
      { name: "description", content: "El Cerro, sello musical de Cali. Nuevo lanzamiento: Cluedo de Midas Alonso." },
      { property: "og:title", content: "EL CERRO · Lanzamientos" },
      { property: "og:description", content: "Nuevo lanzamiento: Cluedo de Midas Alonso." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="hero">
        <div>
          <p>Nuevo lanzamiento</p>
          <h1>Cluedo</h1>
          <p className="artist">Midas Alonso</p>
          <div className="links">
            <a href={CLUEDO_SPOTIFY} target="_blank" rel="noopener">Spotify</a>
            <a href="https://music.apple.com/search?term=Cluedo%20Midas%20Alonso" target="_blank" rel="noopener">Apple Music</a>
            <a href="https://www.youtube.com/results?search_query=Cluedo+Midas+Alonso" target="_blank" rel="noopener">YouTube</a>
          </div>
        </div>
        <div className="cover img" role="img" aria-label="Portada de Cluedo">
          <img src={CLUEDO_COVER} alt="Portada de Cluedo de Midas Alonso" />
        </div>
      </section>
      <section className="roster">
        <Link to="/wazko"><strong>Wazko</strong></Link>
        <Link to="/tenebris"><strong>Tenebris</strong></Link>
      </section>
    </main>
  );
}
