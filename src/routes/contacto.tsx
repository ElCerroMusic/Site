import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · El Cerro" },
      { name: "description", content: "Contacta a El Cerro por Instagram o correo." },
      { property: "og:title", content: "Contacto · El Cerro" },
      { property: "og:description", content: "Instagram @elcerromusic_ · elcerromusicgroup@gmail.com" },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <main className="contact-view">
      <div>
        <Link className="back" to="/">← El Cerro</Link>
        <section className="page" style={{ display: "block", paddingBottom: 0 }}><h1>Contacto</h1></section>
      </div>
      <section className="roster c">
        <div className="row">
          <a href="https://www.instagram.com/elcerromusic_" target="_blank" rel="noopener">
            <strong>Instagram</strong>
          </a>
          <small>@elcerromusic_</small>
        </div>
        <div className="row">
          <a href="mailto:elcerromusicgroup@gmail.com">
            <strong>Correo</strong>
          </a>
          <small>elcerromusicgroup@gmail.com</small>
        </div>
      </section>
    </main>
  );
}
