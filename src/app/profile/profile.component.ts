import { Component, OnInit } from '@angular/core';
import { AuthService , SocialUser , FacebookLoginProvider} from 'angularx-social-login';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user : any = SocialUser;
  constructor(private socialAuthService : AuthService) {
    this.facebookLogin();
   }

  ngOnInit() {
  }
  facebookLogin(){
    console.log('hi there');
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
    });
    console.log(this.user);
  }
}
