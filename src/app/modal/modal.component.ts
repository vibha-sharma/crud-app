import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
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
  onSubmit(updateForm, id) {
    this.submitted = true;
    updateForm = {
      'id': id,
      'name': updateForm["getdata.name"],
      'email': updateForm["getdata.email"],
      'username': updateForm["getdata.username"],
      'phone': updateForm["getdata.phone"],
      'company': updateForm["getdata.company.name"],
      'catchPhrase': updateForm["getdata.company.catchPhrase"],
      'suite': updateForm["getdata.address.suite"],
      'zipcode': updateForm["getdata.address.zipcode"],
      'city': updateForm["getdata.address.city"],
      'address': updateForm["getdata.address.street"],
      'website': updateForm["getdata.website"],
      'bs': updateForm["getdata.company.bs"]
    }
    this.updateEventFromModal.emit(updateForm);
    $("div[id^='updateModal']").modal('hide');
  }
  onSubmitCreateForm() {
    this.submitted = true;
    if (this.createAccountForm.valid) {
      this.createEventFromModal.emit(this.createAccountForm.value);
      $("#createAccountModal").modal('hide');
    }
  }
}
