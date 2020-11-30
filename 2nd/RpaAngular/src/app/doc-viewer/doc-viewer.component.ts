import { Component, OnInit ,ElementRef,Injectable,ChangeDetectorRef} from '@angular/core';

declare var loadPicker:any;
declare var gapi: any;
declare var google: any;

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.css']
})
export class DocViewerComponent implements OnInit {
  

 

  public developerKey = "AIzaSyBPWGK2pbCyIHx_wQBNjxiGU7L0tK28tEQ"

  // The Client ID obtained from the Google API Console. Replace with your own Client ID.
  public clientId = "1049795907313-blpr5cgo14ttudni7nijhuiceroa5hnf.apps.googleusercontent.com"

  // Replace with your own project number from console.developers.google.com.
  // See "Project number" under "IAM & Admin" > "Settings"
  public appId = "1049795907313"

  // Scope to use to access user's Drive items.
  public scope = ['https://www.googleapis.com/auth/drive.file'];

  public pickerApiLoaded = false;

  public doc:string=""

 
  



  


  // https://github.com/guigrpa/docx-templates#readme
  

  constructor(private changeDetector : ChangeDetectorRef) {}

  ngOnInit() {
 this.doc="https://docs.google.com/spreadsheets/d/1SUyoSeRBti78kDfsRWI74LlBHo7D3D7kNjnGbbOTu9E/edit#gid=0"

        // your other code
        setTimeout(() => {
          this.createPicker();
          }, 20000);
 
  }


   show(){
      this.doc=localStorage.getItem("url")
   }
   showPickerDialog() {
     
    gapi.load('auth', {'callback': this.onAuthApiLoad.bind(this)});
    gapi.load('picker', {'callback': this.onPickerApiLoad.bind(this)});
  }

  onAuthApiLoad() {
    gapi.auth.authorize(
        {
          'client_id': this.clientId,
          'scope': this.scope,
          'immediate': false
        },
        this.handleAuthResult
        );
        console.log("1")
  }

  onPickerApiLoad() {
    // this.pickerApiLoaded = true;
    // console.log("11")
    // this.createPicker();
    this.handleAuthResult
  }

   handleAuthResult(authResult) {
    console.log(authResult)
    if (authResult && !authResult.error) {
   
      // authResult.access_token = authResult.access_token;
      if (  authResult.access_token) {
        console.log("13")
        var view = new google.picker.DocsView(google.picker.ViewId.SPREADSHEETS);
        view.setMode(google.picker.DocsViewMode.LIST);
        // view.setQuery(window.dataFeedName);
        var picker = new google.picker.PickerBuilder()
            .enableFeature(google.picker.Feature.NAV_HIDDEN)
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
            .setAppId("1049795907313")
            .setOAuthToken(authResult.access_token)
            .addView(view)
            .addView(new google.picker.DocsUploadView())
            .setDeveloperKey("AIzaSyBPWGK2pbCyIHx_wQBNjxiGU7L0tK28tEQ")
            .setCallback(function (data) {
              if (data.action == google.picker.Action.PICKED) {
                var fileUrl = data.docs[0].url;
                // console.log(data.docs[0].url)
                this.doc=fileUrl
                localStorage.setItem("url",fileUrl)
              
            
              }
             

              

            })
            .build();
         picker.setVisible(true);

         


         
      
      }

  
      
    }
    
  }

  // Create and render a Picker object for searching images.
  createPicker() {
    console.log(this.doc)

  }

  // A simple callback implementation.
 pickerCallback(data) {
    if (data.action == google.picker.Action.PICKED) {
      var fileId = data.docs[0].url;
      console.log(data.docs[0])
      alert('The user selected: ' + fileId);
    }
  }



}
