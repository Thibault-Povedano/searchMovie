export class IdTitle{
  constructor(
    public idMovie: string | null | undefined,
    public titleMovie: string | null | undefined,
  ){

  }
}

export class Movie{
  constructor(
    public fiche: string | null | undefined,
    public idTitle: IdTitle,
    public release: string | null | undefined,
    public type: string | null | undefined,
  ){}
}

