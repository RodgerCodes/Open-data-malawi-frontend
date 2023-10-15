import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { SignupComponent } from './Pages/Auth/signup/signup.component';
import { ExploreComponent } from './Pages/explore/explore.component';
import { SearchResultComponent } from './Pages/search-result/search-result.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ExploreComponent,
    SearchResultComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
