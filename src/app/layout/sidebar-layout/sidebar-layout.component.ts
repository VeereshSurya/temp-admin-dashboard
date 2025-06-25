import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar-layout',
  standalone: true,
  imports: [RouterOutlet,RouterModule, PanelMenuModule,CommonModule],
  templateUrl: './sidebar-layout.component.html',
  styleUrl: './sidebar-layout.component.css'
})
export class SidebarLayoutComponent {
  //  items: MenuItem[] = [
  //   {
  //     label: 'Dashboard',
  //     icon: 'pi pi-home',
  //     routerLink: ['/dashboard']
  //   },
  //   {
  //     label: 'Users',
  //     icon: 'pi pi-users',
  //     routerLink: ['/users']
  //   },
  //   {
  //     label: 'Authors',
  //     icon: 'pi pi-id-card',
  //     routerLink: ['/authors']
  //   },
  //   {
  //     label: 'Articles',
  //     icon: 'pi pi-file',
  //     routerLink: ['/articles']
  //   },
  //   {
  //     label: 'Advertisement',
  //     icon: 'pi pi-bullhorn',
  //     routerLink: ['/advertisement']
  //   }
  // ];

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }


  // ✅ Sidebar items config
  sidebarItems = [
    { label: 'Dashboard', icon: 'pi pi-home', route: '/dashboard' },
    { label: 'Users', icon: 'pi pi-users', route: '/users' },
    { label: 'Authors', icon: 'pi pi-id-card', route: '/authors' },
    { label: 'Articles', icon: 'pi pi-file', route: '/articles' },
    { label: 'Advertisement', icon: 'pi pi-bullhorn', route: '/advertisement' }
  ];


}
