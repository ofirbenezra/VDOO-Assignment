import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../models/spotify.models';

@Component({
  selector: 'vdoo-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  @Input() selectedAlbum: Album;
  constructor() { }

  ngOnInit() {
  }

}
