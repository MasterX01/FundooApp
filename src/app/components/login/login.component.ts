import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.form.value);
    if(this.form.valid){
      const reqObj = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      console.log(reqObj);
      this.userService.login(reqObj).subscribe((response: any)=> {
        console.log(response);
        localStorage.setItem('id', response.userId);
        localStorage.setItem('token', response.id);
        console.log('token -> ' + response.userId);
        console.log('id -> ' + response.id);
        this.snackBar.open(' Login Successfull!!! ', '', {duration: 3000});
        this.router.navigateByUrl('dashboard')
      });
    }
  }

  resetPassword(){

  }

  createAccount(){
    this.router.navigateByUrl('signup')
  }
}
