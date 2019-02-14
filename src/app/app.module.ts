import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';



import { AppComponent } from './app.component';

import { UsersComponent } from './components/content/users_component/users.component';
import { ChatComponent } from './components/chat_component/chat.component';
import { SidebarComponent } from './components/sidebar_component/sidebar.component';
import { PostsComponent } from './components/content/posts_component/posts.component';
import { DetailsComponent } from './components/content/details_component/details.component';
import { UsersDialogComponent } from './components/dialogs/users_dialog/users-dialog.component';
import { AddPostDialogComponent } from './components/dialogs/add-post-dialog/add-post-dialog.component';
import { MyProfileComponent } from './components/content/my_profile_component/my-profile.component';
import { RegisterComponent } from './components/forms/register_component/register.component';
import { LoginComponent } from './components/forms/login_component/login.component';
import { FollowersComponent } from './components/content/followers_component/followers.component';
import { FollowingComponent } from './components/content/following_component/following.component';
import { FollowersDialogComponent } from './components/dialogs/followers-dialog/followers-dialog.component';
import { SlideshowModule } from 'ng-simple-slideshow';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    DetailsComponent,
    UsersComponent,
    ChatComponent,
    UsersDialogComponent,
    AddPostDialogComponent,
    MyProfileComponent,
    RegisterComponent,
    LoginComponent,
    FollowersComponent,
    FollowingComponent,
    FollowersDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UsersDialogComponent, AddPostDialogComponent, FollowersDialogComponent]
})
export class AppModule { }
