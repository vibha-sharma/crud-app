import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'user',component: UserComponent, canActivate: [AuthGuardService]},
    { path: 'user/:id', component: UserDetailComponent, canActivate: [AuthGuardService] },
	{ path: 'post', component: PostComponent, canActivate: [AuthGuardService] },
	{ path: 'comment', component: CommentComponent, canActivate: [AuthGuardService] },
	{ path: '',   redirectTo: '/user', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
