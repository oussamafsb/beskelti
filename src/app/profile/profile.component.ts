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
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
    }); 

  }
  facebookLogin(){

    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    console.log(this.user);
  }
}
