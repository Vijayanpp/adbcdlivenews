import { Component, OnInit,Inject } from '@angular/core';

@Component({
  selector: 'app-featuredpost',
  templateUrl: './featuredpost.component.html',
  styleUrls: ['./featuredpost.component.css']
})
export class FeaturedpostComponent implements OnInit {
  public featurednews;
  public pp1=[];
  public pp2=[];
  
  

  constructor(@Inject('news') private currentnews) { }

  ngOnInit() {
    this.loadFeaturePost();
  }
  loadFeaturePost()
  {
    this.currentnews. retrieveNews('/featuredpost').subscribe(posts=>
  	 {
        this.featurednews=posts;
       console.log(this.featurednews.length);
       for(let i=0;i<this.featurednews.length;i++)
       {          
       this.pp1.push(this.featurednews[i]);
       }        
     });   
  
  }

}
