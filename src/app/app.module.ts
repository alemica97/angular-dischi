import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenti/header/header.component';
import { GridComponent } from './componenti/grid/grid.component';
import { CardComponent } from './componenti/card/card.component';
import { SelectGenreComponent } from './componenti/select-genre/select-genre.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscoInfoComponent } from './disco-info/disco-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridComponent,
    CardComponent,
    SelectGenreComponent,
    DashboardComponent,
    DiscoInfoComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
