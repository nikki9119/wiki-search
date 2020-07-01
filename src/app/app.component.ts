import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];
  loading = false;
  constructor(private wikipedia:WikipediaService){}
  onTerm(term:string){
    this.loading = true;
    this.wikipedia.search(term).subscribe((response)=>{
      this.pages = response;
      this.loading = false;
    });
  }
}
