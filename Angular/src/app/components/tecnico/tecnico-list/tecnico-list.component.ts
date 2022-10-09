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
      name:'Valdir Cezar',
      cpf: '550.482.150-95',
      email:'valdir@mail.com',
      senha:'123',
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

