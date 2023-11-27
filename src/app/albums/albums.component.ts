import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];
  albumsToShow: any[] = [];

  constructor(private http: HttpClient,
    private modalService: ModalService,
    private router: Router) {}

  ngOnInit(): void {
    this.fetchAlbums();
    this.fetchAlbumsComplete();
  }

  fetchAlbums() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums').subscribe(
      (albums) => {
        this.albums = albums;
      },
      (error) => {
        console.error('Error fetching albums:', error);
      }
    );
  }

  fetchAlbumsComplete() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe(
      (photos) => {
        this.albumsToShow = photos;
      },
      (error) => {
        console.error('Error fetching photos:', error);
      }
    );
  }

  showPhotos(id: number) {
    return this.albumsToShow.filter((album) => album.albumId === id)[0].url;
  }

  goToPhotos(id: number): void {
    this.router.navigate(["/albums/", id],);

  }
}
