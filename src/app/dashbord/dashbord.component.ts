import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  
  user=''

  acno=''
  pswd=''
  damount=''

  acno1=''
  pswd1=''
  wamount=''
   
  dashbordForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    damount:['',[Validators.required,Validators.pattern('[0-9]+')]],

    acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]],
    wamount:['',[Validators.required,Validators.pattern('[0-9]+')]]
    }) 
  
  constructor(private fb:FormBuilder,private ds:DataService) 
   {
       this.user=this.ds.currentuser
       

    }

  ngOnInit(): void {
  }

  deposit()
  {
     var acno=this.dashbordForm.value.acno
     var pswd=this.dashbordForm.value.pswd
     var damount=this.dashbordForm.value.damount
     const result=this.ds.deposit(acno,pswd,damount)

     if(result)             //where result is true in if case
     {
       alert(`${damount}is creadited,new balance is ${result}`)
     }
  }
  withdow()
  {
      var acno1=this.dashbordForm.value.acno1
      var pswd1=this.dashbordForm.value.pswd1
      var wamount=this.dashbordForm.value.wamount
      const result=this.ds.withdrow(acno1,pswd1,wamount)
      if(result)
      {
         alert(`${wamount} is withdrowed, new balance is ${result}`)
        
       }

  }


}
