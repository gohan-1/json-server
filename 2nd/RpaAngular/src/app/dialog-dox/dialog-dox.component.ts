import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';

declare var Externaljs:any;

@Component({
  selector: 'app-dialog-dox',
  templateUrl: './dialog-dox.component.html',
  styleUrls: ['./dialog-dox.component.css']
})
export class DialogDoxComponent implements OnInit {
  

  constructor() { }
 @ViewChild('divClick') divClick: ElementRef;
  ngOnInit() {
      // your other code
    setTimeout(() => {
    this.divClick.nativeElement.click();
    }, 200);
    
  }

  callExternalBot(){
    Externaljs()
  }

}
