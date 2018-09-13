import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Child} from '../Child';
import {ChildService} from '../ChildService';
import {Family} from '../Family';

@Component({
  selector: 'app-children-family',
  templateUrl: './children-family.component.html',
  styleUrls: ['./children-family.component.css']
})
export class ChildrenFamilyComponent implements OnInit {

  id: number;
  children: Child[];

  constructor(private dataService: ChildService) { }

  ngOnInit() {
    this.searchCustomers();
  }

  private searchCustomers() {
    this.dataService.getChildOfFamily(this.id)
      .subscribe(children => this.children = children);
  }

  onSubmit() {
    this.searchCustomers();
  }

}
