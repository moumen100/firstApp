import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {

@Input('isActive') isliked:boolean;
@Input('likesCount') likesCount:number;

onclick() {
  this.isliked=!this.isliked;
  this.likesCount+= (this.isliked) ? 1 : -1;
}




  

}
