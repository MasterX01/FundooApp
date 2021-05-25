import { NoteService } from './../../services/notes/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  allNotes: any[];
  constructor(private note: NoteService) { }

  ngOnInit(){
    this.getAllNotes();
  }

  getAllNotes(){
    this.note.getAllNotes().subscribe((response: any) =>{
      console.log(response.data.data);
      this.allNotes = response.data.data;
    }, (err) => {
      console.log(err);
    });
  }

  eventRecieved(){
    this.getAllNotes()
  }
}
