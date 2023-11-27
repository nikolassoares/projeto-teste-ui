import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../modal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  albums: any[] = [];

  constructor(private http: HttpClient,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.fetchAlbums(this.route.snapshot.paramMap.get('id'));
  }

  fetchAlbums(id:any) {
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).subscribe(
      (albums) => {
        this.albums = albums;
      },
      (error) => {
        console.error('Error fetching albums:', error);
      }
    );
  }


}
