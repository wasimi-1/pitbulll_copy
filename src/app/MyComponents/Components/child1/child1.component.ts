import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {

  //signals - alternatywa dla @Input
  @Input() infoFromParent="";

}
