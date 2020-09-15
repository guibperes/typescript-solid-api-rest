import { BaseRepository } from '../../base/BaseRepository'
import { User } from './User'

export interface UserRepository extends BaseRepository<User, string> {

  findByEmail(email: string): Promise<User | undefined>;
}
