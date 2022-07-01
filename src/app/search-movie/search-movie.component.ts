import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isRequiredValidator } from './validators/isRequiredValidator';
import { rangeDateValidator } from './validators/rangeDateValidator';
import { Movie, idTitle } from '../models/movie.model';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  movieSearched: any[]=[] ;

  movieForm = this.formBuilderMovie.group({
    idTitle: this.formBuilderMovie.group({
      idMovie: [''],
      titleMovie:[''],
    },
    {
      validator:isRequiredValidator('idMovie', 'titleMovie')
    }),
    type:['serie'],
    release:['',[rangeDateValidator('release')]],
    fiche:[''],
  });

onSubmit(){
  this.movieSearched.push(this.movieForm.value)
  console.log(JSON.stringify(this.movieSearched));
};

constructor(private formBuilderMovie: FormBuilder) { }

ficheToCourte() {
  this.movieForm.patchValue({
    fiche: "courte",
  })
}
  ngOnInit(): void {
    this.ficheToCourte()

  }

}
