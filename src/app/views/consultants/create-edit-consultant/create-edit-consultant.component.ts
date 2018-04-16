import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultantService } from '../../../services/consultant.service';
import { Consultant } from '../../../models/consultant';

@Component({
  selector: 'app-create-edit-consultant',
  templateUrl: './create-edit-consultant.component.html',
  styleUrls: ['./create-edit-consultant.component.css']
})
export class CreateOrEditConsultantComponent implements OnInit {

  consultant: Consultant = new Consultant();
  projectsList: string;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private consultantService: ConsultantService) { }

  async ngOnInit() {

    var id = this.route.snapshot.params['id'];
    if (id) {
      this.consultant = await this.consultantService.getById(id);
      this.projectsList = this.consultant.projects.join(',');
    }
  }


  async createOrUpdate() {
    let list = this.projectsList.split(',');
    this.consultant.projects = list;

    if (this.consultant._id)
      this.consultantService.edit(this.consultant);
    else
      this.consultantService.create(this.consultant);

    this.router.navigate(['/consultants']);
  }

}
