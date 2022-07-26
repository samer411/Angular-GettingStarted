import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MessageService } from './product/message/message.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular: Getting Started';
  constructor(private router: Router, private messageService: MessageService) {}

  displayMessages(): void {
    this.router.navigate([{ outlets: { popup: ['message'] } }]);
    this.messageService.isDiplayed = true;
  }
  hideMessages(): void {
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDiplayed = false;
  }
  getIsDisplayed() {
    return this.messageService.isDiplayed;
  }
  logOut() {
    this.router.navigateByUrl('/welcome');
  }
}
