import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  public picture: string;
  public ingredients: string;
  public allergens: string;
  public nova: string;
  public nutrition: string;
  public palm: string;
  public infos: string;

  champSaisi = new FormControl("");

  constructor(private http: HttpClient) {
    this.picture = "";
    this.ingredients = "";
    this.allergens = "";
    this.nova = "";
    this.nutrition = "";
    this.palm = "";
    this.infos = "";

  }

  public afficherChampSaisi() {
    return this.http.get<any>("https://world.openfoodfacts.org/api/v0/product/" + this.champSaisi.value + ".json").subscribe((data) => {
      this.picture = data.product.image_url;
      this.ingredients = data.product.ingredients_text_fr;
      this.allergens = data.product.allergens_from_ingredients;
      this.nova = data.product.nova_group;
      this.nutrition = data.product.nutrition_grade_fr;
      this.palm = data.product.ingredients_from_palm_oil_n;
      this.infos = data.product.stores;
    })
  }
}
