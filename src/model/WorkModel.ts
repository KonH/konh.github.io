import resumeData from "@/data/resume.json";
import type { ResumeData, WorkEntry } from "@/model/ResumeData";

const data = resumeData as ResumeData;

export type { WorkEntry };

export default class WorkModel {
  static loadAll(): WorkEntry[] {
    return data.work;
  }
}
