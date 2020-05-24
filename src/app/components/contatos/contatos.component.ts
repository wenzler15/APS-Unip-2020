import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  formLogin : FormGroup;

  constructor( private fb: FormBuilder) { }
  private createForm(): FormGroup{
    return this.fb.group({

      nome:new FormControl(null, Validators.compose([
        Validators.required
        
      ])),
      email: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.email
    ]))
    })
}

  ngOnInit(): void {
    this.formLogin = this.createForm();
  }

  // fazerLogin(){
  //   // console.log(this.login);
  //   this.loginAuthService.verificarUsuario(this.formLogin).subscribe((data: string[] )=>{
  //     this.loginAuthService.fazerLogin(data);
  //   });
  // }
}
