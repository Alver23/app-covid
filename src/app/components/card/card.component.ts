import { Component, OnInit, Input } from '@angular/core';

interface Items {
  name: string;
  count: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() total: number;
  @Input() items: Items[];
  @Input() color: 'green' | 'red';


  constructor() { }

  ngOnInit(): void {
    console.log('color', this.color)
  }


}
