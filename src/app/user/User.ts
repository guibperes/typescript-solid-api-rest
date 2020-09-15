import { BaseEntity } from '../../base/BaseEntity';

export class User extends BaseEntity {

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    super(id);

    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }
}
