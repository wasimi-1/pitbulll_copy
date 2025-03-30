import { Component, OnInit } from '@angular/core';
import { Country } from '../../MyClasses/country';

@Component({
  selector: 'app-directives',
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent implements OnInit {

  info="List of countries"

  countries = new Array();

  public constructor(){

  }

  ngOnInit(): void {
    this.countries.push(new Country('Mexico', 'Mexico City', 1964375))
    this.countries.push(new Country('Russia', 'Moscow', 17098242))
    this.countries.push(new Country('South Africa', 'Pretoria', 1221037))
    this.countries.push(new Country('Spain', 'Madrid', 505992))
    this.countries.push(new Country('United Kingdom', 'London', 243610))
  }

}
