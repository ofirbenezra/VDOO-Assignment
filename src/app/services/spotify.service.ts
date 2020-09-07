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
  private readonly TOKEN: string = 'BQBeaYau99gRgxpwPV_ZyiehjvAnCD3dEYhBazqzd-o8mi-bF1P-HiVfE86SvVr5lC_095GRf-uR8ncDLrkEayoDZxeEOuvKwRtQusT0279Q2JR_KtU71D5gnj5kKyfaiZ1QUnZw80PTnLpONgnIvin-XDqGFAOpnLVzcB-jUBeVQmI';
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
