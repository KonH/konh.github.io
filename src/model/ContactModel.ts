export default class ContactModel {
  private constructor(
    readonly title: string,
    readonly url: string,
    readonly icon: string
  ) {}

  /* eslint-disable @typescript-eslint/no-explicit-any */
  static fromJson(json: any) {
    return new ContactModel(json.title, json.url, json.icon);
  }
}
