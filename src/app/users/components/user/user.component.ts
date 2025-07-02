import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


import { User } from '../../models/user.model';
import { ColumnMetadata } from '../../../shared/models/base-column.model';
import { UserQueryParams } from '../../models/user-query-params.model';
import { UserService } from '../../services/user.service';
import { DatetimePipe } from '../../pipes/datetime.pipe';

@Component({
  selector: 'app-user',
  imports: [CommonModule, TableModule, ProgressSpinnerModule, DatetimePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: User[] = [];
  columns: ColumnMetadata[] = [];
  totalRecords = 0;
  loading = false;

  params: UserQueryParams = {
    pageNumber: 1,
    pageSize: 10,
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.loading = true;
    this.userService.getUsers(this.params).subscribe({
      next: (res) => {
        this.users = res.data;
        this.columns = res.columns;
        this.totalRecords = res.totalCount;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
