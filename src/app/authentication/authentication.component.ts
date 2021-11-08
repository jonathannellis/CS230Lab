import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthenticationResponse } from "./authentication-response";
import { AuthenticationService } from "./authentication.service";

@Component({
    selector: 'app-authentication',
    templateUrl: 'authentication.component.html',
})
export class AuthenticationComponent {
    public buttonClicked!: string;
    private authenticationObservable!: Observable<AuthenticationResponse>;
    public loginMsg!:string;

    constructor(private authenticationService: AuthenticationService) {

    }

    onSubmit(form: NgForm) {
        console.log("Button clicked: " + this.buttonClicked);
        console.log(form.value);

        if (this.buttonClicked == 'signup')
            this.authenticationObservable = this.authenticationService.signup(form.value.email, form.value.password);
        else
            this.authenticationObservable = this.authenticationService.login(form.value.email, form.value.password);

        this.authenticationObservable.subscribe(
            (response: AuthenticationResponse) => {
                if (response.registered != null)
                    this.loginMsg = "Successfully logged in as " + response.email + ".";
                else
                    this.loginMsg = "Successfully created a new account with the e-mail " + response.email + ".";
            },
            error => {
                if (error.error.error.message != undefined) {
                    if (error.error.error.message == "EMAIL_NOT_FOUND")
                        this.loginMsg = "Login failed. A user with the specified e-mail does not exist.";
                    else if (error.error.error.message == "INVALID_PASSWORD")
                        this.loginMsg = "Login failed. The password provided is incorrect.";
                    else if (error.error.error.message == "EMAIL_EXISTS")
                        this.loginMsg = "Sign up failed. A user with the specified e-mail already exists.";
                    else 
                        this.loginMsg = "Login failed. An unknown error was encountered.  Please try again later.";
                }
                else
                    this.loginMsg = "Login failed. An unknown error was encountered.  Please try again later.";
            }
        );

        form.resetForm();
    }
}