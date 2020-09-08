import {Component, OnDestroy, OnInit} from '@angular/core';
import {Album} from '../../models/spotify.models';
import {Subscription} from 'rxjs';
import {SpotifyService} from '../../services/spotify.service';
import {DropDownItem} from '../../common/drop-down/drop-down.component';
import {globals} from '../../consts';

@Component({
  selector: 'vdoo-spotify-app',
  templateUrl: './spotify-app.component.html',
  styleUrls: ['./spotify-app.component.scss']
})
export class SpotifyAppComponent implements OnInit, OnDestroy {

  items: Array<DropDownItem> = [];
  albums: Array<Album> = [];
  private subscriptions: Subscription[] = [];
  album: Album;
  selectedAlbumName: string;


  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.subscriptions.push(this.spotifyService.getAlbumsByArtist()
      .subscribe((albums: Album[]) => {
        this.albums = albums;
        this.items = albums.map(album => {
          return {
            id: album.id,
            label: album.name,
            imgSrc: album.images.length > 0 ? album.images[0].url : ''
          };
        });
        this.getSelectedAlbumFromStorage();
      }, this.errorHandler));
  }

  private errorHandler() {
  }


  albumSelected(album: DropDownItem) {
    if(album) {
      this.album = this.albums.find(a => a.id === album.id)
      this.saveLocalStorage(album.id);
    }
  }

  resetSelection() {
    localStorage.removeItem(globals.SELECTED_ALBUM_ID);
    this.album = null;
    this.selectedAlbumName = '';
  }


  private saveLocalStorage(id: string) {
    if (id) {
      localStorage.setItem(globals.SELECTED_ALBUM_ID, id);
    } else {
      localStorage.removeItem(globals.SELECTED_ALBUM_ID);
    }
  }

  private getSelectedAlbumFromStorage() {
    const val = localStorage.getItem(globals.SELECTED_ALBUM_ID);
    if(val) {
      const album = this.albums.find(item => item.id === val);
      if(album) {
        this.album = album;
        this.selectedAlbumName = album.name;
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
