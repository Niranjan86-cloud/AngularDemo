import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private http: HttpClient) { }

  getProducts() {
    // return this.http.get('../assets/sample.json').map(response => response.json());
    this.http.get('../assets/sample.json').pipe(map(data => {})).subscribe(result => {
    console.log(result)

  });
  }
}
