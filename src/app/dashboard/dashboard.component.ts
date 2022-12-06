import { Component, OnInit } from '@angular/core';
import { FetchApiDischiService } from '../fetch-api-dischi.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dischi: Card[] | undefined;

  constructor(private fetchApiDischi: FetchApiDischiService) { }

  ngOnInit(): void {
    this.getDischi();
  }

  getDischi(){
    this.fetchApiDischi.getDischi()
      .subscribe(dischi => this.dischi = dischi.slice(1, 5))
  }
}
