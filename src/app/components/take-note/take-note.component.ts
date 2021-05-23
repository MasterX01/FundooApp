import { UserService } from 'src/app/services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {

  clicked=false;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private http: UserService) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  setClicked(){
    this.clicked=true
  }

  onSubmit(){
    if(this.form.valid){
      const reqObj = {
        title: this.form.value.title,
        description: this.form.value.description,
        userId: localStorage.getItem('token'),
      }
      console.log(reqObj);
      this.http.takeNewNote(localStorage.getItem('token'), reqObj).subscribe((response) => {
        console.log(response);

      });
    }
  }
}
