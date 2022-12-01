import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dischi';

  onRiceviDati(value: any){
    // console.log(`Il nome arrivato dal nipote è: ${value}`);
  }
}
