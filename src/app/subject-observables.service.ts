import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubjectObservablesService {

  constructor() { }

  id=new Subject();

}
