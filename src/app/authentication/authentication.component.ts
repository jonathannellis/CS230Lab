import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-authentication',
    templateUrl: 'authentication.component.html',
})
export class AuthenticationComponent {
    onSubmit(data:NgForm) {
        console.log("Button clicked");
        console.log(data.value);
    }
}