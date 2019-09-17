import { Component, OnInit } from '@angular/core';
import { Data } from '../app/dto/data';
import { DataService } from '../app/service/data.service';
import { FormControl } from '../../node_modules/@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { ViewEncapsulation } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myData = new FormControl();
  dataSelected: string;
  displayedColumn: string[] = ['check', 'select','name', 'genero', 'Calificacion1','Fecha','Transactiondate'];
  datas: Data[];
  filteredData;
  Datastrin:string;

  slider1=0;
  toggle1=false;
  date1 = new Date("2018/09/04");
  suma=0;
  CalSelected="";
  IsSelected : boolean;
  NameSelected1 : string;
  showornot:string="show/hide";



  cambiar() {
    this.suma = this.slider1;
    this.Datastrin="";
    for (var item of this.datas) {
      if (item.Calificacion1 <= this.slider1) {
        this.Datastrin=""+item.name+", "+this.Datastrin;
      }
    }
  }

  checkStatus(event){
    this.IsSelected=(event.checked);
  }

  getCal(NameSelected : string = ""){
    console.log(this.IsSelected);
    if(this.CalSelected.includes(NameSelected)){
      this.CalSelected=this.CalSelected.replace(NameSelected+",","");
    }
    else{
      this.CalSelected = this.CalSelected + " " + NameSelected;
      if (this.CalSelected.length>1){
        this.CalSelected = this.CalSelected+","
      }
    }
  }

  constructor(private dataService : DataService){
    this.datas=this.dataService.getData();
  }
}
