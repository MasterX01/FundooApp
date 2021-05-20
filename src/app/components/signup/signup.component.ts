import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  service:"advance"
  hide = true;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.form.valid){
      const reqObj = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        password: this.form.value.password,
        service: 'advance'
      }
      console.log(reqObj);
      this.userService.signup(reqObj).subscribe((response) =>{
        console.log(response);
        this.snackBar.open(' SignUp Successfull!!! ', '', {duration: 4000});
        this.router.navigateByUrl('login');
      });
    }
  }
}
