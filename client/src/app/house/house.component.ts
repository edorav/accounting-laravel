import { Component, OnInit, Input } from '@angular/core';
import { House } from '@app/house/house';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  @Input() house: House;

  constructor() { }

  ngOnInit() {
    //console.log(this.house);
  }

}
