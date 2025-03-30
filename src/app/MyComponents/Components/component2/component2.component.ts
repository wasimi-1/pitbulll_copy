import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../../../MyServices/message.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component2',
  imports: [FormsModule],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {

  message="";

  subscription:Subscription;

  constructor(private messageService:MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(text => {
      this.message = text;
    });
  }

}
