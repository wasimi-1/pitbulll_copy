import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';
@Component({
  selector: 'app-parent',
  imports: [FormsModule, Child1Component, Child2Component, Component1Component, Component2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  msg="";
  msgToChild="";

  msgFromChild="";

  btnSend(){
    //alert("button clicked");
    this.msgToChild="message from parent: " + this.msg;
  }

  getMessage(info:string){
    this.msgFromChild=info;
  }

}
