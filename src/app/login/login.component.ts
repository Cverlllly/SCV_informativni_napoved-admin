import { Component, ElementRef, Renderer2, ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  username="";
  password="";
  errorMessage="";
  
  constructor(private auth:AuthService,private router:Router) { }

  login(){
    if(this.username.trim().length===0){
      this.errorMessage="Username is required";
      setTimeout(()=>{
        this.errorMessage=String.fromCharCode(160);
      },2000);
    }
    else if(this.password.trim().length===0){
      this.errorMessage="Password is required";
      setTimeout(()=>{
        this.errorMessage=String.fromCharCode(160);
      },2000);
    }
    else{
      this.errorMessage=String.fromCharCode(160);
      let res=this.auth.login(this.username,this.password);
      if (res===200){
        this.router.navigate(['mainpage']);
      }
      else if(res===403){
        this.errorMessage="Invalid username or password";
      }
    }
  }
  
  ngOnInit(){
    /*
    $default-color: #ed1164;
    $ssgo-color: #a9d046;
    $ers-color: #0094d9;
    $ssd-color: #ee5ba0;
    $gim-color: #ffca05;
    */
    const zelena = document.getElementById('zelena') as HTMLDivElement;
    const naved= document.getElementById('naved') as HTMLDivElement;
    const modra= document.getElementById('modra') as HTMLDivElement;
    const roza= document.getElementById('roza') as HTMLDivElement;
    const rumena= document.getElementById('rumena') as HTMLDivElement;
    naved.style.backgroundColor = '#ed1164';
    var color=naved.style.backgroundColor;
    
    modra.addEventListener('click', () => {
      if(color === '#0094D9') {
        naved.style.backgroundColor = '#ED1164';
        color='#ED1164';
      }
      else{
        naved.style.backgroundColor = '#0094D9';
        color='#0094D9';
      }
    });
    zelena.addEventListener('click', () => {
      if(color === '#A9D046') {
        naved.style.backgroundColor = '#ED1164';
        color='#ED1164';
      }
      else{
        naved.style.backgroundColor = '#A9D046';
        color='#A9D046';
      }
    });
    roza.addEventListener('click', () => {
      if(color === '#EE5BA0') {
        naved.style.backgroundColor = '#ED1164';
        color='#ED1164';
      }
      else{
        naved.style.backgroundColor = '#EE5BA0';
        color='#EE5BA0';
      }
    });
    rumena.addEventListener('click', () => {
      if(color === '#FFCA05') {
        naved.style.backgroundColor = '#ed1164';
        color='#ED1164';
      }
      else{
        naved.style.backgroundColor = '#FFCA05';
        color='#FFCA05';
  }});
  }
}
