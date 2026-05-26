(function () {
  const projects = window.PROJECTS || [];
  const teamProjects = window.TEAM_PROJECTS || [];

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function detailUrl(slug) {
    return `project.html?project=${encodeURIComponent(slug)}`;
  }

  function isExternalUrl(url) {
    return /^https?:\/\//.test(url);
  }

  function cardUrl(project, kind) {
    if (kind === "personal") return detailUrl(project.slug);
    return project.href || project.repo || "";
  }

  function linkAttributes(url) {
    if (!url) return "";
    const target = isExternalUrl(url) ? ' target="_blank" rel="noreferrer"' : "";
    return ` href="${escapeHtml(url)}"${target}`;
  }

  function cardHtml(project, kind = "personal") {
    const featuredClass = project.featured ? " project-card--featured" : "";
    const url = cardUrl(project, kind);
    const tagName = url ? "a" : "article";
    const placeholderClass = url ? "" : " project-card--placeholder";
    const actionText = project.action || (url ? "Open project" : "Details soon");
    const status = project.status
      ? `<span class="project-card__status">${escapeHtml(project.status)}</span>`
      : "";

    return `
      <${tagName} class="project-card${featuredClass}${placeholderClass}"${linkAttributes(url)}>
        <span class="project-card__media">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}" loading="lazy">
        </span>
        <span class="project-card__body">
          <span class="project-card__tag">${escapeHtml(project.tag)}</span>
          <span class="project-card__title">${escapeHtml(project.title)}</span>
          <span class="project-card__text">${escapeHtml(project.summary)}</span>
          ${status}
          <span class="project-card__action">${escapeHtml(actionText)}</span>
        </span>
      </${tagName}>
    `;
  }

  function renderProjectGrids() {
    document.querySelectorAll("[data-project-grid]").forEach((grid) => {
      const kind = grid.dataset.projectGrid || "personal";
      const source = kind === "team" ? teamProjects : projects;
      const limit = Number(grid.dataset.limit || source.length);
      grid.innerHTML = source.slice(0, limit).map((project) => cardHtml(project, kind)).join("");
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
    const repoAction = project.repo
      ? `<a class="button-link button-link--primary" href="${escapeHtml(project.repo)}" target="_blank" rel="noreferrer">Open repository</a>`
      : "";
    const sourceUrl = project.imageSourceUrl || project.image;

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
            ${repoAction}
            <a class="button-link" href="projects.html">All projects</a>
          </div>
        </div>
        <a class="project-detail__image" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">
          <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.imageAlt)}">
        </a>
        <div class="project-detail__body">
          <section>
            <h2>Why it matters</h2>
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
              <a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(project.imageSource)}</a>
            </p>
          </section>
        </div>
        <nav class="project-nav" aria-label="Project navigation">
          <a href="${detailUrl(previous.slug)}">Previous: ${escapeHtml(previous.title)}</a>
          <a href="${detailUrl(next.slug)}">Next: ${escapeHtml(next.title)}</a>
        </nav>
      </section>
    `;
  }

  renderProjectGrids();
  renderProjectDetail();
})();
