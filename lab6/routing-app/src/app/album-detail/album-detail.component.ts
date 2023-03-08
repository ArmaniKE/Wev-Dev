import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Album } from '../album.module';
import { AlbumService } from '../albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  constructor(private route: ActivatedRoute, private albumService: AlbumService ){
    this.album = {} as Album;
    this.loaded = true;
  }
  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album: Album) => {
        this.album = album;
        this.loaded = true;
      });
      // this.album = albumS.find((album: album) => album.id === id) as album;

    } )
    // this.album = albumS.find((album: album) => album.id === id) as album;
    // console.log(this.route.snapshot.paramMap.get('id'));
  }
}

