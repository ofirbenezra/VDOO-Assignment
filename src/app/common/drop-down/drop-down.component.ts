import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface DropDownItem {
  id: string;
  label: string;
  imgSrc?: string;
}

@Component({
  selector: 'vdoo-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() options: Array<DropDownItem> = [];
  @Input() placeHolderText = '';
  @Input() selectedValue = '';
  @Output() selectionChange = new EventEmitter<any>();

  isOpen = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDropDown() {
    this.isOpen = !this.isOpen;
  }

  itemChange(id: string, label: string) {
    this.toggleDropDown();
    this.selectedValue = label;
    this.selectionChange.emit(id);
  }

  get showValue(): boolean {
    return this.selectedValue === '';
  }

}
