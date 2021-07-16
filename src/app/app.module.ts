import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { LoadingComponent } from './Utils/loading/loading.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { VerificationComponent } from './Components/login/verification/verification.component';
import { ErrorPageComponent } from './Utils/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    HomeComponent,
    VerificationComponent,
    ErrorPageComponent,
  ],
  imports: [
    MatCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    // NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
