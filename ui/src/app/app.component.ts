import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  properties = [
    {
      price: "30000",
      city: "Sydney",
      type: "2BHK",
      desc: "This is an luxuarious 3BHK apartment with south facing balcony and bedroom. It has a moduler kitchen equipped with modern gadgets."
    },
    {
      price: "43888",
      city: "Melbourne",
      type: "2BHK",
      desc: "This is an luxuarious 3BHK apartment with south facing balcony and bedroom. It has a moduler kitchen equipped with modern gadgets."
    },
    {
      price: "78000",
      city: "Perth",
      type: "2BHK",
      desc: "This is an luxuarious 3BHK apartment with south facing balcony and bedroom. It has a moduler kitchen equipped with modern gadgets."
    },
    {
      price: "12565876",
      city: "Melbourne",
      type: "2BHK",
      desc: "This is an luxuarious 3BHK apartment with south facing balcony and bedroom. It has a moduler kitchen equipped with modern gadgets."
    }
  ];
  queryForm = new FormGroup({
    firstName : new FormControl("", Validators.required),
    lastName : new FormControl("", Validators.required),
    phone : new FormControl("", Validators.required),
    email : new FormControl("", Validators.required),
    query : new FormControl("", Validators.required)

  });

  sendQuery()
  {
    if(this.queryForm.status != "INVALID")
      document.getElementsByClassName("message_box")[0].innerHTML = "Thanks for contacting us. We will get back to you."
    else
      {
        document.getElementsByClassName("message_box")[0].innerHTML = "Thanks for contacting us. We will get back to you."
      }
  }
}
