import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album.module';
import { Photo } from './photos.module'
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }
  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  }
  getAlbum(userId: number): Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${userId}`);
  }
  // getAlbumPhotos(userId: number): Observable<Photo>{
  //   return this.client.get<Photo>(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`);
  // }
  getAlbumPhotos(id: number): Observable<Photo[]>{
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
  }
}
