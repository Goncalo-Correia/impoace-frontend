import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'impoace-frontend';

  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url == "/Services") {
          this.scrollToServices();
        } else {
          this.scrollToTop();
        }
      }
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  scrollToServices(): void {
    var height = document.getElementById("homeCardImage")!.offsetTop; 
    var navbarHeight = document.getElementById("nav-bar")!.offsetHeight;
    height -= navbarHeight;
    window.scrollTo(0, height)
  }
}
