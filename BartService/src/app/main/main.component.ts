import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
stations = 'https://api.bart.gov/api/stn.aspx?cmd=stns&key=ZRR9-P2Q2-92KT-DWE9&json=y'
apiURL = 'http://api.bart.gov/api/etd.aspx?cmd=etd&orig=dubl&key=ZRR9-P2Q2-92KT-DWE9&json=y'
cities: Object[];
  constructor(private dataS: DataService) { }

  ngOnInit() {
    this.dataS.getURL(this.stations).subscribe( x => {
      this.cities = x.root.stations.station;
      console.log(this.cities);
    });
    this.dataS.getURL(this.apiURL).subscribe(
      y => {console.log(y)}
    )
  }

}
