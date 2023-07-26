import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'status-validator',
  templateUrl: './status-validator.component.html',
  styleUrls: ['./status-validator.component.scss']
})
export class StatusValidatorComponent implements OnInit {
  volumeChk: boolean = false;
  shipment: any = {};
  volumeData: any = {} ;

  constructor(
    private events : EventsService

  ) {

  }

  ngOnInit(): void {
    this.events.event.subscribe((res)=> {
      this.shipment = res;

      this.events.volumes.subscribe((res)=> {
        this.volumeData = res;
        // console.log(res);
  
        if (this.volumeData.length && this.volumeData.width &&  this.volumeData.height) {
          let creatVolume = Number(this.volumeData.length) * Number(this.volumeData.width) * Number(this.volumeData.height)
          if (this.shipment &&  creatVolume  <= this.shipment.capacity) {
            this.volumeChk = true;
          } else {
            this.volumeChk = false;
            
          }
        }
        
      })
    })
    
  }

}
