import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar-layout',
  standalone: true,
  imports: [RouterModule, PanelMenuModule, CommonModule, TooltipModule,BadgeModule,OverlayPanelModule],
  templateUrl: './sidebar-layout.component.html',
  styleUrl: './sidebar-layout.component.css',
})
export class SidebarLayoutComponent {

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  notificationCount = 3;

notifications = [
  { title: 'New article posted', time: '2 minutes ago' },
  { title: 'User registration completed', time: '15 minutes ago' },
  { title: 'Ad request submitted', time: '1 hour ago' }
];

  // ✅ Sidebar items config
  sidebarItems = [
    { label: 'Dashboard', icon: 'pi pi-home', route: '/dashboard' },
    { label: 'Users', icon: 'pi pi-users', route: '/users' },
    { label: 'Authors', icon: 'pi pi-id-card', route: '/authors' },
    { label: 'Articles', icon: 'pi pi-file-check', route: '/articles' },
    { label: 'Advertisement', icon: 'pi pi-gift', route: '/advertisement' },
  ];

  user = {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/40', // Random profile image
  };

  logout() {
    // TODO: Add real logout logic (auth service, redirect etc.)
    console.log('User logged out');
  }
}
