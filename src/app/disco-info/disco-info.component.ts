import { Component, OnInit } from '@angular/core';
import { FetchApiDischiService } from '../fetch-api-dischi.service';
import { Card } from '../models/card';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-disco-info',
  templateUrl: './disco-info.component.html',
  styleUrls: ['./disco-info.component.scss']
})
export class DiscoInfoComponent implements OnInit {

  disco?: Card;
  dischi: Card[] = [];

  constructor(
    private fetchApiDischi: FetchApiDischiService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getDisco();
  }

  getDisco(): void {
    const title = String(this.route.snapshot.paramMap.get('title'))
    this.fetchApiDischi.getDisco(title)
      .subscribe(disco => this.disco = disco);
  }

  goBack(): void{
    this.location.back();
  }
}
