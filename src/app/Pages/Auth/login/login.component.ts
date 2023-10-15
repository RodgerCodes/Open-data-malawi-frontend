import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitting:Boolean = false;

  loginForm:FormGroup = new FormGroup({
    email:new FormControl(''),
    password: new FormControl('')
  })

  constructor(private formBuilder:FormBuilder, private authService:AuthService) {
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password:['',Validators.required],
    })
  }

  SignIn(){
  //  if(this.loginForm.valid){
  //    this.submitting = true;
  //     const formData = {
  //       'email': this.loginForm.value['email'],
  //       'password':this.loginForm.value['password'],
  //     }

  //     this.authService.login(formData).subscribe({
  //       next: (response:any) => {
  //          setToken(response['access'])
  //          Swal.fire("Success", "Successfully Logged In", "success");
  //       },
  //       error: (err:any) => {

  //       }
  //     })
  //  } else {
  //    Swal.fire("Error", "Oops! Something went wrong, check your input!","error")
  //  }
  // }
}
}