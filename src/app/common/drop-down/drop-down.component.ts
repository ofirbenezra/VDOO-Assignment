import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface DropDownItem {
  id: string;
  label: string;
  imgSrc: string;
}

@Component({
  selector: 'vdoo-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() options: Array<DropDownItem> = [];
  @Input() placeHolderText = '';
  @Output() selectionChange = new EventEmitter<any>();
  selectedValue = '';

  isOpen = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDropDown() {
    this.isOpen = !this.isOpen;
  }

  itemChange(value: string) {
    this.toggleDropDown();
    this.selectedValue = value;
    this.selectionChange.emit(value);
  }

  get showPlaceHolder(): boolean {
    return this.isOpen && this.selectedValue === '';;
  }



}
