import React from "react";

const liveProjects = [
  {
    name: "ACoupon",
    category: "E-commerce · Coupons & Deals",
    description:
      "A live coupon and deals experience built around helping shoppers discover offers. Explore the deployed product and its real user-facing flow.",
    url: "https://acoupon.vercel.app/",
    number: "01",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "SIC ACQ",
    category: "Web Platform · Acquisition",
    description:
      "A deployed web project demonstrating a focused product interface and end-to-end web delivery. Open the live site to review the experience.",
    url: "https://sic-acq.pages.dev/",
    number: "02",
    accent: "from-cyan-500 to-blue-600",
  },
];

function LiveProjects() {
  return (
    <main className="container mx-auto max-width pt-12 pb-24 live-projects-page">
      <div className="max-w-3xl">
        <p className="live-eyebrow">SELECTED WORK / IN PRODUCTION</p>
        <h1 className="text-3xl md:text-5xl font-bold dark:text-light-heading text-dark-heading mt-3">
          Live <span className="text-gradient">Projects</span>
        </h1>
        <p className="text-content mt-5 text-base md:text-lg leading-relaxed">
          Real deployed projects with a focus on practical product experiences, clear interfaces,
          and production-minded delivery. Visit each live website to explore it yourself.
        </p>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10" aria-label="Live project links">
        {liveProjects.map((project) => (
          <article key={project.url} className="live-project-card">
            <div className={`live-project-art bg-gradient-to-br ${project.accent}`}>
              <span className="live-project-number">{project.number}</span>
              <span className="live-project-art-title">{project.name}</span>
              <span className="live-project-art-caption">LIVE WEB EXPERIENCE ↗</span>
            </div>
            <div className="p-6 md:p-7">
              <p className="live-project-category">{project.category}</p>
              <h2 className="text-2xl font-semibold dark:text-light-heading text-dark-heading mt-2">{project.name}</h2>
              <p className="text-content leading-relaxed mt-3">{project.description}</p>
              <a className="live-project-link" href={project.url} target="_blank" rel="noopener noreferrer">
                Visit live project <span aria-hidden="true">↗</span>
              </a>
              <p className="live-project-url">{project.url.replace("https://", "")}</p>
            </div>
          </article>
        ))}
      </section>
      <p className="text-content text-sm mt-8">Project links open in a new tab.</p>
    </main>
  );
}

export default LiveProjects;
