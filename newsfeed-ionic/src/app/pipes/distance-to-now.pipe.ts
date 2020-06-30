import { Pipe, PipeTransform } from '@angular/core';

import { formatDistanceToNowStrict } from 'date-fns';

@Pipe({
  name: 'distanceToNow',
  pure: false,
})
export class DistanceToNowPipe implements PipeTransform {
  transform(date: Date) {
    return `${formatDistanceToNowStrict(date)} ago`;
  }
}
