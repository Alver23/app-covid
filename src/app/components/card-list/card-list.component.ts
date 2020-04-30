import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input() items: any[];
  @Input() title: string;
  @Input() color: string;
  @Input() loading: boolean;

  public random: string[] = ['120px', '200px', '300px', '160px', '240px'];

}
