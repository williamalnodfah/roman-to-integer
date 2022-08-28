import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Observable, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-ruman-numerals',
  templateUrl: './ruman-numerals.component.html',
  styleUrls: ['./ruman-numerals.component.scss']
})
export class RumanNumeralsComponent implements OnInit {

  rumanNumerals: Map<string, number> = new Map<string, number>();

  numeralConstraints: Map<string, string[]> = new Map<string, string[]>();

  specialRumans: string[] = ['I', 'X', 'C'];

  myControl: FormControl = new FormControl('');

  result!: Observable<number>;

  constructor() {
    this.rumanNumerals.set('I', 1);
    this.rumanNumerals.set('V', 5);
    this.rumanNumerals.set('X', 10);
    this.rumanNumerals.set('L', 50);
    this.rumanNumerals.set('C', 100);
    this.rumanNumerals.set('D', 500);
    this.rumanNumerals.set('M', 1000);



    this.numeralConstraints.set('I', ['V', 'X']);
    this.numeralConstraints.set('X', ['L', 'C']);
    this.numeralConstraints.set('C', ['M', 'D']);


    this.result = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      map((val) => {
        return this.rumanToInteger(val || '');
      })
    )
  }

  ngOnInit(): void {
    this.rumanToInteger('LVIII');
  }

  rumanToInteger = (_ruman: string): number => {
    console.log('ruman numerals starts example: ', _ruman);
    console.log(_ruman.split(''));

    let rumanArray: string[] = _ruman.split('');
    let result: number = 0;
    for (let index = rumanArray.length - 1; index >= 0; index--) {
      let currentElement: string = rumanArray[index];
      if (index == rumanArray.length - 1) {
        result += this.rumanNumerals.get(currentElement) || 0;//5
      } else {
        if (this.specialRumans.includes(currentElement)) {
          let previousElement: string = rumanArray[index + 1];
          if (this.numeralConstraints.get(currentElement)?.includes(previousElement)) {
            result -= this.rumanNumerals.get(currentElement) || 0;
          } else {
            result += this.rumanNumerals.get(currentElement) || 0;
          }
        } else {
          result += this.rumanNumerals.get(currentElement) || 0;
        }
      }
      console.log('current element', currentElement, this.rumanNumerals.get(currentElement));
      console.log('result', result);
    }
    console.log(result);
    return result;
  }

}


// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
