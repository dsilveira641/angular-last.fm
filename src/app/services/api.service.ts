import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(public http: HttpClient) {

    }

    private options() {
      return {
        headers: {

        }
      }
    }

    public search(type: string, msc: string) {
      return this.http.get("http://ws.audioscrobbler.com/2.0?method=" + type + ".search&"+ type + "=" + msc + "&api_key=" + environment.lastFm.apiKey + "&format=json");
    }

    public getHistory() {
      return JSON.parse(localStorage.getItem('searchHistory') || '[]');
    }

    public saveHistory(history: any) {
      let histories = this.getHistory();
      histories.push(history);
      localStorage.setItem('searchHistory', JSON.stringify(histories));
    }

    public deleteHistory(idx: number) {
      let histories = this.getHistory();
      if (idx >= 0) {
        histories.splice(idx,1);
        localStorage.setItem('searchHistory', JSON.stringify(histories));
      }
    }

  }
