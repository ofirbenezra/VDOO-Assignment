import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album, GetAlbumResponse} from '../models/spotify.models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  // tslint:disable-next-line: max-line-length
  private readonly TOKEN: string = 'BQDA8ie2BrW_jjPtS46d70HNwvDgAFTaOsK6F7dq6KkS5fOm3Ms-8T0uY2TODG84ljsEo5QmKQags3jc6ulo7s0X-8VE0YEQ83qUZYFH8EZuiA6cEmRXAUmhq4bkOC39X5r-d8ELtAL820N_w3gr9MoVs75zitxDpTAYXjlUoBBLrRM';
  private readonly DATA_URL: string = 'https://api.spotify.com/v1/artists/';

  constructor(private httpClient: HttpClient) {
  }

  public getAlbumsByArtist(artistID: string = '0du5cEVh5yTK9QJze8zA0C', limit: number = 25): Observable<Album[]> {
    return this.httpClient.get<GetAlbumResponse>(`${this.DATA_URL}${artistID}/albums?limit=${limit}`, {
      headers: this.getHeaders()
    }).pipe(
      map((res: GetAlbumResponse) => res.items)
    );
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.TOKEN}`)
      .set('Content-Type', 'application/json');
    return headers;
  }
}
