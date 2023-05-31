import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  public picture : string;

  champSaisi = new FormControl("");

  constructor(private http: HttpClient) {
    this.picture = ""
  }

  public afficherChampSaisi(){
    return this.http.get<any>("https://world.openfoodfacts.org/api/v0/product/"+this.champSaisi.value + ".json").subscribe((data) => {
      this.picture = data.product.image_url
  })
}
}
