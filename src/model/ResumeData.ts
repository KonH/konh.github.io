// Shape of src/data/resume.json — the single source of truth for resume
// content shared by the web app (PersonalInfo, SkillList, WorkHistory, ...)
// and the PDF exporter (src/scripts/generatePdf.ts). Update this interface
// and resume.json together; the individual src/model/*.ts files below are
// thin typed views over the same JSON, so there is exactly one place each
// fact is written down.

export interface PersonalInfoEntry {
  name: string;
  title: string;
}

export interface WorkEntry {
  company: string;
  companyInfo?: string;
  url: string | null;
  title: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  tags: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  period: string;
}

export interface LanguageEntry {
  language: string;
  level: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href: string;
}

export interface ResumeData {
  personal: PersonalInfoEntry;
  about: string[];
  // Skill titles only, grouped by category — this is what the resume PDF
  // actually renders ("Category: Title, Title, ..."). The detailed per-skill
  // bullet points (SkillEntry["keys"]) are web-only (the /skills accordion),
  // never appear in the PDF, and are kept in src/model/SkillModel.ts instead
  // of duplicated here.
  skills: {
    core: [string, string[]][];
    other: string[];
  };
  work: WorkEntry[];
  education: EducationEntry[];
  languages: LanguageEntry[];
  contacts: ContactEntry[];
}
