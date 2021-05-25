import { NoteService } from './../../services/notes/note.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  title = '';
  description = '';
  constructor(public dialogRef: MatDialogRef<UpdateNoteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private http: NoteService) {
    console.log(data.note);
    this.title = data.note.title
    this.description = data.note.description
    }

  ngOnInit(){  }

  updateNote(){
    const reqObj={
      noteId: this.data.note.id,
      title: this.title,
      description: this.description
    }
    this.http.updateNote(reqObj).subscribe((response) => {
      console.log(response);
      this.dialogRef.close();
    })
  }
}
