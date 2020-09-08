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
  private readonly TOKEN: string = 'BQDZez1xAGoEJKY4w9xQD8BnCp1capx7ZlenysaqiySSodmC_E0zaXOwZcEmCswxjD-ZFSyUcmO4IQcNTnNiM5pEy49ipJZkVpDNaW81VsNIX05Ek2mS3SZLsA-TGn4CekFsLo0zYo7663-dl118Wgh9kUy-zMJ3eKBnNqcuCwMRi5A';
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
