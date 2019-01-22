import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition  
} from '@angular/animations';
import * as $ from 'jquery';


@Component({
  //selector: '',
  templateUrl: './directores.html',
  })


export class DirectoresComponent{
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]  }



  /* Obre els links dels directors */
  var links =[];

  links[0] = "https://www.imdb.com/name/nm0751577/";
  links[1] = "https://www.imdb.com/name/nm0634240/";
  links[2] = "https://www.imdb.com/name/nm0751648/";
  links[3] = "https://www.imdb.com/name/nm0923736/";
  links[4] = "https://www.imdb.com/name/nm0000264/";
  links[5] = "https://www.imdb.com/name/nm0000233/";
  links[6] = "https://www.imdb.com/name/nm0000229/";
  links[7] = "https://www.imdb.com/name/nm0000095/";
  


  $(function (){
    $("a").on("click", function(){
      var codi = $(this).attr("id");
      window.open(links[codi]);
    });
  });

  class Director {
    public Nom: String;
    public Cognom: String;
    public Edat: Int16Array;
    public Image: ImageBitmap;
  
    constructor(Nom,Cognom,Edat,Image){
      this.Nom=Nom;
      this.Cognom=Cognom;
      this.Edat=Edat;
      this.Image=Image;


    }
    
    public getNom(){
      return this.Nom;
    }
    public getCognom(){
      return this.Cognom;
    }
    public getEdat(){
      return this.Edat;
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
    var direc1 = new Director("El padrino","Francis Ford Coppola",3,"../../assets/Home/1.webp");
    var direc2 = new Director("El padrino","Francis Ford Coppola",3,"../../assets/Home/1.webp");
    var direc3 = new Director("El padrino","Francis Ford Coppola",3,"../../assets/Home/1.webp");
    var direc4 = new Director("El padrino","Francis Ford Coppola",3,"../../assets/Home/1.webp");
    var direc5 = new Director("El padrino","Francis Ford Coppola",3,"../../assets/Home/1.webp");
    var direc6 = new Director("El padrino","Francis Ford Coppola",3,"../../assets/Home/1.webp");


   var director = [];
   director[0] = direc1;
   director[1] = direc2;
   director[2] = direc3;
   director[3] = direc4;
   director[4] = direc5;
   director[5] = direc6;
 
    var x=director.length;
    for(var i=0; i<x; i++){
      console.log(director[i].getNom());  
      console.log(director[i].getCognom());  
      console.log(director[i].getEdat());  
      console.log(director[i].getImage()); 
    }
  