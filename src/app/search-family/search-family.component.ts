import { Component, OnInit } from '@angular/core';
import {Child} from '../Child';
import {ChildService} from '../ChildService';
import {Family} from '../Family';
import {FamilyService} from '../FamilyService';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-search-family',
  templateUrl: './search-family.component.html',
  styleUrls: ['./search-family.component.css']
})
export class SearchFamilyComponent implements OnInit {
  choice: string;
  val: string;
  families: Observable<Family[]>;
  familiesTemp: Array<Family>;
  submitted = false;
  family: Family = new Family();
  k: number;

  constructor(private dataService: FamilyService) { }

  ngOnInit() {
    this.submitted = false;
    this.searchFamilies(this.choice);
  }

  onSelect(selectedItem: number) {
    console.log('Selected item Id: ', selectedItem); // You get the Id of the selected item here
    this.k = selectedItem;
  }
  searchFamilies(choice: string) {

    switch (choice) {

      case 'Pesel': {
        this.dataService.getFamilyByPeselChild(this.val)
          .subscribe(families => this.families = families);
        console.log(this.familiesTemp);
        break;
      }
      case 'Name': {
        this.dataService.getFamilyByNameChild(this.val)
          .subscribe(families => this.families = families);
        break;
      }
      case 'BirthDate': {
        this.dataService.getFamilyByBirthDateChild(this.val)
          .subscribe(families => this.families = families);
        break;
      }
      case 'Sourname': {
        this.dataService.getFamilyBySecondNameChild(this.val)
          .subscribe(families => this.families = families);
        break;
      }
      case 'Sex': {
        this.dataService.getFamilyBySexChild(this.val)
          .subscribe(families => this.families = families);
        break;
      }

    }
  }

  // getTransaction(id: number): Observable<Family> {
  //   return this.getTransaction().pipe(
  //     map(txs => txs.find(txn => txn.id === id))
  //   );
  // }

  onSubmit() {
    this.k = 0;
   this.searchFamilies(this.choice);
  }

}
