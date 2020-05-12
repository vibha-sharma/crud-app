import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
 @Output() messageSend = new EventEmitter<any>();
 @Input() receivedSpinnerVal : any;
   messageToSend: string = "Hello message !";
  constructor() { }

  ngOnInit(): void {
  	this.sendMessage();
    console.log('receivedSpinnerVal', this.receivedSpinnerVal);
  }

  sendMessage(){
  	this.messageSend.emit(this.messageToSend);
  }

}
