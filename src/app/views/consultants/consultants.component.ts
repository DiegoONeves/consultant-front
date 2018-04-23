import { Component, OnInit } from '@angular/core';
import { Consultant } from '../../models/consultant';
import { ConsultantService } from 'app/services/consultant.service';
import { SearchConsultant } from 'app/models/searchConsultant';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit {

  constructor(private consultantService: ConsultantService) { }

  consultants: Consultant[] = new Array<Consultant>();
  searchConsultant: SearchConsultant = new SearchConsultant();
  itemsPerPage: number[] = [5, 10, 50, 100];

  async ngOnInit() {
    this.getAllConsultants(1);
  }


  async getAllConsultants(page: number) {
    this.searchConsultant.currentPage = page;
    this.consultants = await this.consultantService.get(this.searchConsultant);
    return this.consultants;
  }

  transcript(v: boolean) {
    return v ? "Ativo" : "Inativo";
  }

}
