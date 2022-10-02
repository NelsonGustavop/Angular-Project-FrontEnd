import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {
  ELEMENT_DATA:Tecnico[] = [
    {
      id:1,
      name:'Nelson Yeger',
      cpf: '321.456.654-23',
      email:'nelsonYeger@gmail.com',
      senha:'nelson1234',
      perfis:['0'],
      dataCriacao:'26/10/2004'
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Actions'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}

