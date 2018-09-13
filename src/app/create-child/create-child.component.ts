import {Component, Input, OnInit} from '@angular/core';
import {Father} from '../Father';
import {Child} from '../Child';
import {ChildService} from '../ChildService';
import {Family} from '../Family';
import {FamilyService} from '../FamilyService';
import {RequestOptions} from '@angular/http';
import {BsDatepickerConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-create-child',
  templateUrl: './create-child.component.html',
  styleUrls: ['./create-child.component.css']
})
export class CreateChildComponent implements OnInit {

  @Input('father') father: Father = new Father();
  family: Family = new Family();
  child: Child = new Child();
  submitted = false;
  childList: Array<Child> = [];
  datePickerConfig: Partial<BsDatepickerConfig>;

  table: Array<Object> = [
    {num: 0, name: 'Man'},
    {num: 1, name: 'Women'}
  ];
  constructor(private familyService: FamilyService) {
    this.datePickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue' , showWeekNumbers: false,
      minDate: new Date(2018, 0, 1), maxDate: new Date(2018, 12, 31),
      dateInputFormat: 'YYY-MM-DD'});
  }

  ngOnInit() {
  }
  createFamily() {
    this.family.father = new Father();
    this.family.father = this.father;
    this.family.childList = new Array<Child>();
    this.family.childList = this.childList;
    console.log(this.family);
    this.familyService.createFamily(this.family).subscribe(data => console.log(data), error => console.log(error));
    this.family = new Family();
  }
  addChildToList() {
    this.childList.push(this.child);
  }
  newChild(): void {
    this.submitted = false;
    this.child = new Child();
  }

  onSubmit() {
    this.submitted = true;
  }



}
