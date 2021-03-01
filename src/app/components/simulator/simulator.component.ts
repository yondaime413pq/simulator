import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
})
export class SimulatorComponent implements OnInit {
  forma: FormGroup;
  loading:boolean=false;
  loading2:boolean=false;  
  time1 = "07:00";
  time2 = "09:30";
  time3 = "16:00";
  time4 = "19:30";

  constructor( private fb: FormBuilder ) {

    this.createForm();
   }

  ngOnInit(): void {
  }

 
  get nameNoValid(){
    return this.forma.get('name').invalid && this.forma.get('name').touched
  }
  get plateNoValid(){
    return this.forma.get('plate').invalid && this.forma.get('plate').touched
  }
  get timeNoValid(){
    return this.forma.get('time').invalid && this.forma.get('time').touched
  }
  get dateNoValid(){
    return this.forma.get('date').invalid && this.forma.get('date').touched
  }

  createForm () {
    this.forma = this.fb.group ({
      name:['', [Validators.required, Validators.minLength(3) ]],
      plate:['', [Validators.required, Validators.minLength(6), Validators.maxLength(7), Validators.pattern('[a-zA-Z]+[*0-9]+')]],
      time:['', Validators.required],
      date:['', Validators.required]      
    });
  }

  save(){
    let digit = this.forma.value.plate.slice(-1);
    let time = this.forma.value.time;
    let date = new Date (this.forma.value.date+"T12:00:00Z");
    let day = date.toDateString().slice(0,3);
    console.log(day);


    if ( (day=="Mon") && (digit=="1" || digit=="2") && ((time>=this.time1 && time<=this.time2)
                      || (time>=this.time3 && time<=this.time4)) ) {   
      this.loading2=false;
      this.loading=true;   
    }
    else if ( (day=="Tue") && (digit=="3" || digit=="4") && ((time>=this.time1 && time<=this.time2)
                      || (time>=this.time3 && time<=this.time4)) ) {   
      
      this.loading2=false;
      this.loading=true;   
    }
    else if ( (day=="Wed") && (digit=="5" || digit=="6") && ((time>=this.time1 && time<=this.time2)
                      || (time>=this.time3 && time<=this.time4)) ) {   
      
      this.loading2=false;
      this.loading=true;   
    }
    else if ( (day=="Thu") && (digit=="7" || digit=="8") && ((time>=this.time1 && time<=this.time2)
                      || (time>=this.time3 && time<=this.time4)) ) {   
      this.loading2=false;
      this.loading=true;   
    }
    else if ( (day=="Fri") && (digit=="9" || digit=="0") && ((time>=this.time1 && time<=this.time2)
                      || (time>=this.time3 && time<=this.time4)) ) {   
      this.loading2=false;
      this.loading=true;   
    }
   
    else{
      this.loading=false;
      this.loading2=true;
    }
    
    console.log(this.forma);
    
  } 

  
}
