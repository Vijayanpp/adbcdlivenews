import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-currentnews',
  templateUrl: './currentnews.component.html',
  styleUrls: ['./currentnews.component.css']
})
export class CurrentnewsComponent implements OnInit {

@Input() news:any;
  constructor() { }

  ngOnInit() {
  }

}
