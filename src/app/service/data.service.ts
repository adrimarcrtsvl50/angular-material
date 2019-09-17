import { Injectable } from '@angular/core';
import { Data } from '../dto/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  datas: Data[] = [
    {name: 'Tawee Pope', genero:'Drama', Calificacion1: 9, Fecha:'Aug-01-2011', Transactiondate: '2011-12-02'},
    {name: 'Hua Jai Sila', genero:'Drama - romance', Calificacion1: 10, Fecha:'jan-01-2019', Transactiondate: '2019-4-02'},
    {name: 'Jao Sao Chang Yon', genero:'Comedia', Calificacion1: 10, Fecha:'aug-01-2018', Transactiondate: '2019-1-02'},
    {name: 'Leh Ruk Bussaba', genero:'Romance', Calificacion1: 10, Fecha:'nov-07-2018', Transactiondate: '2018-12-02'},
    {name: 'Jao Sao Jum Yorm', genero:'Drama - romance', Calificacion1: 10, Fecha:'aug-01-2018', Transactiondate: '2018-10-01'},
    {name: 'Bpoop Phaeh Saniwaat', genero:'Drama - romance', Calificacion1: 10, Fecha:'fer-21-2018', Transactiondate: '2018-4-01'},
    {name: 'Mussaya', genero:'Romance', Calificacion1: 9, Fecha:'jul-31-2017', Transactiondate: '2017-8-01'},
    {name: 'Paragit Ruk Series', genero:'Accion.adventure-crimwn', Calificacion1: 10, Fecha:'jul-01-2017', Transactiondate: '2017-8-01'},
    {name: 'Rak Mai Mee Wan Tay', genero:'Drama - romance - fantasy - suspense', Calificacion1: 10, Fecha:'dec-30-2016', Transactiondate: '2017-01-01'},
  ];
  constructor() { }

  getData(){
    return this.datas;
  }
}
