import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.form.valid){
      const reqObj = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      this.userService.login(reqObj).subscribe((response)=> {
        console.log(response);

      });
    }
  }

  resetPassword(){

  }
}
