import { Component } from '@angular/core';


interface SideNavToggle{
  screenWidth: number;
  collapsed:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidenav';

  isSideNavCollapsed = false;

  screenWidth = 0;

  onToggleSidenav(data: SideNavToggle): void {
     this.screenWidth = data.screenWidth;
  }


}
