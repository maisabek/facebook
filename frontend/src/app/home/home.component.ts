import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _elementRef:ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    var query=document.createElement('script');
    query.src='./assets/js/custom.js';
    this._elementRef.nativeElement.appendChild(query);

  }
}
