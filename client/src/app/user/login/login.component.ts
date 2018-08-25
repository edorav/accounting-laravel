import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@app/user/user.service';
import { User } from '@app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public error: Boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public submit(): void {
    if (this.loginForm.valid) {
      this._userService.login(this.loginForm.value.email , this.loginForm.value.password).subscribe((user: User[]) => {
          if (user) {
            this.router.navigate(['']);
          } else {
            this.error = true;
          }
      });
    }
  }

}
