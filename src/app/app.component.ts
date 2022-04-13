import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ApiService ],
})
export class AppComponent {

  title = 'teste-l5';

  public search = "";
  public type = "track";
  public page = "result";
  public result: any = [];
  constructor(public service: ApiService) {

  }

  public buscar() {
    this.page = "result";
    this.service.saveHistory({
      type: this.type,
      search: this.search,
      created_at: new Date()
    })
    this.service.search(this.type, this.search).subscribe((response:any) => {
        this.result = response.results[`${this.type}matches`][this.type];
    });
  }

  public delete(idx: number) {
    this.service.deleteHistory(idx);
  }
}
