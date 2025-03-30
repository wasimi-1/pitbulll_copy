import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule
  ], 
  exports:[MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule]
})
export class MaterialsModule { }
