import { Pipe, PipeTransform, inject } from '@angular/core';
import { formatDate } from '@angular/common';
import { CommonModule } from '@angular/common';

@Pipe({
  standalone: true,
  name: 'datetime',
  pure: true
})
export class DatetimePipe implements PipeTransform {
  transform(value: string): string {
    return formatDate(value, 'MMM d, y, h:mm a', 'en-IN');
  }
}
