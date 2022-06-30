import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isRequiredValidator } from './validators/isRequiredValidator';
import { rangeDateValidator } from './validators/rangeDateValidator';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

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
  console.log(this.movieForm)
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
