{

  const movie = {
    name : "deadpool",
    genre : "sci-fi"
  }

  console.log(typeof movie);
  type Tmovie = typeof movie

  interface author {
    author:string
  }
  const newMovie : Tmovie= {
    name : "avengers" ,
    genre : "sci-fi", 
  }

}