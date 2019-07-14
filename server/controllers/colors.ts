import { colors } from '../mocks/colors';
import { Request, Response } from 'express';

export function getColors(req: Request, res: Response) {
  return res.status(201).send(JSON.stringify({ colors }));
}
