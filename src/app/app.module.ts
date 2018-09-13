import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFatherComponent } from './create-father/create-father.component';
import { HttpClientModule } from '@angular/common/http';
import { FatherListComponent } from './father-list/father-list.component';
import { FatherDetailsComponent } from './father-details/father-details.component';
import { CreateChildComponent } from './create-child/create-child.component';
import { ChildListComponent } from './child-list/child-list.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { ChildrenFamilyComponent } from './children-family/children-family.component';
import { CreateFamilyComponent } from './create-family/create-family.component';
import { SearchFamilyComponent } from './search-family/search-family.component';
import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CreateFatherComponent,
    FatherListComponent,
    FatherDetailsComponent,
    CreateChildComponent,
    ChildListComponent,
    FamilyListComponent,
    ChildrenFamilyComponent,
    CreateFamilyComponent,
    SearchFamilyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
