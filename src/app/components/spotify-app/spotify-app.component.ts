import {Component, OnDestroy, OnInit} from '@angular/core';
import {Album} from '../../models/spotify.models';
import {Subscription} from 'rxjs';
import {SpotifyService} from '../../services/spotify.service';
import {DropDownItem} from '../../common/drop-down/drop-down.component';

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
      }, this.errorHandler));
  }

  private errorHandler() {
  }


  albumSelected(album: DropDownItem) {
    this.album = this.albums.find(a => a.id === album.id);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
