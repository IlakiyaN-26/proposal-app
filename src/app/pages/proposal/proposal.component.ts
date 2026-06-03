import { Component } from '@angular/core';
import { ProposalService } from 'src/app/proposal.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent {
  x = 0;
  y = 0;
  question = '';

  constructor(
    private proposalService: ProposalService
  ) {
    this.proposalService
    .getQuestion()
    .pipe(
      map((data: any) => data.toUpperCase())
    )
    .subscribe((res: any) => {
      this.question = res;
    });
  }

  moveButton() {
    this.x = Math.random() * 250;
    this.y = Math.random() * 250;
  }

  yesClick() {
    alert('🌹😘 I Like You Too ❤️');
  }

  ngOnInit() {
    this.proposalService
      .getQuestion()
      .subscribe((res: any) => {
        this.question = res;
      });
  }
}
