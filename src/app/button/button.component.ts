import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonValue!: string;

  constructor() {};

  getStyles(){
    const regexNumber = new RegExp("[0-9]|DEL|\\.")
    const regexUpperValue = new RegExp("C|±|%")

    if (regexNumber.test(this.buttonValue)){
      return {
        background: 'white',
      };
    } else if (regexUpperValue.test(this.buttonValue)){
      return {
        background: 'red'
      }
    } else {
      return{
        background: 'blue'
      }
    }
  }
}
