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

export const education: EducationEntry[] = [
  {
    institution: "Novosibirsk Institute of Economics and Management",
    degree: "Bachelor's",
    field: "Computer Science",
    period: "2009 – 2013",
  },
];

export const languages: LanguageEntry[] = [
  { language: "Russian", level: "Native" },
  { language: "English", level: "B2" },
  { language: "Serbian", level: "A2" },
];

export const pdfContacts: ContactEntry[] = [
  {
    label: "Location",
    value: "Novi Sad, Serbia",
    href: "",
  },
  {
    label: "Email",
    value: "konhit@gmail.com",
    href: "mailto:konhit@gmail.com",
  },
  {
    label: "Phone",
    value: "+381 62 9750 407",
    href: "tel:+381629750407",
  },
  {
    label: "GitHub",
    value: "github.com/KonH",
    href: "https://github.com/KonH",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/konhit",
    href: "https://www.linkedin.com/in/konhit",
  },
];
