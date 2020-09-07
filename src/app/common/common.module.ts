import {NgModule} from '@angular/core';
import {DropDownComponent} from './drop-down/drop-down.component';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    DropDownComponent
  ],
  exports: [
    DropDownComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class CommonModule { }
