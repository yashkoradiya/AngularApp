import { Component, OnInit } from '@angular/core';
import { Actress } from '../Actress';
import { Product } from '../Product';


@Component({
  selector: 'app-for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.css']
})
export class ForEachComponent implements OnInit {
Actress = ['Rashmika', 'Alia', 'Pooja', 'Jahanavi'];

data =[new Actress(555, "Shruti"),
      new Actress(111, "Sunny")];

proc= [new Product("TV", 8989),
       new Product("Mobile", 7001)];
      

constructor(){}



  ngOnInit(): void {
  }

}
