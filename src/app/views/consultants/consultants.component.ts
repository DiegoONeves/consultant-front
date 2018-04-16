import { Component, OnInit } from '@angular/core';
import { Consultant } from '../../models/consultant';
import { ConsultantService } from 'app/services/consultant.service';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit {

  constructor(private consultantService: ConsultantService) { }

  consultants: Consultant[] = new Array<Consultant>();

  async ngOnInit() {
    this.getAllConsultants();
  }


  async getAllConsultants() {

    this.consultants = await this.consultantService.get();
    return this.consultants;
  }

  transcript(v: boolean) {
    return v ? "Ativo" : "Inativo";
  }

}
