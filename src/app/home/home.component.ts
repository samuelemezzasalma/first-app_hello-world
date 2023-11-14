import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of filteredLocationList; track housingLocation.id) {
        <app-housing-location  [housingLocation]="housingLocation" ></app-housing-location>
      }
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  housingService: HousingService= inject(HousingService)

  filteredLocationList: HousingLocation[] = []

  housingLocationList: HousingLocation[] = []

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList  
      this.filteredLocationList = this.housingLocationList
    })
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation: HousingLocation) => housingLocation?.city.toLowerCase().includes(text.toLowerCase()))
  }
  


}
