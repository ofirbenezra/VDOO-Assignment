import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Album} from '../../models/spotify.models';
import {Subscription} from 'rxjs';
import {SpotifyService} from '../../services/spotify.service';
import {DropDownItem} from '../../common/drop-down/drop-down.component';

@Component({
  selector: 'vdoo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() items: DropDownItem[];
  @Output() albumChange = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {

  }


  albumSelected(id: string) {
    const album = this.items.find(a => a.id === id);
    this.albumChange.emit(album);
  }


}
