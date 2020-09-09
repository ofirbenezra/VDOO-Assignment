import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface DropDownItem {
  id: string;
  label: string;
  imgSrc?: string;
}

@Component({
  selector: 'vdoo-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  host: {
    "(window:click)": "onWindowClick()"
  }
})
export class DropDownComponent implements OnInit {

  /**
   * @type {Array<DropDownItem>} Input array of options for drop down
   */
  @Input() options: Array<DropDownItem> = [];
  /**
   * @type {string} Input selected value for display
   */
  @Input() selectedValue = '';
  @Input() placeHolderText = '';

  /**
   * @type {string} Input drop down background color
   */
  @Input() backgroundColor: string = '#fff';
  /**
   * {string} Output callback for when the selection changes
   */
  @Output() selectionChange = new EventEmitter<string>();

  isOpen = false;
  constructor() { }

  ngOnInit() {
  }

  toggleDropDown(event: MouseEvent) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  itemChange(event: MouseEvent, id: string, label: string) {
    this.toggleDropDown(event);
    this.selectedValue = label;
    this.selectionChange.emit(id);
  }

  get showValue(): boolean {
    return this.selectedValue === '';
  }

  onWindowClick() {
    this.isOpen = false;
  }

}
