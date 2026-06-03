import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  getQuestion(): Observable<string> {
    return of('Do You Like Me? ❤️');
  }
}
