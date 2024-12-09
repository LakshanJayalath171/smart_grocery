import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';

import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:any = {

    username:'',
    password:''

  }

  constructor(private router:Router){}

  onlogin(){
    if(this.loginObj.username=='admin' && this.loginObj.password=='123456'){
      this.router.navigateByUrl('/product')
    }
    else{
      alert('something went wrong')
    }
  }



}
