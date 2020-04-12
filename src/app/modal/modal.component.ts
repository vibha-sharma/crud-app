import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() data:any;
  @Input() id:any;
  @Input() getId: any;
  @Input() getdata: any;
  @Input() updateDetail:any;
  @Output() deleteEventFromModel = new EventEmitter<any>();
  @Output() updateEventFromModal = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  deleteRowData(getId){
    this.deleteEventFromModel.emit(getId);
  }
  onSubmit(updateForm) {
    this.updateEventFromModal.emit(updateForm);
  }
}
