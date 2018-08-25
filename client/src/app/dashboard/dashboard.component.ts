import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house/house.service';
import { House } from '../house/house';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public houses: House[];

  constructor(
    private _houseService: HouseService
  ) { }

  ngOnInit() {
    this.getHouses();
  }

  private getHouses(): void {
    this._houseService.get().subscribe((houses: House[]) => {
      this.houses = houses;
    });
  }

}
