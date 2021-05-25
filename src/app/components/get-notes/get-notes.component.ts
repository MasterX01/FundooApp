import { NoteService } from './../../services/notes/note.service';
import { UpdateNoteComponent } from './../update-note/update-note.component';
import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  hover=false;
  @Output() sendEvent = new EventEmitter<string>();
  @Input() notes: any[];
  constructor(private http: NoteService,
              private dialog: MatDialog) { }

  ngOnInit(){
  }

  // Pass Argument Card After API connect
  updateNote(note){
    this.dialog.open(UpdateNoteComponent, {
      width: '500px',
      height: '300px',
      data: {note}
    })
    this.dialog.afterAllClosed.subscribe((response) => {
      this.sendEvent.emit();
    })
  }

  hoverChange(){
    this.hover = !this.hover
  }
}
