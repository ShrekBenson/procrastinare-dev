import { Row } from "../components";

export default class Task{
  #id;
  #title;
  #description;
  #dueDate;
  #priority;
  #isDone = false;  

  constructor(title, description, dueDate, priority) {    
    this.#id  = Math.floor(Math.random()*10000);
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  get isDone() {
    return this.#isDone;
  }  

  set title(value) {
    this.#title = value;
  }

  set description(value) {
    this.#description = value;
  }

  set dueDate(value) {
    this.#dueDate = value;
  }

  set priority(value) {
    this.#priority = value;
  }

  set isDone(value) {
    this.#isDone = value;
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      description: this.#description,
      date: this.#dueDate,
      priority: this.#priority
    };
  }
}