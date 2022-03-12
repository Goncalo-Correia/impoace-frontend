import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'impoace-frontend';

  private last_scroll_position: number = 0;
  isOnStore: boolean = false;
  isSearching: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url == "/Services") {
          this.scrollToServices();
        } else {
          this.scrollToTop();
        }
        this.isOnStore = val.url == "/Store";
      }
    });
  }

  @HostListener('window:scroll', ['$event']) 
  onScroll(event: any) {
    if (window.pageYOffset == 0) {
      this.showHideGoToTopButton(false);
    } else if (this.last_scroll_position > window.pageYOffset) {
      this.showHideGoToTopButton(true);
    } else {
      this.showHideGoToTopButton(false);
    }
    this.last_scroll_position = window.pageYOffset;
  }

  showHideSearch() {
    this.isSearching = !this.isSearching;
  }

  showHideGoToTopButton(isToShow: boolean) {
    if (isToShow) {
      document.getElementById("goToTopButton")!.classList.add("go-to-top-button-visible");
    } else {
      document.getElementById("goToTopButton")!.classList.remove("go-to-top-button-visible");
    }
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  scrollToServices(): void {
    var height = document.getElementById("homeCardImage")!.offsetTop; 
    var navbarHeight = document.getElementById("navBar")!.offsetHeight;
    height -= navbarHeight;
    window.scrollTo(0, height)
  }
}
