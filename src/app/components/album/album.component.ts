import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../models/spotify.models';

@Component({
  selector: 'vdoo-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  /**
   * @type {Album} Input selected album
   */
  @Input() selectedAlbum: Album;

  constructor() { }

  ngOnInit() {
  }

}
