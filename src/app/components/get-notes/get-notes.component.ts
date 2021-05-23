import { UserService } from 'src/app/services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  notes: any[];
  constructor(private http: UserService) { }

  ngOnInit(){
    // this.getAllNotes();
  }

  getAllNotes(){
    this.http.getAllNotes(localStorage.getItem('token')).subscribe((response: any) =>{
      console.log(response);
      this.notes = response;
    });
  }

}
