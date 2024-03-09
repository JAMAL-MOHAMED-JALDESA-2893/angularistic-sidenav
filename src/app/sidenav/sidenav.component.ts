import { Component, Output } from '@angular/core';
import { navbarData } from './nav-dat';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Output() onToggleSidenav: EventEmitter<> = new EventEmitter();
  collapsed = false;

  navData = navbarData


  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
  }

  closeSidenav(): void{
    this.collapsed = false
  }



}
