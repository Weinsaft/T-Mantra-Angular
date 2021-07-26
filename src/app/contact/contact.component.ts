import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  profileForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm(){
    this.profileForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      text: ['', Validators.required]
    });
  }


  get f() { return this.profileForm.controls; }

  onSubmit() {
    this.submitted= true;

        // stop here if form is invalid
            if (this.profileForm.invalid) {
              localStorage.clear();
              return;
          }

    localStorage.clear();
    localStorage.setItem("full-name", this.profileForm.value.firstName +" " +this.profileForm.value.lastName);
    localStorage.setItem("email", this.profileForm.value.email);
    localStorage.setItem("subject", this.profileForm.value.subject);
    localStorage.setItem("text", this.profileForm.value.text);
}
}
