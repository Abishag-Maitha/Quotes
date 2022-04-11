import { Title } from "@angular/platform-browser";
export class QUOTE {

    constructor(public theme:string, public body:string, public author:string, public date:Date, public upvote:number, public downvote:number){}
}
