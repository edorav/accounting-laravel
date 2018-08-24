import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CostService } from '@app/cost/cost.service';
import { Cost } from '@app/cost/cost';
import { House } from '@app/house/house';
import { HouseService } from '@app/house/house.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {
  public model: House;
  public houseForm: FormGroup;
  public costList: Cost[];

  constructor(
    private route: ActivatedRoute,
    private _houseService: HouseService,
    private _costService: CostService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this._houseService.findById(params.id).subscribe((house: House) => {
          this.model = house;
          this.getCostList();
          this.initForm();
        });
      } else {
        this.model = new House();
        this.initForm();
      }
    });
  }

  public getCostList(): void {
    this._costService.findByParentId(this.model._id).subscribe((costList: Cost[]) => {
      this.costList = costList;
    });
  }

  private initForm () {
    this.houseForm = new FormGroup({
      name: new FormControl(this.model.name),
    });
  }

  public submit() {
    this._houseService.save(this.houseForm.value, this.model._id).subscribe((house: House) => {
      this.model = house;
    });
  }

  public deleteCost(costId) {
    console.log(costId);
  }

}
