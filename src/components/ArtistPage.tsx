import { Link } from "@tanstack/react-router";

type Props = {
  name: string;
  links: { label: string; href: string }[];
  coverLines: [string, string];
  coverAlt?: boolean;
  releaseTitle: string;
  releaseType?: string;
};

export function ArtistPage({ name, links, coverLines, coverAlt, releaseTitle, releaseType }: Props) {
  return (
    <main>
      <Link className="back" to="/">← El Cerro</Link>
      <section className="page">
        <div>
          <h1>{name}</h1>
          <div className="links">
            {links.map((l) => (
              <a key={l.label} href={l.href} target={l.href !== "#" ? "_blank" : undefined} rel="noopener">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="photo" role="img" aria-label={`Foto de ${name}`}>Foto de {name}</div>
        <div className="rel">
          <span className="soon">Próximamente</span>
          <div className={coverAlt ? "cover alt" : "cover"}>
            {coverLines[0]}<br />{coverLines[1]}
          </div>
          <h2>{releaseTitle}</h2>
          {releaseType && <span className="m">{releaseType}</span>}
          <div className="links">
            {["Spotify", "Apple Music", "YouTube"].map((p) => (
              <a key={p} href="#">{p}</a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
