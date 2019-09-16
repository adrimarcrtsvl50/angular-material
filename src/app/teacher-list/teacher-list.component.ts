import { Component, OnInit } from '@angular/core';
import { Teacher } from '../dto/teachers';
import { TeacherService } from '../service/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'materia' , 'facultad'];
  teacher: Teacher[];
  

  constructor(private teacherService: TeacherService) { 
    this.teacher = this.teacherService.getTeacher();
   
  }
  ngOnInit() {
  }
}
