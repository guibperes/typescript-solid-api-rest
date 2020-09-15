import { BaseError } from '../BaseError'

export class EntityNotFoundedError extends BaseError {

  constructor(message: string) {
    super(message, 404);
  }
}
