import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
regForm: any;
console='any.log(loginpage: any)';

constructor(){}
ngOnInit(){}

loginpage(formValues: any){
  console.log('checking form values', formValues);
}

}