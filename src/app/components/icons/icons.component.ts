import { MatToolbarModule } from '@angular/material/toolbar';
import { NoteService } from './../../services/notes/note.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() noteRecieved: any
  @Output() sendEvent = new EventEmitter<string>();
  constructor(private noteService: NoteService) { }

  ngOnInit(){
  }

  archiveNote(){

    let data = {
      noteIdList: [this.noteRecieved.id],
      isArchived:  true
    }

    this.noteService.noteToArchive(data).subscribe((response) => {
      console.log(response);
      this.sendEvent.emit();
    }, (error) => {
      console.log(error);
    })
  }

  deleteNote(){

    let data = {
      noteIdList: [this.noteRecieved.id],
      isDeleted:  true
    }

    this.noteService.noteToTrash(data).subscribe((response) => {
      console.log(response);
      this.sendEvent.emit();
    },(error) => {
      console.log(error);
    })
  }

}
