import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from "./table.column";
import { MatTableDataSource } from "@angular/material/table";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public _dataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  @Input() columns: TableColumn[];

  @Input() set dataSource(data: any[]) {
    this.setDataSource(data);
  }

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((tableColumn: TableColumn) => tableColumn.caption);
  }

  setDataSource(data: any) {
    this._dataSource = new MatTableDataSource<any>(data);
  }
}
