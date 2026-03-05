import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  readonly APIUrl = "http://localhost:5038/api/songs/";
  songs: any[] = [];

  song = {
    id: "",
    title: "",
    artist: "",
    year: ""
  };

  isEditing = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.refreshSongs();
  }

  refreshSongs() {
    this.http.get<any[]>(this.APIUrl + 'GetSongs')
      .subscribe(data => {
        this.songs = data;
      });
  }

  addSong() {

    const formData = new FormData();
    formData.append("title", this.song.title);
    formData.append("artist", this.song.artist);
    formData.append("year", this.song.year);

    this.http.post(this.APIUrl + 'AddSong', formData)
      .subscribe(res => {
        alert(res);
        this.clearForm();
        this.refreshSongs();
      });
  }

  selectSong(song:any){
    this.song = {...song};
    this.isEditing = true;
  }

  updateSong(){

    const formData = new FormData();
    formData.append("id", this.song.id);
    formData.append("title", this.song.title);
    formData.append("artist", this.song.artist);
    formData.append("year", this.song.year);

    this.http.put(this.APIUrl + 'UpdateSong', formData)
      .subscribe(res => {
        alert(res);
        this.clearForm();
        this.refreshSongs();
      });
  }

  deleteSong(id:string){
    this.http.delete(this.APIUrl + 'DeleteSong?id=' + id)
      .subscribe(res=>{
        alert(res);
        this.refreshSongs();
      });
  }

  clearForm(){
    this.song = { id:"", title:"", artist:"", year:"" };
    this.isEditing = false;
  }

}
