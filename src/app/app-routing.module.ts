import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateFatherComponent} from './create-father/create-father.component';
import {FatherListComponent} from './father-list/father-list.component';
import {CreateChildComponent} from './create-child/create-child.component';
import {ChildListComponent} from './child-list/child-list.component';
import {FamilyListComponent} from './family-list/family-list.component';
import {ChildrenFamilyComponent} from './children-family/children-family.component';
import {CreateFamilyComponent} from './create-family/create-family.component';
import {SearchFamilyComponent} from './search-family/search-family.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'father', component: CreateFatherComponent },
  { path: 'fatherlist', component: FatherListComponent },
  { path: 'child', component: CreateChildComponent},
  { path: 'childlist', component: ChildListComponent},
  { path: 'familylist', component: FamilyListComponent},
  {path: 'familychild', component: ChildrenFamilyComponent},
  {path:  'createfamily', component: CreateFamilyComponent},
  {path: 'searchFamily' , component: SearchFamilyComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
