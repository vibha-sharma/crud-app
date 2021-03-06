import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, 
  MatCardModule } from  '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigService } from './config.service';
import { TableComponent } from './table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoaderComponent } from './loader/loader.component';
import { NotificationComponent } from './notification/notification.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BellNotificationComponent } from './bell-notification/bell-notification.component';
import { EventService } from './event.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { loginService } from './login/login-service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    HeaderComponent,
    UserComponent,
    PageNotFoundComponent,
    TableComponent,
    ModalComponent,
    UserDetailComponent,
    LoaderComponent,
    NotificationComponent,
    BellNotificationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
  ConfigService,
  EventService,
  AuthGuardService,
  loginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
