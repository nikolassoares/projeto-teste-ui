import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import  {MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatDialogModule

];

@NgModule({
  imports: materialModules,
  exports: materialModules,
})
export class MaterialModule {}
