import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Cost } from '@app/cost/cost';
import { CostService } from '@app/cost/cost.service';


@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {
  @Input() houseId: string;
  @Output() addNewCost: EventEmitter<Cost> = new EventEmitter();
  public model: Cost;
  public costForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private _costService: CostService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.model = new Cost();
    this.initForm();
  }

  private initForm () {
    this.costForm = new FormGroup({
      name: new FormControl(this.model.name),
      amount: new FormControl(this.model.amount),
      homeId: new FormControl(this.houseId),
      date: new FormControl(this.model.date)
    });
  }

  public submit() {
    this.costForm.value.date = this.costForm.value.date.year + '/' + this.costForm.value.date.month + '/' + this.costForm.value.date.day;
    this._costService.save(this.costForm.value, this.model.id).subscribe((cost: Cost) => {
      this.addNewCost.emit(cost);
    });
  }

}
