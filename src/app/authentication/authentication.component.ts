import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationResponse } from "./authentication-response";
import { AuthenticationService } from "./authentication.service";

@Component({
    selector: 'app-authentication',
    templateUrl: 'authentication.component.html',
})
export class AuthenticationComponent {
    constructor(private authenticationService:AuthenticationService) {

    }

    onSubmit(data:NgForm) {
        console.log("Button clicked");
        console.log(data.value);

        this.authenticationService.signup(data.value.email,data.value.password).subscribe(
            (data:AuthenticationResponse) => {
                console.log(data);
            },
            error => {
                console.log("Error: " + error.error.error.message);
            }
        );
    }
}