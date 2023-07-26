import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  event = new BehaviorSubject({});  
  volumes = new BehaviorSubject({});  

  constructor() { }
}
