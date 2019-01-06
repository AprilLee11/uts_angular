import { Injectable } from "@angular/core";
import { Http, HttpModule } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import {
  JSONBase,
  ConceptBit,
  ConceptsBase,
  RootSource,
  AtomBase,
  Definition
} from "../../search/model";
import { AuthenticationService } from "./authentication.service";

const TERM: string = "TE";
const CUI: string = "CU";
const CODE: string = "CO";
const BASE_API_URL: string = "https://uts-ws-qa.nlm.nih.gov/rest/";
const CUI_SEARCH_API_URL: string = "content/current/CUI/";
const TERM_SEARCH_API_URL: string = "search/current?string=";
const ROOT_SOURCES_API_URL: string =
  "https://uts-ws.nlm.nih.gov/rest/metadata/current/sources";

@Injectable()
export class TermDefaultSearchService {
  private jsonBase: JSONBase;
  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) {}

  getConceptPageNum(cui: string): Observable<number> {
    return this.authenticationService
      .getServiceTicket()
      .switchMap((data: string) => {
        let api_url =
          BASE_API_URL + CUI_SEARCH_API_URL + cui + "/atoms?ticket=" + data;
        return this.http.get(api_url).map(responseData => {
          let data1 = <JSONBase>responseData.json();
          return data1.pageCount;
        });
      });
  }

  getConcepts(term: string, pageNum: number): Observable<any> {
    return this.authenticationService
      .getServiceTicket()
      .switchMap((sticket: string) => {
        let api_url: string =
          BASE_API_URL +
          TERM_SEARCH_API_URL +
          term +
          "&ticket=" +
          sticket +
          "&pageNumber=" +
          pageNum;

        return this.http.get(api_url).map(responseData => {
          console.log("getConcepts\t" + responseData.json());
          return responseData.json();
        });
      });
  }

  getRootSources(): Observable<RootSource[]> {
    return this.http.get(ROOT_SOURCES_API_URL).map(responseData => {
      let atomBase = <AtomBase>responseData.json();
      let rootSources: Array<RootSource> = [];
      for (let i in atomBase.result) {
        let source = <RootSource>atomBase.result[i];
        rootSources.push(source);
      }
      return rootSources;
    });
  }

  getDefinitionsfromCui(
    cui: string,
    pageNum: number
  ): Observable<Definition[]> {
    return this.authenticationService
      .getServiceTicket()
      .switchMap((data: string) => {
        let api_url =
          BASE_API_URL +
          CUI_SEARCH_API_URL +
          cui +
          "/definitions?ticket=" +
          data +
          "&pageNumber=" +
          pageNum;

        return this.http.get(api_url).map(responseData => {
          let definitionBase = <AtomBase>responseData.json();
          let definitions: Array<Definition> = [];
          for (let i in definitionBase.result) {
            let definition = <Definition>definitionBase.result[i];
            definitions.push(definition);
          }
          return definitions;
        });
      });
  }
}
