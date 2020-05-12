import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data:any;
  @Input() header:[];
  @Input() pageHeader:string ="";
  @Output() updateEvent = new EventEmitter<any>();
  @Output() deleteRowDataEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  config: any;
//  @Output() userInfoEvent = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
        // this.config = {
    //     itemsPerPage: 1,
    //     currentPage: 1,
    //     totalItems: getData.length
    // };
  }
  deleteRowData(data){
    this.deleteRowDataEvent.emit(data);
  }
  deleteRow (getId) {
    this.deleteEvent.emit(getId);
  }
  updateRow(getData){
    console.log('getData',getData);
    this.updateEvent.emit(getData);
  }
  pageChanged(event){
      this.config.currentPage = event;
  }
}
