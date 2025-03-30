import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child2',
  imports: [FormsModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  msg="";

  @Output() childMessage = new EventEmitter<string>();

  btnSend(){
    this.childMessage.emit("info from child: " + this.msg);
  }
}
