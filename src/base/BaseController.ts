import { Request, Response } from 'express';

export interface BaseController {

  save(request: Request, response: Response): Promise<Response>;
  updateById(request: Request, response: Response): Promise<Response>;
  deleteById(request: Request, response: Response): Promise<Response>;
  findAll(request: Request, response: Response): Promise<Response>;
  findById(request: Request, response: Response): Promise<Response>;
}
