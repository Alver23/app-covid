import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title: string;
  @Input() total: number;
  @Input() color: 'green' | 'red';
  @Input() loading: boolean;

  public readonly priceTheme = {
    width: '172px',
    display: 'flex',
    height: '16px',
  };

  public readonly titileTheme = {
    width: '100px',
    display: 'flex',
    height: '12px',
  };
}
