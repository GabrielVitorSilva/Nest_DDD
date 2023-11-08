import { randomUUID } from "node:crypto";

export class Answer {
  id: string
  public content: string

  constructor(content: string, id?: string) {
    this.id = id ?? randomUUID()
    this.content = content;
  }
}