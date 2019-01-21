import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition  
} from '@angular/animations';


@Component({
  //selector: '',
  templateUrl: './directores.html',
  })


export class DirectoresComponent{

  characters = [
    director[0].getNom(),
    director[1].getNom(),
    director[2].getNom(),
    director[3].getNom(),
    director[4].getNom(),
    director[5].getNom(),
    director[6].getNom()]

    characters1 = [
      director[0].getImage(),
      director[1].getImage(),
      director[2].getImage(),
      director[3].getImage(),
      director[4].getImage(),
      director[5].getImage(),
      director[6].getImage()]}

 
   class Director {
    public Nom: String;
    public Cognom: String;
    public Edat: Int16Array;
    public Image: String;
  
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
    var direc1 = new Director("Anthony","Russo",49,"../../assets/Home/1.webp");
    var direc2 = new Director("Joe","Russo",47,"../../assets/Home/1.webp");
    var direc3 = new Director("Joss","Whedon",54,"../../assets/Home/1.webp");
    var direc4 = new Director("Pedro","Almodóvar",69,"../../assets/Home/1.webp");
    var direc5 = new Director("Quentin","Tarantino",55,"../../assets/Home/1.webp");
    var direc6 = new Director("Steven","Spielberg",72,"../../assets/Home/1.webp");
    var direc7 = new Director("Woody","Allen",83 ,"../../assets/Home/1.webp");



   var director = [];
   director[0] = direc1;
   director[1] = direc2;
   director[2] = direc3;
   director[3] = direc4;
   director[4] = direc5;
   director[5] = direc6;
   director[6] = direc7;

 
    var x=director.length;
    for(var i=0; i<x; i++){
      console.log(director[i].getNom());  
      console.log(director[i].getCognom());  
      console.log(director[i].getEdat());  
      console.log(director[i].getImage()); 
    }


     
  

