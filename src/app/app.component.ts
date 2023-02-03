import { Component,ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;

  checkBox_Value = false
  checkBox_Value2 = false 

  customer = {
    firstname: '',
    lastname:'',
    email:'', 
    phone: null,
  }

  primaryAddress ={
  P_email: '',
  P_phone: '',
  P_add: '',
  P_city:'',
  P_country:'',
  P_post: null
  }

  Secondary_Address ={
    S_email: '',
    S_phone: '',
    S_add: '',
    S_city:'',
    S_country:'',
    S_post: null
    }


  submitted = false;

  




  onSubmit(){
    this.submitted =true;
    this.customer.firstname = this.signupForm.value.firstname;
    this.customer.lastname = this.signupForm.value.lastname;
    this.customer.email = this.signupForm.value.email;
    this.customer.phone = this.signupForm.value.phone;
    
   


    if(this.checkBox_Value === true){
      this.checkBox_Value = false;

      this.primaryAddress.P_email = this.signupForm.value.email;
      this.primaryAddress.P_phone = this.signupForm.value.phone;
      this.primaryAddress.P_add = this.signupForm.value.address;
      this.primaryAddress.P_city = this.signupForm.value.city;
      this.primaryAddress.P_country = this.signupForm.value.country;
      this.primaryAddress.P_post = this.signupForm.value.postcode;


    }else{
      this.primaryAddress.P_email = this.signupForm.value.pemail;
      this.primaryAddress.P_phone = this.signupForm.value.pphone;
      this.primaryAddress.P_add = this.signupForm.value.address;
      this.primaryAddress.P_city = this.signupForm.value.city;
      this.primaryAddress.P_country = this.signupForm.value.country;
      this.primaryAddress.P_post = this.signupForm.value.postcode;
    }

    
    if(this.checkBox_Value2 === true){
      
      this.checkBox_Value2 = false

      this.Secondary_Address.S_email = this.signupForm.value.pemail;
      this.Secondary_Address.S_phone = this.signupForm.value.pphone;
      this.Secondary_Address.S_add = this.signupForm.value.address;
      this.Secondary_Address.S_city= this.signupForm.value.city;
      this.Secondary_Address.S_country = this.signupForm.value.country;
      this.Secondary_Address.S_post = this.signupForm.value.postcode;
    }
   
    else{
      this.Secondary_Address.S_email = this.signupForm.value.semail;
      this.Secondary_Address.S_phone = this.signupForm.value.sphone;
      this.Secondary_Address.S_add = this.signupForm.value.saddress;
      this.Secondary_Address.S_city= this.signupForm.value.scity;
      this.Secondary_Address.S_country = this.signupForm.value.scountry;
      this.Secondary_Address.S_post = this.signupForm.value.spostcode;
    }

 
    


    this.signupForm.reset();
  }

  onCheckMark(){
    this.checkBox_Value = !this.checkBox_Value
    if(this.checkBox_Value){
      this.primaryAddress.P_email=this.signupForm.value.email;
      this.primaryAddress.P_phone=this.signupForm.value.phone;
      console.log(this.checkBox_Value);
      
    }
    else{
      this.primaryAddress.P_email=''
      this.primaryAddress.P_phone=''
    }

  }

  onCheckMark2() {
    this.checkBox_Value2 = !this.checkBox_Value2
    
    if(this.checkBox_Value2){
      this.Secondary_Address.S_email = this.signupForm.value.pemail;
      this.Secondary_Address.S_phone = this.signupForm.value.pphone;
      this.Secondary_Address.S_add = this.signupForm.value.address;
      this.Secondary_Address.S_city= this.signupForm.value.city;
      this.Secondary_Address.S_country = this.signupForm.value.country;
      this.Secondary_Address.S_post = this.signupForm.value.postcode;
    }
    else{
      this.Secondary_Address.S_email = '';
      this.Secondary_Address.S_phone = '';
      this.Secondary_Address.S_add = '';
      this.Secondary_Address.S_city= '';
      this.Secondary_Address.S_country = '';
      this.Secondary_Address.S_post = '';
      
    }
    
  }


}
