import { Component, OnInit } from '@angular/core';
import { IJob } from 'src/app/models/job.model';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-ob-job',
  templateUrl: './ob-job.component.html',
  styleUrls: ['./ob-job.component.scss']
})
export class ObJobComponent implements OnInit {

  JOB_LIST = JOB_LIST;

  constructor(
    public state: StateService
  ) { }

  ngOnInit(): void {
  }

  public selectJob(job: IJob) { 

    if(!this.state.state.university) {

      // Check if job needs university
      if(job.universityNeded) {
        alert('Dafür brauchst du leider einen Uni-Abschluss');
        return;
      }

    }

    
    this.state.state.job = job;
  }

}

// Sources: https://www.jobted.at/gehalt
export const JOB_LIST: IJob[] = [
  {
    name: "Einzelhandel",
    description: "Du verkaufst Waren im Einzelhandel",
    salary: 1820,
    stress: 5,
    universityNeded: false,
    imgUrl: 'coffee-shop-cashier-2-1.png'
  },
  {
    name: "Jurist:in",
    description: "Du verteidigst Menschen vor Gericht",
    salary: 3850,
    stress: 10,
    universityNeded: true,
    imgUrl: 'law-book.png'
  },
  {
    name: "Bäcker:in",
    description: "Du stehst früh auf und backst Brot und Kuchen",
    salary: 2290,
    stress: 9,
    universityNeded: false,
    imgUrl: 'pastry-chef-2.png'
  }, 
  {
    name: "Apotheker:in",
    description: "Du verkaufst Medikamente",
    salary: 3820,
    stress: 5,
    universityNeded: true,
    imgUrl: 'medicine-bottle-5.png'
  }
] 