import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Photo } from '../photos.module';
import { AlbumService } from '../albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[]=[];
  loaded: boolean;
  constructor(private route: ActivatedRoute, private photoService: AlbumService ){
    // this.photos = {} as Photo;
    this.loaded = true;
  }
  ngOnInit(): void {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.photoService.getAlbumPhotos(id).subscribe((photos: Photo[]) => {
        this.photos = photos;
        this.loaded = true;
      });
      // this.photo = photoS.find((photo: photo) => photo.id === id) as photo;

    } )
    // this.photo = photoS.find((photo: photo) => photo.id === id) as photo;
    // console.log(this.route.snapshot.paramMap.get('id'));
  }
}

