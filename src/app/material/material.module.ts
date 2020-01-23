import { NgModule } from '@angular/core';
import {
  MatTableModule, MatSidenavModule, MatToolbarModule,MatFormFieldModule, MatInputModule, MatSortModule,
  MatPaginatorModule,MatExpansionModule, MatDialogModule, MatButtonModule
}
from '@angular/material/'

const MaterialComponents = [
  MatTableModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatExpansionModule,
  MatDialogModule,
  MatButtonModule
];

@NgModule({
  imports: [MaterialComponents] ,
  exports: [MaterialComponents]
   
})
export class MaterialModule { }
