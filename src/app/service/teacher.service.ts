import { Injectable } from '@angular/core';
import { Teacher } from '../dto/teachers';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teacher: Teacher[] = [
    {name: 'Alonso Moncada Mauricio',  materia: 'Elect:prof II sist (G & N de serv.inf)', facultad: 'Ingenieria Aplicada'},
    {name: 'Berbeo Morales Jorge Enrique',  materia: 'Ingenieria Economica', facultad: 'Economico Administrativo'},
    {name: 'Blanco Garrido Fabian', materia: 'Seguridad Informatica', facultad: 'Ingenieria Aplicada'},
    {name: 'Mellizo Angulo Oscar Guillermo',  materia: 'Electiva Profesional v (programacion en ambiente web)', facultad: 'Ingenieria Aplicada'},
    {name: 'Novoa Torres Noberto',  materia: 'Practica Social', facultad: 'Socio Humanistica'},
    {name: 'Reyes Roncancio Fredy',  materia: 'Ingenieria Software', facultad: 'Ingenieria Aplicada'}
  ];

  constructor() { }

  getTeacher() {
    return this.teacher;
  }

  
}
