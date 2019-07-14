import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
// import { ReposComponent } from './repos/repos.component';
// import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    // ReposComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
