import { Component, OnInit } from '@angular/core';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any = [];

  constructor(private ss: StudentService) { }

  ngOnInit(): void {
    this.students = this.ss.getStudents().subscribe((data) => {
        this.students = data.students;
      });
  }

}
 