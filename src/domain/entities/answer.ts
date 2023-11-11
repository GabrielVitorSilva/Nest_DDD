import { randomUUID } from "node:crypto";

interface AnswerProps {
  content: string
  authorId: string
  questionId: string
}

export class Answer {
  public id: string
  public content: string
  public authorId: string
  public answerId: string

  constructor( props: AnswerProps, id?: string) {
    this.id = id ?? randomUUID()
    this.content = props.content;
    this.authorId = props.authorId;
    this.answerId = props.questionId;
  }
}