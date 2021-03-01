import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
})
export class SimulatorComponent implements OnInit {
  forma: FormGroup;
  loading:boolean=false;
  loading2:boolean=false;  
  input_day = "";
  input_time = "";
  time1 = "7:00";
  time2 = "9:30";
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
      plate:['', [Validators.required, Validators.maxLength(7), Validators.pattern('[a-zA-Z]+[*0-9]+')]],
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

    this.loading=true;

    if ( (day=="Mon") && (digit=="1" || digit=="2") && (time>=this.time1 && time<=this.time2) ) {      
      this.input_day="M"       
    }
   

    

    // let time=this.forma.value.time;

    // if (time>=this.time1 && time<=this.time2) {
    //   return "NOO at" + time
    // }
    
    console.log(this.forma);
    
  } 

  
}
