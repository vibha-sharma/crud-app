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
//  @Output() userInfoEvent = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {}
  deleteRowData(data){
    this.deleteRowDataEvent.emit(data);
  }
  deleteRow (getId) {
    this.deleteEvent.emit(getId);
  }
  updateRow(getData){
    this.updateEvent.emit({getData});
  }
}
