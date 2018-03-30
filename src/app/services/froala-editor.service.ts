import { Injectable } from '@angular/core';

@Injectable()
export class FroalaEditorService {

  constructor() { }

  public options: Object = { 
    placeholderText: 'Edit Me',
    charCounterCount: false,
    toolbarButtons: ['bold', 'italic','fontSize','fontFamily'],
    heightMax: 60
  }

}
