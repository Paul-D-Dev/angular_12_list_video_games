import { Component } from '@angular/core';
import { NagivationService } from '../../services/nagivation.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent{

  constructor(private nav: NagivationService) { }

  back(): void {
    this.nav.back();
  }

}
