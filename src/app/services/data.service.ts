import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser:any     //variable 
  currentacno:any     //variable define

   acno=''
   pswd=''
   userDetails:any={
    1000:{acno:1000,username:'amal',password:123,balance:100000,transaction:[]},
    1001:{acno:1001,username:'manu',password:123,balance:10000,transaction:[]},
    1002:{acno:1000,username:'ananthu',password:123,balance:4000000,transaction:[]},
    1003:{acno:1000,username:'sruthi',password:123,balance:800000,transaction:[]},
   }

  constructor() { 
    this.getDetails()  //get details from localstroge
  }


  // store current user details in local storage

saveDetails(){
  if(this.userDetails){
    localStorage.setItem('database',JSON.stringify(this.userDetails))
  }
  if(this.currentuser){
    localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
  }
  if(this.currentacno){
    localStorage.setItem('currentacno',JSON.stringify(this.currentacno))
  }
}


//get data from local storge

getDetails(){
  if(localStorage.getItem('database'))
  {
    this.userDetails=JSON.parse(localStorage.getItem('database') || '')
  }
  if(localStorage.getItem('currentuser'))
  {
    this.currentuser=JSON.parse(localStorage.getItem('currentuser') || '')
  }
  if(localStorage.getItem('currentacno'))
  {
    this.currentacno=JSON.parse(localStorage.getItem('currentacno') || '')
  }
}



  register(acno:any,username:any,password:any)   //registre function logic
  {
    let userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }
    else{
      userDetails[acno]={acno,username,password,balance:0,transaction:[]}
      console.log(userDetails);
      
      this.saveDetails()   //store  in local storge 

      return true

    }
  }

  login(acnum:any,pswd:any){
    
    let userDetails=this.userDetails
    if (acnum in userDetails)
    {
      if(pswd==userDetails[acnum]['password']){
        this.currentuser=userDetails[acnum]['username']
        this.currentacno=acnum

        this.saveDetails()   //store in localstorage


          return true   
          
          
       }
       else {
       alert('incorrect password')
       return false
       }
   }
   else{
     alert('user not exist or incorrect password')
     return false
   }
   
 }
deposit(acno:any,pswd:any,damount:any)
{
  let userDetails=this.userDetails //call database
  var amount=parseInt(damount)     //input in the form of string type this convert to number
  if(acno in userDetails)
  {
    if(pswd==userDetails[acno]['password'])
    {
       userDetails[acno]['balance']+=amount
       userDetails[acno]['transaction'].push({type:'CREDIT',amount})

       this.saveDetails()//store details in localstorage

       return userDetails[acno]['balance']
    }
    else
    {
      alert('incorrect password')
    }
  }
  else{
    alert('user not exist')
    return false
  }

}
withdrow(acno1:any,pswd1:any,wamount:any)
{
  let userDetails=this.userDetails
  var amount=parseInt(wamount)
  if(acno1 in userDetails)
  {
    if(pswd1==userDetails[acno1]['password'])
    {
       if(amount<=userDetails[acno1]['balance'])
       {   
             userDetails[acno1]['balance']-=amount
             userDetails[acno1]['transaction'].push({type:'DEBIT',amount})

             this.saveDetails() //save datas in local storage  

           return userDetails[acno1]['balance']
       }
       else
       {
        alert('insuficient balnce')
       }
    }
    else
    {
      alert('incorrect password')
    }
  }
  else
  {
    alert('user not exist')
    return false
  }
  
}


getTransaction(acno:any)
{
 return this.userDetails[acno]['transaction']
}


}
