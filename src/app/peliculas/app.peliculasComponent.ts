import { Component } from '@angular/core';

@Component({
  //selector: '',
  templateUrl: './peliculas.html',
  /* styleUrls: ['./app.component.css'] */
  })

  


export class PeliculasComponent{

   class Pelicula {
    public Nom: String;
    public Durada: Float32Array;
    public Director: String;
    public Genere: String;
    public Image: ImageBitmap;
  
    constructor(Nom,Durada,Director,Genere,Image){
      this.Nom=Nom;
      this.Durada=Durada;
      this.Director=Director;
      this.Genere=Genere;
      this.Image=Image;


    }
    
    public getNom(){
      return this.Nom;
    }
    public getDurada(){
      return this.Durada;
    }
    public getDirector(){
      return this.Director;
    }
    public getGenere(){
      return this.Genere;
    }
    public getImage(){
      return this.Image;
    }
    public setNom(Nom:String){
      this.Nom = Nom;
  
    }  
    }  

    /* var pelis = new Pelicula[
          ('lol', 45, 'aa', 'aa')
    ];
 */
    var pelis1 = new Pelicula("El padrino",2.55,"Francis Ford Coppola","Crimen","../../assets/Home/1.webp");
    var pelis2 = new Pelicula("La lista de Schindler",3.15,"Steven Spielberg","Histórico","../../assets/Home/1.webp");
    var pelis3 = new Pelicula("El caballero oscuro",2.27,"Christopher Nolan","Acción","../../assets/Home/1.webp");
    var pelis4 = new Pelicula("Coco",1.45,"Lee Unkrich","Animación","../../assets/Home/1.webp");
    var pelis5 = new Pelicula("Pulp Fiction",2.29,"Quentin Tarantino","Crimen","../../assets/Home/1.webp");
    var pelis6 = new Pelicula("Forrest Gump",2.20,"Robert Zemeckis","Comedia dramática","../../assets/Home/1.webp");


   var pelis = [];
    pelis[0] = pelis1;
    pelis[1] = pelis2;
    pelis[2] = pelis3;
    pelis[3] = pelis4;
    pelis[4] = pelis5;
    pelis[5] = pelis6;
 
    var x=pelis.length;
    for(var i=0; i<x; i++){
      console.log(pelis[i].getNom());  
      console.log(pelis[i].getDirector());  
      console.log(pelis[i].getDurada());  
      console.log(pelis[i].getGenere()); 
      console.log(pelis[i].getImage());  
 
      

    }



    


  


 

}

