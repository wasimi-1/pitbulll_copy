import { Component } from '@angular/core';
import { MaterialsModule } from '../../MyModules/materials/materials.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material',
  imports: [MaterialsModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {

  name = "";

  constructor(private router:Router){}

  btnClick(){
    alert("info: " + this.name);
  }
  
  btnHome(){
    this.router.navigate(['home']);
  }
}
