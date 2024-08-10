export default class Note{
  #id
  #title;
  #content;

  constructor (title, content) {
    this.#id = this.#id  = Math.floor(Math.random()*10000);
    this.#title = title;
    this.#content = content;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get content() {
    return this.#content;
  }

  set title(value) {
    this.#title = value;
  }

  set content(value) {
    this.#content = value;
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      content: this.#content
    }
  }
}