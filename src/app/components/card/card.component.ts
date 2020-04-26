import { Component, Input } from '@angular/core';

interface Items {
  name: string;
  count: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() total: number;
  @Input() items: Items[];
  @Input() color: 'green' | 'red';
}
