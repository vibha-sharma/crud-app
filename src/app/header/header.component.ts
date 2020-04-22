import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() showInTableFromModal = new EventEmitter<any>();
    constructor(private configService: ConfigService) { }

	ngOnInit(): void {
	}
  createNewuser(getUserData){
      this.showInTableFromModal.emit(getUserData);
	}
}
