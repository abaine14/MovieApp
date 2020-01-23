import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import {MOVIE_DATA} from '../home/home.component'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {

  movie;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movie = MOVIE_DATA[+params.get('[{movie.id}]')];
  });

  }
}
