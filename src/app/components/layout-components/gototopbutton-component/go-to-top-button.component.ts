import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'go-to-top-button',
    styleUrls: ['./go-to-top-button.component.css'],
    templateUrl: 'go-to-top-button.component.html'
})

export class GoToTopButtonComponent {

  private last_scroll_position: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    let tracker = event.target;
    let limit = tracker.scrollHeight - tracker.clientHeight;

    if (window.pageYOffset == 0) {
      this.showHideGoToTopButton(false);
    } else if (this.last_scroll_position > window.pageYOffset) {
      this.showHideGoToTopButton(true);
    } else if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      this.showHideGoToTopButton(true);
    } else {
      this.showHideGoToTopButton(false);
    }
    this.last_scroll_position = window.pageYOffset;
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
}