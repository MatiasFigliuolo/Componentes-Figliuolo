import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface Student {

  Name: string;
  Age: number;
  Class: string;
};

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {

  Students: Student[] = [

    { Name: "Juan", Age: 18, Class: "First Grade" },
    { Name: "Maria", Age: 17, Class: "First Grade" },
    { Name: "Lucio", Age: 19, Class: "Second Grade" },
    { Name: "Martin", Age: 19, Class: "Second Grade" },
    { Name: "Lucas", Age: 20, Class: "Third Grade" },
    { Name: "Matias", Age: 17, Class: "First Grade" }
  ]

  showForm = false;

  showStudent() {
    this.showForm = !this.showForm;
  }

  myForm = this.formbuilder.group({
    name: this.formbuilder.control('', Validators.required),
    age: this.formbuilder.control('', Validators.required),
    class: this.formbuilder.control('', Validators.required),
  });
  constructor(private formbuilder: FormBuilder) { };

  get nameControl() {

    return this.myForm.get('name');

  }

  get ageControl() {

    return this.myForm.get('age');

  }


  // addStudent() {
  //     let newStudent: Student = {
  //       Name: this.myForm.value.name,
  //       age: this.myForm.value.age,
  //       class: this.myForm.value.class
  //     };
  //     this.Students.push(newStudent);
  //     this.myForm.reset();
  //   }
  // }
}
