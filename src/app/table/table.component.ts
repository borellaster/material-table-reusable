import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from "./TableColumn";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[];
  @Input() tableColumns: TableColumn[];

  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }
  constructor() {
  }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    this.displayedColumns = columnNames;
  }

  setTableDataSource(data: any) {
    this.tableDataSource = new MatTableDataSource<any>(data);
  }
}
