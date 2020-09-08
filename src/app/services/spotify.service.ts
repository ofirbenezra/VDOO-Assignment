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
  private readonly TOKEN: string = 'BQBosYErk5mpEcTFzwmppfQun8fAscyMr2Ba0k1mWvTxaIZSxTguWbOt5OnHpaoZ1EBNl8KbxufI6rty_Fiw34I3-Ta8Jk-q6XXVMJoOE8OL_R4ADEBGVzugGQbZLwHXla74RGnihHVjDQsQSa0CWq_B4nF7rL7stIWRFoFKrFk_bBc';
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
