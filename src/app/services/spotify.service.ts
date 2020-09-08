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
  private readonly TOKEN: string = 'BQDlY2XIy9R-uWmcUKkOjPn2-jnuCDddutLm7OlHhf7ktGfWDSYIqaVJbhxDlSlOtqtQKKAOq-9AEDLz7EIgEGqe69F7abIDOXF5AhSDJUqrQL_syttOxWffTsTvPPdU4djIt4K3rlhh8GKtJkfTo-3U9fN4DOY5U5Vh2cGOzUJzPXA';
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
