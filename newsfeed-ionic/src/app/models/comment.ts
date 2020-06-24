import { IComment } from '../interfaces/icomment';

export class Comment implements IComment {
  id = 0;
  message = '';
  date: Date = new Date(Date.now());
}
