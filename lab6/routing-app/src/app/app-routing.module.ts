import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { PostsComponent } from './posts/posts.component';
// import { PostDetailComponent } from './post-detail/post-detail.component';
import { AlbumComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component'
import { AlbumPhotosComponent } from './album-photos/album-photos.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'albums', component: AlbumComponent},
  {path: 'albums/:id', component: AlbumDetailComponent},
  {path: 'albums/:id/photos', component: AlbumPhotosComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },  
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
