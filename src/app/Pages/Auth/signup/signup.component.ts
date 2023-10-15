import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitting:Boolean = false;

  registerForm:FormGroup = new FormGroup({
    username:new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private formBuilder:FormBuilder, private router:Router) {
  }
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
      this.registerForm = this.formBuilder.group({
      username:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
    })
  }


  RegisterUser(){
  //   if(this.registerForm.valid){
  //     this.submitting = true;
  //     this.authService.register(this.registerForm.value).subscribe({
  //       next: (response) => {
  //         this.router.navigate(['sign-in'])
  //          Swal.fire("Success", response['message'], "success");
  //       } ,
  //       error: (err:any) => {
  //          this.submitting = false;
  //          Swal.fire("Error", err.error['message'], "error")
  //       }
  //     })
  //  } else {
  //     Swal.fire("Error", "Please, make sure to fill in all forms", "error")
   }

}
