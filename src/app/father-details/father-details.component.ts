import { Component, OnInit, Input } from '@angular/core';
import {Father} from '../Father';
import {FatherService} from '../FatherService';
import {FatherListComponent} from '../father-list/father-list.component';

@Component({
  selector: 'app-father-details',
  templateUrl: './father-details.component.html',
  styleUrls: ['./father-details.component.css']
})
export class FatherDetailsComponent implements OnInit {

  @Input() customer: Father;
  father: Father = new Father();
  constructor(private fatherService: FatherService, private listComponent: FatherListComponent) {this.father = this.customer;
  }

  ngOnInit() {
  }

}
