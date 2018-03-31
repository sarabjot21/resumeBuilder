import { Injectable } from '@angular/core';

@Injectable()
export class FroalaEditorService {

  constructor() { }

  public options: Object = { 
    placeholderText: 'Edit Me',
    charCounterCount: false,
    toolbarButtons: ['insertImage','bold', 'italic','fontSize','fontFamily','underline'],
    heightMax: 60
  }

}
