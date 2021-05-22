import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
  // System navigation service doc
  // https://nils-mehlhorn.de/posts/angular-navigate-back-previous-page#static-back-navigation-with-routing

export class NagivationService {
  private history: string[] = []

  constructor(private router: Router,
              private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl('/')
    }
  }
}
