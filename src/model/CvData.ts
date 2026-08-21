import resumeData from "@/data/resume.json";
import type {
  ResumeData,
  PersonalInfoEntry,
  EducationEntry,
  LanguageEntry,
  ContactEntry,
} from "@/model/ResumeData";

const data = resumeData as ResumeData;

export type { PersonalInfoEntry, EducationEntry, LanguageEntry, ContactEntry };

export const personal: PersonalInfoEntry = data.personal;
export const about: string[] = data.about;
export const education: EducationEntry[] = data.education;
export const languages: LanguageEntry[] = data.languages;
export const pdfContacts: ContactEntry[] = data.contacts;
