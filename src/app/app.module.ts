import { GithupFollowersComponent } from './githup-followers/githup-followers.component';
import { AuthorsService } from './authors/authors.service';
import { CoursesService } from './courses/courses.service';
import { TitleComponent } from './title/title.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TextCasePipe } from './text-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithupProfileComponent } from './githup-profile/githup-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    TextCasePipe,
    LikeComponent,
    ZippyComponent,
    NavbarComponent,
    HomeComponent,
    GithupProfileComponent,
    NotFoundComponent,
    GithupFollowersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
