import { Component, OnInit } from '@angular/core';
import { FetchApiDischiService } from 'src/app/fetch-api-dischi.service';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit{

  valoreSelect: string | undefined;

  dischiInfo: Card[] | undefined;

  filteredArray: Card[] = [];

  constructor(private fetchApiDischi: FetchApiDischiService) { }

  ngOnInit(): void {
    this.getDischi();
  }

  getDischi(): void {
    this.fetchApiDischi.getDischi()
      .subscribe(dischi => this.dischiInfo = dischi);
  }
}
