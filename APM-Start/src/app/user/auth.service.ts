import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  isloggedInUser: boolean = false;
  get isLoggedIn() {
    return true;
  }
  constructor(private router: Router) {}
}
