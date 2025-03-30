import { Component } from '@angular/core';
import { ParentComponent } from '../Components/parent/parent.component';

@Component({
  selector: 'app-communication',
  imports: [ParentComponent],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent {

}
