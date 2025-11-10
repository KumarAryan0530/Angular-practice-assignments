import { Component, OnInit } from '@angular/core';

export interface User {
  id: number;
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'User Activity Management';
  users: User[] = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  // Load initial users data
  loadUsers(): void {
    this.users = [
      { id: 1, name: 'Max', isActive: true },
      { id: 2, name: 'Anna', isActive: true },
      { id: 3, name: 'Chris', isActive: false },
      { id: 4, name: 'Manu', isActive: false }
    ];
  }

  // Toggle user status between active and inactive
  toggleUserStatus(user: User): void {
    user.isActive = !user.isActive;
  }

  // Get active users
  get activeUsers(): User[] {
    return this.users.filter(user => user.isActive);
  }

  // Get inactive users
  get inactiveUsers(): User[] {
    return this.users.filter(user => !user.isActive);
  }
}
