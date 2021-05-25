import { NoteService } from './../../services/notes/note.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {

  title = null
  description = null
  clicked=false;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private http: NoteService) { }

  @Output() sendEvent = new EventEmitter<string>();

  ngOnInit(){
  }

  setClicked(){
    this.clicked=true
  }

  onSubmit(){
    const reqObj = {
      title: this.title,
      description: this.description,
      userId: localStorage.getItem('token'),
    }
    if(reqObj.title == null && reqObj.description == null){
      this.title = null
      this.description = null
      this.clicked = !this.clicked
    }else{
      console.log(reqObj);
      this.http.takeNewNote(localStorage.getItem('token'), reqObj).subscribe((response) => {
      console.log(response);
        this.sendEvent.emit();
      });
      this.title = null
      this.description = null
      this.clicked = !this.clicked
    }

  }

}
