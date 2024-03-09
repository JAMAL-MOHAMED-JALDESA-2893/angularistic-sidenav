import { Component, Output } from '@angular/core';
import { navbarData } from './nav-dat';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean
}

export class SidenavComponent {

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;

  navData = navbarData
  screenWidth = 0;


  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
  }

  closeSidenav(): void{
    this.collapsed = false
  }



}
