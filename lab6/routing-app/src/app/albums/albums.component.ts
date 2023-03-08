import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Album } from '../album.module';
import { AlbumService } from '../albums.service';
@Component({
  selector: 'app-album',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumComponent implements OnInit{
  albums: Album[] = [];
  loaded: boolean;
  newAlbum: Album;
  constructor(private albumService: AlbumService){
    this.albums = [];
    this.loaded = true;
    this.newAlbum = {} as Album;
  }
  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums: Album[]) =>{
      this.albums = albums;
      this.loaded = true;
    });
  }
  addAlbum(){
    console.log(this.newAlbum);
  }
}
