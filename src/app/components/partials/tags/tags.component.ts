import { Component } from '@angular/core';
import { MarbleService } from 'src/app/services/marble.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(marbleService:MarbleService){
  marbleService.getAllTags().subscribe((serverTag)=>{
    this.tags=serverTag;
   });
   
    
  }

}
