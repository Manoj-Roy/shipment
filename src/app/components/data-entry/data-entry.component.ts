import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { EventsService } from 'src/app/services/events.service';

interface shipmentData { label: string; capacity: number; }

@Component({
  selector: 'data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.scss']
})
export class DataEntryComponent implements OnInit {
  
  data: shipmentData[] ;  
  selectedShipment: any;
  chkVolume: any = {};

  constructor(
    private primengConfig: PrimeNGConfig,
    private events : EventsService
    ) { 
    this.data = [{label: "small-shipment", capacity: 350},
    {label: "medium-shipment", capacity: 550},
    {label: "big-shipment", capacity: 750},
    {label: "duckling-shipment", capacity: 2500}]
  }

  ngOnInit(): void {
  }
  getShipData() {
    console.log(typeof this.selectedShipment);
    
    if (typeof this.selectedShipment === 'string') {
      let typeData = this.data.filter((el)=> el.label === this.selectedShipment);
      console.log(typeData);
      typeData.length > 1 ? (this.events.event.next(typeData[1]), this.events.volumes.next(this.chkVolume)) : this.events.event.next(typeData[0]);
    } else if (typeof this.selectedShipment === 'object') {
    console.log(this.selectedShipment);
    this.events.event.next(this.selectedShipment);
      this.events.volumes.next(this.chkVolume)
    }
  }
}
