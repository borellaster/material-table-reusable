import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'material-table-reusable';
  myData: any;
  myColumns: any;

  ngOnInit(): void {
    this.myData = this.getData();
    this.getColumns();
  }

  getData(): any[] {
    return [
      {
        name: 'Felipe',
        mail: 'felipe@gmai.com'
      },
      {
        name: 'Guilherme',
        mail: 'guilherme@gmail.com'
      },
      {
        name: 'Cecilia',
        mail: 'cecilia@gmail.com'
      }
    ];
  }

  getColumns(): void {
    this.myColumns = [
      {
        name: 'Name',
        dataKey: 'name'
      },
      {
        name: 'Mail',
        dataKey: 'mail'
      }
    ];
  }

}
