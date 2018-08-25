import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CostService } from '@app/cost/cost.service';
import { Cost } from '@app/cost/cost';
import { House } from '@app/house/house';
import { HouseService } from '@app/house/house.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from '@app/cross/component/confirm/confirm.component';

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
    private fb: FormBuilder,
    private modalService: NgbModal
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
    this._costService.findByParentId(this.model.id).subscribe((costList: Cost[]) => {
      this.costList = costList;
    });
  }

  private initForm () {
    this.houseForm = new FormGroup({
      name: new FormControl(this.model.name),
    });
  }

  public submit() {
    this._houseService.save(this.houseForm.value, this.model.id).subscribe((house: House) => {
      this.model = house;
    });
  }

  public deleteCost(costId) {
    this.modalService.open(ConfirmComponent).result.then((result) => {
      if (result === 'confirm') {
        this._costService.delete(costId).subscribe(() => {
          this.getCostList();
        });
      }
    });
  }

}
