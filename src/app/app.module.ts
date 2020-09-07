import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyAppComponent } from './components/spotify-app/spotify-app.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { AlbumComponent } from './components/album/album.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import {CommonModule} from './common/common.module';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyAppComponent,
    SearchComponent,
    AlbumComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
