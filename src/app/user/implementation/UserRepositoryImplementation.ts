import { EntityNotFoundedError } from '../../../base/error/EntityNotFoundedError';
import { User } from '../User'
import { UserRepository } from '../UserRepository'
import { EmailAlreadyExistsError } from '../error/EmailAlreadyExistsError';

export class UserRepositoryImplementation implements UserRepository {

  private data: User[] = [];

  async findAll(): Promise<User[]> {
    return this.data;
  }

  async findById(id: string): Promise<User> {
    const user = this.data.find(user => user.id === id);

    if (!user) {
      throw new EntityNotFoundedError('Cannot find user with provided id');
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.data.find(user => user.email === email);
  }

  async save(user: User): Promise<void> {
    const userExistsWithEmail = await this.findByEmail(user.email);

    if (userExistsWithEmail) {
      throw new EmailAlreadyExistsError('Email already in use');
    }

    this.data.push(user);
  }

  async updateById(id: string, user: User): Promise<User> {
    const userIndex = this.data.findIndex(user => user.id === id);

    if (userIndex === -1) {
      throw new EntityNotFoundedError('Cannot find user with provided id');
    }

    this.data[userIndex] = user;
    return user;
  }

  async deleteById(id: string): Promise<void> {
    this.data = this.data.filter(user => user.id !== id);
  }
}
