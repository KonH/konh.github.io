import puppeteer from "puppeteer";
import SkillModel from "../model/SkillModel";
import WorkModel from "../model/WorkModel";
import { education, languages, pdfContacts } from "../model/CvData";

function buildHtml(): string {
  const coreSkills = SkillModel.loadCoreSkills();
  const jobs = WorkModel.loadAll();

  const col1Categories = ["Game Dev", "Tech", "AI Tools"];
  const col2Categories = ["Web", "Infrastructure"];

  function renderSkillCol(cats: string[]): string {
    return coreSkills
      .filter(([cat]) => cats.includes(cat))
      .map(([category, skills]) => {
        const names = skills.map((s) => s.title).join(", ");
        return `<div class="skill-row"><span class="skill-cat">${category}:</span> ${names}</div>`;
      })
      .join("");
  }

  const skillCol1 = renderSkillCol(col1Categories);
  const skillCol2 = renderSkillCol(col2Categories);

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
  .job-company { font-size: 8.5pt; color: #444; margin-left: 5px; }
  .job-company a { color: #444; }
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
    <h1>Konstantin Khitrykh</h1>
    <div class="contacts">${contactItems}</div>
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
    margin: { top: "12mm", right: "14mm", bottom: "12mm", left: "14mm" },
  });

  await browser.close();
  console.log("CV PDF generated: public/Konstantin_Khitrykh_CV.pdf");
}

generate().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
