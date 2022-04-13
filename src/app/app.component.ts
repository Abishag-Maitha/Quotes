import { QUOTE } from './quote';
import { Component } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  // quote1=new QUOTE("Life","The purpose of our lives is to be happy","Abishag", new Date(),0,0)
  allQoutes:QUOTE[]=[
    new QUOTE("Life","The purpose of our lives is to be happy","Abishag", new Date("2021-10-05"),0,0),
    new QUOTE("Money","Too many people spend money they earned..to buy things they don't want..to impress people that they don't like.","Mike", new Date("1999-12-04"),0,0),
    new QUOTE("Water","Water is the driving force of all nature.","Pendo", new Date("2022-03-01"),0,0)
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
  addQuote(data:QUOTE){
    this.allQoutes.push(data)
  }
  toggle(index:number){
    this.allQoutes[index].showdescription=!this.allQoutes[index].showdescription
  }
}
