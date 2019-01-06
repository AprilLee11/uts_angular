import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

const GRANTING_TICKET_URL: string = 'https://uts-login-qa.nlm.nih.gov/cas/v1/tickets';


@Injectable()
export class AuthenticationService {

  private isLoggedIn: boolean = false;
  private serviceTicket: string = '';
  private auth_token: string;
  private user_id: string;

  constructor(private http: Http) {
      //this.userProfile$ = this.store.select('userReducer');
  }

  getServiceTicket(): Observable<string> {
    if(true) {
      let creds = "servicename=http://umlsks.nlm.nih.gov";
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post(GRANTING_TICKET_URL + '/' + this.auth_token + '?service=http://umlsks.nlm.nih.gov', creds, { headers: headers })
      .map( res => res.text() )
      .map( (res) => {
        this.serviceTicket = res;
        return res });
    }
    else {

    }
  }
  
  authenticate(user: string, pass: string): Observable<string> {

    let creds : string = "username=" + user + "&password=" + pass;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let delimiter1 : string = 'tickets/';
    let delimiter2 : string = "\"";

    return this.http.post(GRANTING_TICKET_URL, creds, { headers: headers })
    .map(Response => {
      let token = Response.text().substring(
      Response.text().indexOf(delimiter1) + delimiter1.length,
      Response.text().indexOf(delimiter2, Response.text().indexOf(delimiter1)));

      if(token) {
        this.setTokenInLocalStorage(user, token);
        this.user_id = user;
        this.auth_token = token;
        this.isLoggedIn = true;
        return token;
      }
      else {
        return null;
      }
    });
  }

  logout() {
    this.isLoggedIn = false;
  }

  getLoggedIn() : boolean{
    return this.isLoggedIn;
  }

  setLoggedIn(login:boolean) : void {
      this.isLoggedIn = login;
  }

  private setTokenInLocalStorage(id, token): void {
    localStorage.setItem(id, token);
  }

  private handleError(error:any) {
        return Observable.throw(error);
  }

}
