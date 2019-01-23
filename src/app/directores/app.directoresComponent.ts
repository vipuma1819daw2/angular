import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations'



  @Component({
     templateUrl: './directores.html',
     animations: [
         trigger('animacion',[
             state('small', style({
                 transform: 'scale(1)',
             })),
             state('large',style({
                 transform:'scale(1.2)',
                 color:"red"
   
             })),
             
             transition('small => large',animate('300ms ease-in')),
   
   
         ]),
         trigger('animacion2',[
          state('large1', style({
              transform: 'scale(1)',
              opacity:1

          })),
          state('small1',style({
              transform:'scale(0.9)',
              opacity:0.5


          })),
          
          transition('large1 => small1',animate('200ms ease-in')),
        ]),
        trigger('animacion3',[
          state('large3', style({
              transform: 'scale(1)',
             
              
              opacity:1

          })),
          state('small3',style({
              transform: 'rotateY(180deg) rotateZ(180deg)',
              color: 'pink',
              


          })),
          
          transition('large3 => small3',animate('2000ms ease-in')),
        ]),
        
     ]
     })

export class DirectoresComponent{

  state: string = 'small'
  state1: string = 'large1'
  state2: string = 'large3'


    
    animateMe(){
        this.state=(this.state === 'small' ? 'large' :'small');
    }
    animateMe1(){
      this.state=(this.state === 'large1' ? 'small1' :'large1');
  }
  animateMe2(){
    this.state=(this.state === 'large3' ? 'small3' :'large3');
}

  characters = [
    director[0].getNom(),
    director[1].getNom(),
    director[2].getNom(),
    director[3].getNom(),
    director[4].getNom(),
    director[5].getNom(),
    director[6].getNom()]
}

 
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


    characters = [
      'Finn the human',
      'Jake the dog',
      'Princess bubblegum',
      'Lumpy Space Princess',
      'Beemo1',
      'Beemo2'
    ]  }
  
  
  
  

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

   /**comentari */


 
    var x=director.length;
    for(var i=0; i<x; i++){
      console.log(director[i].getNom());  
      console.log(director[i].getCognom());  
      console.log(director[i].getEdat());  
      console.log(director[i].getImage()); 
    }


     
  

