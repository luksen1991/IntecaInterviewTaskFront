import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {Family} from '../Family';
import {FamilyService} from '../../FamilyService';
import {Child} from '../Child';
import {ChildService} from '../ChildService';
import {Father} from '../Father';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {
  @Input() family: Family;
  families: Observable<Family[]>;
  id: number;
  k: number;
  children: Child[];

  constructor(private familyService: FamilyService) { }

  ngOnInit() {
    this.reloadData();
    // this.searchChildren(this.id);
    // this.k = Object.keys(this.families).length;
  }

  reloadData() {
    this.families = this.familyService.getFamilyList();
  }

  // searchChildren(id: number) {
  //   this.dataService.getChildOfFamily(id)
  //     .subscribe(children => this.children = children);
  // }

}
