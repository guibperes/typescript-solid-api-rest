import { Request, Response } from 'express';

import { User } from '../User';
import { UserRepository } from '../UserRepository';
import { UserController } from '../UserController';

export class UserControllerImplementation implements UserController {

  constructor(
    private userRepository: UserRepository,
  ) {}

  async save(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    try {
      await this.userRepository.save(new User({name, email, password}));

      return res.send();
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || 'Internal server error'
      })
    }
  }

  async updateById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, password } = req.body;

    try {
      const updatedUser = await this.userRepository.updateById(
        id,
        new User({ name, email, password }, id)
      );

      return res.json(updatedUser);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || 'Internal server error'
      })
    }
  }

  async deleteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      await this.userRepository.deleteById(id);

      return res.send();
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || 'Internal server error'
      })
    }
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userRepository.findAll();

      return res.json(users);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || 'Internal server error'
      })
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const user = await this.userRepository.findById(id);

      return res.json(user);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || 'Internal server error'
      })
    }
  }
}
