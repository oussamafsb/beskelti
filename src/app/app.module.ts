import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule ,AuthServiceConfig,FacebookLoginProvider} from 'angularx-social-login'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VeloComponent } from './velo/velo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';


import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PiecesComponent } from './pieces/pieces.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { VetementsComponent } from './vetements/vetements.component';
import { ProfileComponent } from './profile/profile.component';

const config = new AuthServiceConfig([
{
  id: FacebookLoginProvider.PROVIDER_ID,
  provider: new FacebookLoginProvider('703956883747024')
}
]);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VeloComponent,
    HomeComponent,
    FooterComponent,
    PiecesComponent,
    AccessoiresComponent,
    VetementsComponent,
    ProfileComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    SocialLoginModule
  ],
  providers: [
     { provide: AuthServiceConfig, useFactory: provideConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
