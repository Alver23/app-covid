import { Component, OnInit, Input } from '@angular/core';

interface Items {
  name: string;
  value: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() total: number;
  @Input() items: Items[];
  constructor() { }

  ngOnInit(): void {
  }

}
