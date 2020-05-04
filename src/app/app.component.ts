// Dependencies
import { Component } from '@angular/core';
import {TabService} from './services/tab/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public readonly tabService: TabService) {
  }
}
