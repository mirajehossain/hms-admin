import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { FetchDialogComponent } from './fetch-dialog/fetch-dialog.component';



@NgModule({
  declarations: [DeleteDialogComponent, UpdateDialogComponent, FetchDialogComponent],
  imports: [
    CommonModule
  ]
})
export class PartialsModule { }
