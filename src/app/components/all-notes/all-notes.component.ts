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
      console.log(response.data.data.filter(this.notDeletedNotArchived));
      this.allNotes = response.data.data.filter(this.notDeletedNotArchived);
    }, (err) => {
      console.log(err);
    });
  }

  notDeletedNotArchived(element){
    return (element.isArchived == false && element.isDeleted == false)
  }

  eventRecieved(){
    this.getAllNotes()
  }
}
