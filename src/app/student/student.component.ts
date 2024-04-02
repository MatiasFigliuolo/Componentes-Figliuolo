import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  showForm = false;
  
  showStudent () {
    this.showForm = !this.showForm;
  }

 myForm = this.formbuilder.group({
    name: this.formbuilder.control(''),
    age: this.formbuilder.control(''),
    Class: this.formbuilder.control(''),
  });
  constructor (private formbuilder : FormBuilder){}

}


