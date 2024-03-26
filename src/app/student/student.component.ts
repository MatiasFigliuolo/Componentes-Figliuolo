import { Component } from '@angular/core';

interface Student {

  Name: String;
  Age: number;
  Class: String;
};

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

  Students : Student [] = [

    {Name: "Juan" , Age: 18 , Class: "First Grade"},
    {Name: "Maria" , Age: 17 , Class: "First Grade"},
    {Name: "Lucio" , Age: 19 , Class: "Second Grade"},
    {Name: "Martin" , Age: 19 , Class: "Second Grade"},
    {Name: "Lucas" , Age: 20 , Class: "Third Grade"},
    {Name: "Matias" , Age: 17 , Class: "First Grade"}
  ]
  

}
