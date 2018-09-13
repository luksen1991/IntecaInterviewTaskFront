import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Father} from '../Father';
import {FatherService} from '../FatherService';
import {Child} from '../Child';
import {ChildService} from '../ChildService';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

  children: Observable<Child[]>;

  constructor(private childService: ChildService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.children = this.childService.getChildrenList();
    console.log(this.children);
  }

}
