import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-activated-route',
  templateUrl: './activated-route.component.html',
  styleUrls: ['./activated-route.component.css']
})
export class ActivatedRouteComponent {
  // p = new Map<string, number>();
  // constructor(route: ActivatedRoute) {
  //   const id: Observable<string> = route.params.pipe(map(p => p.id));
  //   const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
  //   // route.data includes both `data` and `resolve`
  //   const user = route.data.pipe(map(d => d.user));
}
