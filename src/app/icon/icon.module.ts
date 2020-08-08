import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [IconComponent],
  imports: [
    CommonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  exports:[IconComponent]
})
export class IconModule { }
