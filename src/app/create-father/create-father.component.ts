import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Father} from '../Father';
import {FatherService} from '../FatherService';
import {Child} from '../Child';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-father',
  templateUrl: './create-father.component.html',
  styleUrls: ['./create-father.component.css']
})
export class CreateFatherComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  father: Father = new Father();
  submitted = false;
    constructor(private fatherService: FatherService ) {
      this.datePickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue' , showWeekNumbers: false,
         minDate: new Date(2018, 0, 1), maxDate: new Date(2018, 12, 31),
         dateInputFormat: 'YYY-MM-DD'});
    }
  ngOnInit() {
  }
  newFather(): void {
    this.submitted = false;
    this.father = new Father();
  }

  save() {
    this.fatherService.createCustomer(this.father)
      .subscribe(data => console.log(data), error => console.log(error));
    this.father = new Father();
  }

  onSubmit() {
    this.submitted = true;
    // this.save();
  }
}
