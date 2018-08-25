import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from '@app/user/user';
import { UserService } from '@app/user/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public myProfileForm: FormGroup;
  public model: User;

  constructor(
    public userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userService.verifyToken().subscribe((user: User) => {
      this.model = user;
      this.initForm();
    });
  }

  public submit(): void {
    this.userService.save(this.myProfileForm.value, this.model.id).subscribe((user: User) => {
      this.model = user;
    });
  }

  private initForm () {
    this.myProfileForm = new FormGroup({
      name: new FormControl(this.model.name),
      email: new FormControl(this.model.email)
    });
  }

}
