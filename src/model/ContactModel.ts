export default class ContactModel {
  private constructor(
    readonly title: string,
    readonly url: string,
    readonly icon: string
  ) {}

  static load() {
    return [
      new ContactModel("Mail", "konh@yandex.ru", "mail.png"),
      new ContactModel("GitHub", "https://github.com/KonH", "github.png"),
      new ContactModel(
        "LinkedIn",
        "https://www.linkedin.com/in/konhit",
        "linkedin.png"
      ),
    ];
  }
}
