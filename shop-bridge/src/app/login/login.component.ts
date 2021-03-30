import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  userName: string = "";
  passWord: string = "";
  message: string = "";
  flagsCheck: boolean =false;
  ngOnInit(): void {
  }
  checkLogin(){
    if(this.userName === "admin" && this.passWord === "1234"){
      this.flagsCheck = false;
      this.router.navigateByUrl('/products');
    } else {
      this.flagsCheck = true;
      this.message = "User Name and Password are invalid!";
    }
  }
}
