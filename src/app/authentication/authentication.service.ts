import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthenticationResponse } from "./authentication-response";

@Injectable({
    providedIn: "root"
})

export class AuthenticationService {
    private baseURL:string = "https://identitytoolkit.googleapis.com/v1/accounts";
    private signUpEndpoint:string = "signUp";
    private logInEndpoint:string = "signInWithPassword";

    public constructor(private http:HttpClient) {

    }


    public signup(email:string, password:string) {
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        }
        return this.http.post<AuthenticationResponse>(
            this.baseURL + ":" + this.signUpEndpoint + "?key=" + environment.firebase.apiKey, 
            requestBody
        );
    }

    public login(email:string, password:string) {
        const requestBody = {
            "email":email,
            "password":password,
            "returnSecureToken":true
        }
        return this.http.post<AuthenticationResponse>(
            this.baseURL + ":" + this.logInEndpoint + "?key=" + environment.firebase.apiKey, 
            requestBody
        );
    }
}