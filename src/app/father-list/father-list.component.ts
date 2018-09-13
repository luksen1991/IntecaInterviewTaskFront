import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Father} from '../Father';
import {FatherService} from '../FatherService';

@Component({
  selector: 'app-father-list',
  templateUrl: './father-list.component.html',
  styleUrls: ['./father-list.component.css']
})
export class FatherListComponent implements OnInit {


  fathers: Observable<Father[]>;

  constructor(private fatherService: FatherService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.fathers = this.fatherService.getFathersList();
  }
}
