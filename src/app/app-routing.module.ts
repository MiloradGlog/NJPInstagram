import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent} from './components/content/details_component/details.component';
import { PostsComponent } from './components/content/posts_component/posts.component';
import {UsersComponent} from './components/content/users_component/users.component';
import {ChatComponent} from './components/chat_component/chat.component';
import {RegisterComponent} from './components/forms/register_component/register.component';
import {MyProfileComponent} from './components/content/my_profile_component/my-profile.component';
import {LoginComponent} from './components/forms/login_component/login.component';

const routes: Routes = [
  {
    path: 'details/:username',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'myProfile',
    component: MyProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
