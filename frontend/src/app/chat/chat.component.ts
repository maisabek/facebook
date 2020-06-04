import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private _elementRef:ElementRef) { }

  ngOnInit() {}
  ngAfterViewInit(){
    var query=document.createElement('script');
    query.src='./assets/js/custom.js';
    this._elementRef.nativeElement.appendChild(query);

  }

}