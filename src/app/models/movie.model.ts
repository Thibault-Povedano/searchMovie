export class idTitle{
  constructor(
    public idMovie: string,
    public titleMovie: string,
  ){

  }
}

export class Movie{
  constructor(
    public fiche: string,
    public idTitle: idTitle,
    public release: number,
    public type: string,
  ){}
}

