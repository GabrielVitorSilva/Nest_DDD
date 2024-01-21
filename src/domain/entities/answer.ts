import { Entity } from "../../core/entities/entity";
import { UniqueEntityId } from "../../core/entities/unique-entity";
import { Optional } from "../../core/types/optional";

interface AnswerProps {
  authorId: UniqueEntityId
  questionId: UniqueEntityId
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Answer extends Entity<AnswerProps>{
  getContent() {
    return this.props.content;
  }

  static create(props: Optional<AnswerProps, 'createdAt'>, id?: UniqueEntityId){
    const question = new Answer({
      ...props,
      createdAt: new Date(),
    }, id)

    return question
  }
}