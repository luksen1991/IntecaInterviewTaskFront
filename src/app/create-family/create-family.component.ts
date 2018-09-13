import { Component, OnInit } from '@angular/core';
import {Father} from '../Father';
import {Import} from '@angular/compiler-cli/src/ngtsc/host';

@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.css']
})
export class CreateFamilyComponent implements OnInit {

  father: Father = new Father();
  constructor() { }

  ngOnInit() {
  }
}
