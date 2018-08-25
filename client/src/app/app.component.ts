import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@app/cross/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    public authService: AuthService,
    private router: Router
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    const browserLang = translate.getBrowserLang();
    // console.log(browserLang);
  }

  public changeLang(langCode: string): void {
    this.translate.use(langCode);
  }

  public logout(): void {
    this.authService.destroySession();
    this.router.navigate(['login']);
  }
}
