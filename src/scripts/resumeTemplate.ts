import type { ResumeData } from "../model/ResumeData";

// Renders the CV PDF's HTML+CSS from resume data. This is project-specific
// (layout/copy tuned for Konstantin Khitrykh's CV) and deliberately kept out
// of tools/resume-pdf-exporter, which only knows how to turn an HTML string
// into a PDF file.
export function renderResumeHtml(data: ResumeData): string {
  const col1Categories = ["Game Dev", "Tech", "AI Tools"];
  const col2Categories = ["Web", "Infrastructure"];

  function renderSkillCol(cats: string[]): string {
    return data.skills.core
      .filter(([cat]) => cats.includes(cat))
      .map(([category, skills]) => {
        const names = skills.map((s) => s.title).join(", ");
        return `<div class="skill-row"><span class="skill-cat">${category}:</span> ${names}</div>`;
      })
      .join("");
  }

  const skillCol1 = renderSkillCol(col1Categories);
  const skillCol2 = renderSkillCol(col2Categories);

  const aboutParagraphs = data.about
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  const workRows = data.work
    .map((job) => {
      const bullets = job.bullets.map((b) => `<li>${b}</li>`).join("");
      const companyName = job.url
        ? `<a href="${job.url}"><strong>${job.company}</strong></a>`
        : `<strong>${job.company}</strong>`;
      const companyLine = job.companyInfo
        ? `${companyName}: ${job.companyInfo} <span class="job-company-sep">|</span> ${job.location}`
        : `${companyName} <span class="job-company-sep">·</span> ${job.location}`;
      return `
        <div class="job">
          <div class="job-header">
            <div>
              <span class="job-title">${job.title}</span>
              <div class="job-company">${companyLine}</div>
            </div>
            <span class="job-period">${job.period}</span>
          </div>
          <ul>${bullets}</ul>
        </div>`;
    })
    .join("");

  const educationRows = data.education
    .map(
      (e) =>
        `<div class="edu-row"><span class="edu-inst">${e.institution}</span> — ${e.field}, ${e.degree} <span class="edu-period">${e.period}</span></div>`,
    )
    .join("");

  const langItems = data.languages
    .map(
      (l) =>
        `<span class="lang-item"><strong>${l.language}</strong> ${l.level}</span>`,
    )
    .join("");

  const contactItems = data.contacts
    .map((c) =>
      c.href
        ? `<a href="${c.href}" class="contact-item">${c.value}</a>`
        : `<span class="contact-item">${c.value}</span>`,
    )
    .join('<span class="contact-sep">·</span>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 9.5pt;
    color: #1a1a1a;
    background: #fff;
    line-height: 1.4;
  }
  a { color: #1a1a1a; text-decoration: none; }

  /* Header */
  .header { text-align: center; margin-bottom: 12px; border-bottom: 2px solid #1a1a1a; padding-bottom: 8px; }
  .header h1 { font-size: 18pt; font-weight: 700; letter-spacing: -0.02em; }
  .contacts { margin-top: 4px; font-size: 8pt; color: #444; }
  .contact-item { color: #444; }
  .contact-sep { margin: 0 5px; color: #aaa; }

  /* Section headings */
  .section { margin-bottom: 10px; }
  .section-title {
    font-size: 7.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #555;
    border-bottom: 1px solid #ddd;
    padding-bottom: 2px;
    margin-bottom: 5px;
  }

  /* About */
  .about p { font-size: 9pt; color: #333; margin-bottom: 4px; }
  .about p:last-child { margin-bottom: 0; }

  /* Skills */
  .skills-cols { display: flex; gap: 24px; font-size: 9pt; color: #1a1a1a; line-height: 1.6; }
  .skills-col { flex: 1; }
  .skill-row { margin-bottom: 1px; }
  .skill-cat { font-weight: 700; color: #333; }

  /* Work */
  .job { margin-bottom: 8px; }
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2px;
  }
  .job-title { font-weight: 700; font-size: 9.5pt; }
  .job-company { font-size: 8.5pt; color: #444; margin-top: 1px; }
  .job-company a { color: #444; }
  .job-company-sep { color: #999; margin: 0 3px; }
  .job-period { font-size: 8pt; color: #666; white-space: nowrap; margin-left: 8px; }
  .job ul { margin-left: 14px; }
  .job li { font-size: 8.5pt; color: #333; margin-bottom: 0; }

  /* Education */
  .edu-row { font-size: 9pt; }
  .edu-inst { font-weight: 600; }
  .edu-period { color: #666; font-size: 8pt; margin-left: 6px; }

  /* Languages */
  .lang-item { margin-right: 14px; font-size: 9pt; }
</style>
</head>
<body>
  <div class="header">
    <h1>${data.personal.name}</h1>
    <div class="contacts">${contactItems}</div>
  </div>

  <div class="section about">
    ${aboutParagraphs}
  </div>

  <div class="section">
    <div class="section-title">Skills</div>
    <div class="skills-cols">
      <div class="skills-col">${skillCol1}</div>
      <div class="skills-col">${skillCol2}</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Experience</div>
    ${workRows}
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    ${educationRows}
  </div>

  <div class="section">
    <div class="section-title">Languages</div>
    ${langItems}
  </div>
</body>
</html>`;
}
