import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity";

interface AnswerProps {
  authorId: UniqueEntityId
  questionId: string
  content: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps>{
  getContent() {
    return this.props.content;
  }
}