import { Component, OnInit } from '@angular/core';
import {TabService} from '../../services/tab/tab.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public tabService: TabService,
  ) { }

  ngOnInit(): void {
  }

}
