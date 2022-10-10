import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from "src/app/models/Credenciais";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  creds: Credenciais = {
    email: 'stallman@mail.com',
    senha: '123'
  }
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private  toast: ToastrService,
    private service:AuthService,
    private router: Router){}

  ngOnInit(): void {
  }
   logar() {
    this.service.authenticate(this.creds).subscribe(resposta =>{
      this.toast.info(resposta.headers.get('Authorization'))
      this.service.successfullLogin(resposta.headers.get('Authorization').substring(7))
      this.router.navigate(['login'])
    },()=> {
      this.toast.error('Usuario e/ou senha inválidos');
    })
    
   }
   validaCampos():boolean{
    return this.email.valid && this.senha.valid
   }
  }
    
      



