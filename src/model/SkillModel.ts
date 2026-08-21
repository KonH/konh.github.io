import resumeData from "@/data/resume.json";
import type { ResumeData, SkillEntry } from "@/model/ResumeData";

const data = resumeData as ResumeData;

export default class SkillModel {
  private constructor(
    readonly title: string,
    readonly keys: string[],
  ) {}

  private static from(entry: SkillEntry): SkillModel {
    return new SkillModel(entry.title, entry.keys);
  }

  static loadCoreSkills(): [string, SkillModel[]][] {
    return data.skills.core.map(([category, skills]) => [
      category,
      skills.map(SkillModel.from),
    ]);
  }

  static loadOtherSkills(): SkillModel[] {
    return data.skills.other.map(SkillModel.from);
  }
}
