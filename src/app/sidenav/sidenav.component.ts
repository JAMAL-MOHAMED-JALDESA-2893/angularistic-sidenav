import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-dat';
import { style, transition, trigger, animation, animate } from "@angular/animations";



interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
       transition(':enter', [
         style({ opacity: 0 }),
         animate('350ms',
           style({ opacity: 1 })
         )
       ]),
      transition(':enter', [
         style({ opacity: 0 }),
         animate('350ms',
           style({ opacity: 1 })
         )
       ]),
     ])
  ]
})
export class SidenavComponent implements OnInit{

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;

  navData = navbarData
  screenWidth = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }


  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }



}
