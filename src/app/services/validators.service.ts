import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  noHerrera ( control: FormControl): {[s:string]:boolean} {

    if ( control.value?.toLocaleLowerCase()==='herrera2'){
      return {
        noHerrera : true  
      }
    }
  } 

  
}
