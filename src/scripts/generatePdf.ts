import puppeteer from "puppeteer";
import SkillModel from "../model/SkillModel";
import WorkModel from "../model/WorkModel";
import { education, languages, pdfContacts } from "../model/CvData";

function buildHtml(): string {
  const coreSkills = SkillModel.loadCoreSkills();
  const otherSkills = SkillModel.loadOtherSkills();
  const jobs = WorkModel.loadAll();

  const skillRows = coreSkills
    .map(([category, skills]) => {
      const names = skills.map((s) => s.title).join("  ·  ");
      return `<tr><td class="skill-cat">${category}</td><td class="skill-names">${names}</td></tr>`;
    })
    .join("");

  const otherNames = otherSkills.map((s) => s.title).join(", ");

  const workRows = jobs
    .map((job) => {
      const bullets = job.bullets
        .map((b) => `<li>${b}</li>`)
        .join("");
      const companyLink = job.url
        ? `<a href="${job.url}">${job.company}</a>`
        : job.company;
      return `
        <div class="job">
          <div class="job-header">
            <div>
              <span class="job-title">${job.title}</span>
              <span class="job-company">${companyLink} · ${job.location}</span>
            </div>
            <span class="job-period">${job.period}</span>
          </div>
          <ul>${bullets}</ul>
        </div>`;
    })
    .join("");

  const educationRows = education
    .map(
      (e) =>
        `<div class="edu-row"><span class="edu-inst">${e.institution}</span> — ${e.field}, ${e.degree} <span class="edu-period">${e.period}</span></div>`,
    )
    .join("");

  const langItems = languages
    .map((l) => `<span class="lang-item"><strong>${l.language}</strong> ${l.level}</span>`)
    .join("");

  const contactItems = pdfContacts
    .map((c) => `<a href="${c.href}" class="contact-item">${c.value}</a>`)
    .join('<span class="contact-sep">·</span>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10pt;
    color: #1a1a1a;
    background: #fff;
    line-height: 1.5;
  }
  a { color: #1a1a1a; text-decoration: none; }

  /* Header */
  .header { text-align: center; margin-bottom: 18px; border-bottom: 2px solid #1a1a1a; padding-bottom: 10px; }
  .header h1 { font-size: 20pt; font-weight: 700; letter-spacing: -0.02em; }
  .contacts { margin-top: 5px; font-size: 8.5pt; color: #444; }
  .contact-item { color: #444; }
  .contact-sep { margin: 0 6px; color: #aaa; }

  /* Section headings */
  .section { margin-bottom: 16px; }
  .section-title {
    font-size: 8pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #555;
    border-bottom: 1px solid #ddd;
    padding-bottom: 3px;
    margin-bottom: 8px;
  }

  /* Skills */
  .skills-table { width: 100%; border-collapse: collapse; }
  .skill-cat {
    font-size: 8pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #555;
    width: 18%;
    padding: 2px 8px 2px 0;
    vertical-align: top;
  }
  .skill-names { font-size: 9.5pt; color: #1a1a1a; padding: 2px 0; }
  .other-skills { font-size: 9pt; color: #444; margin-top: 4px; }

  /* Work */
  .job { margin-bottom: 12px; }
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3px;
  }
  .job-title { font-weight: 700; font-size: 10pt; }
  .job-company { font-size: 9pt; color: #444; margin-left: 6px; }
  .job-company a { color: #444; }
  .job-period { font-size: 8.5pt; color: #666; white-space: nowrap; margin-left: 8px; }
  .job ul { margin-left: 16px; }
  .job li { font-size: 9pt; color: #333; margin-bottom: 1px; }

  /* Education */
  .edu-row { font-size: 9.5pt; }
  .edu-inst { font-weight: 600; }
  .edu-period { color: #666; font-size: 8.5pt; margin-left: 6px; }

  /* Languages */
  .lang-item { margin-right: 16px; font-size: 9.5pt; }
</style>
</head>
<body>
  <div class="header">
    <h1>Konstantin Khitrykh</h1>
    <div class="contacts">${contactItems}</div>
  </div>

  <div class="section">
    <div class="section-title">Skills</div>
    <table class="skills-table">${skillRows}</table>
    <div class="other-skills"><em>Also:</em> ${otherNames}</div>
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

async function generate(): Promise<void> {
  const html = buildHtml();

  const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;
  const browser = await puppeteer.launch({
    ...(executablePath ? { executablePath } : {}),
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.pdf({
    path: "public/Konstantin_Khitrykh_CV.pdf",
    format: "A4",
    printBackground: true,
    margin: { top: "16mm", right: "16mm", bottom: "16mm", left: "16mm" },
  });

  await browser.close();
  console.log("CV PDF generated: public/Konstantin_Khitrykh_CV.pdf");
}

generate().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
