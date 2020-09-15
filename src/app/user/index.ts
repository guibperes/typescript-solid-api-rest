import { UserRepositoryImplementation } from './implementation/UserRepositoryImplementation';
import { UserControllerImplementation } from './implementation/UserControllerImplementation';

const userRepository = new UserRepositoryImplementation();
const userController = new UserControllerImplementation(userRepository);

export { userController };
