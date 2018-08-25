import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cost } from '@app/cost/cost';
import { CostService } from '@app/cost/cost.service';

@Component({
  selector: 'app-cost-detail',
  templateUrl: './cost-detail.component.html',
  styleUrls: ['./cost-detail.component.css']
})
export class CostDetailComponent implements OnInit {

  @Input() houseId: string;
  public model: Cost;
  public costForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private _costService: CostService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.houseId);
    this.model = new Cost();
    this.initForm();
  }

  private initForm () {
    this.costForm = new FormGroup({
      name: new FormControl(this.model.name),
      homeId: new FormControl(this.houseId)
    });
  }

  public submit() {
    this._costService.save(this.costForm.value, this.model.id).subscribe((cost: Cost) => {
      this.model = cost;
    });
  }

}
