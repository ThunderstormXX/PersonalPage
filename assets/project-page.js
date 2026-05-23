(function () {
  const projects = window.PROJECTS || [];

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function projectUrl(slug) {
    return `project.html?project=${encodeURIComponent(slug)}`;
  }

  function cardHtml(project) {
    const featuredClass = project.featured ? " project-card--featured" : "";
    return `
      <a class="project-card${featuredClass}" href="${projectUrl(project.slug)}">
        <span class="project-card__media">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy">
        </span>
        <span class="project-card__body">
          <span class="project-card__tag">${escapeHtml(project.tag)}</span>
          <span class="project-card__title">${escapeHtml(project.title)}</span>
          <span class="project-card__text">${escapeHtml(project.summary)}</span>
          <span class="project-card__action">Open project</span>
        </span>
      </a>
    `;
  }

  function renderProjectGrids() {
    document.querySelectorAll("[data-project-grid]").forEach((grid) => {
      const limit = Number(grid.dataset.limit || projects.length);
      grid.innerHTML = projects.slice(0, limit).map(cardHtml).join("");
    });
  }

  function renderProjectDetail() {
    const mount = document.querySelector("[data-project-detail]");
    if (!mount) return;

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("project") || projects[0]?.slug;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
      document.title = "Project not found | Igor Ignashin";
      mount.innerHTML = `
        <section class="page-hero">
          <p class="section__eyebrow">Project</p>
          <h1>Project not found</h1>
          <p>The requested project page does not exist.</p>
          <a class="button-link" href="projects.html">Back to projects</a>
        </section>
      `;
      return;
    }

    const index = projects.indexOf(project);
    const previous = projects[(index - 1 + projects.length) % projects.length];
    const next = projects[(index + 1) % projects.length];

    document.title = `${project.title} | Igor Ignashin`;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", project.summary);
    }

    mount.innerHTML = `
      <section class="project-detail" aria-labelledby="project-title">
        <div class="project-detail__intro">
          <p class="section__eyebrow">${escapeHtml(project.tag)}</p>
          <h1 id="project-title">${escapeHtml(project.title)}</h1>
          <p>${escapeHtml(project.summary)}</p>
          <div class="project-detail__actions">
            <a class="button-link button-link--primary" href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">Open GitHub</a>
            <a class="button-link" href="projects.html">All projects</a>
          </div>
        </div>
        <a class="project-detail__image" href="${escapeHtml(project.imageSourceUrl)}" target="_blank" rel="noreferrer">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}">
        </a>
        <div class="project-detail__body">
          <section>
            <h2>Why it is interesting</h2>
            <p>${escapeHtml(project.details)}</p>
          </section>
          <section>
            <h2>Highlights</h2>
            <ul>
              ${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </section>
          <section class="project-source">
            <h2>Figure source</h2>
            <p>
              <a href="${escapeHtml(project.imageSourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(project.imageSource)}</a>
            </p>
          </section>
        </div>
        <nav class="project-nav" aria-label="Project navigation">
          <a href="${projectUrl(previous.slug)}">Previous: ${escapeHtml(previous.title)}</a>
          <a href="${projectUrl(next.slug)}">Next: ${escapeHtml(next.title)}</a>
        </nav>
      </section>
    `;
  }

  renderProjectGrids();
  renderProjectDetail();
})();
