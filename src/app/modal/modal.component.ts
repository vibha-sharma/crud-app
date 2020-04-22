import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() data:any;
  @Input() id:any;
  @Input() getId: any;
  @Input() getdata: any = {};
  @Input() updateDetail:any;
  @Input() createAccountModal:any;
  @Input() getUserInfo:any;
  @Output() deleteEventFromModel = new EventEmitter<any>();
  @Output() updateEventFromModal = new EventEmitter<any>();
  @Output() createEventFromModal = new EventEmitter<any>();
  createAccountForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
     this.createAccountForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      company: ['', Validators.required],
      catchPhrase: [''],
      suite: [''],
      zipcode: [''],
      city: [''],
      address: ['', Validators.required],
      url: [''],
      bs: ['']
    });
  }


  get validation(){
    return this.createAccountForm.controls;
  }
  deleteRowData(getId){
    this.deleteEventFromModel.emit(getId);
  }
  onSubmit(updateForm) {
    this.updateEventFromModal.emit(updateForm);
  }
  onSubmitCreateForm() {
    this.submitted = true;
    if (this.createAccountForm.valid) {
      this.createEventFromModal.emit(this.createAccountForm.value);
      $("#createAccountModal").modal('hide');
    }
  }
}
