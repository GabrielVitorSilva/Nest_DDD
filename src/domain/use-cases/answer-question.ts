import { UniqueEntityId } from "../../core/entities/unique-entity";
import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string
}

export class  AnswerQuestionUseCase {
  constructor(
    private answersRepository: AnswersRepository
  ){}
  async execute({questionId, instructorId, content}: AnswerQuestionUseCaseRequest){
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
    })

    await this.answersRepository.create(answer) 
    return answer
  }
}