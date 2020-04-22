import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
    { path: 'user',component: UserComponent},
    { path: 'user/:id', component: UserDetailComponent },
	{ path: 'post', component: PostComponent },
	{ path: 'comment', component: CommentComponent },
	{ path: '',   redirectTo: '/user', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
