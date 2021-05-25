import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpService) { }

  getAllNotes(){
    return this.http.get('notes/getNotesList')
  }

  takeNewNote(id,data){
    return this.http.post('notes/addNotes', data)
  }

  updateNote(data){
    return this.http.post('notes/updateNotes', data)
  }

  noteToTrash(data){
    return this.http.post('notes/trashNotes', data)
  }

  noteToArchive(data){
    return this.http.post('notes/archiveNotes', data)
  }
}
