import { QUOTE } from './quote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  // quote1=new QUOTE("Life","The purpose of our lives is to be happy","Abishag", new Date(),0,0)
  allQoutes:QUOTE[]=[
    new QUOTE("Life","The purpose of our lives is to be happy","Abishag", new Date(),0,0),
    new QUOTE("Money","The purpose of our lives is to be happy","Mike", new Date(),0,0),
    new QUOTE("Music","The purpose of our lives is to be happy","Pendo", new Date("2022-03-01"),0,0)
  ]
  delete(index:number){
    if(confirm("Do you want to delete this quote?")){
      this.allQoutes.splice(index,1)
    }
    }
  upvote(index:number){
    this.allQoutes[index].upvote+=1 
  }
  downvote(index:number){
    this.allQoutes[index].downvote+=1 
  }
}
