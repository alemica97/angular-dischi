import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() arrayDischi: Card[] = [];
  @Input() selectedGenre: string | undefined;

  filteredArray: Card[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.arrayFilter();
    // console.log('Changes');
    // console.log('array dischi: ', this.arrayDischi);
    console.log('filtered array: ', this.filteredArray);
    // console.log('selected genre:', this.selectedGenre);
  };

  arrayFilter(){
    if(this.selectedGenre == undefined || this.selectedGenre == ''){
      this.filteredArray = this.arrayDischi;
    }else{
      this.filteredArray = this.arrayDischi.filter(el => el.genre == this.selectedGenre);
    }
    return this.filteredArray;
  }

}
