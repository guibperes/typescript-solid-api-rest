import { BaseError } from '../../../base/BaseError';

export class EmailAlreadyExistsError extends BaseError {

  constructor(message: string) {
    super(message, 409);
  }
}
