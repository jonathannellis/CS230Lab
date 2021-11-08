export interface AuthenticationResponse {
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string // Unique identifier for user.
}