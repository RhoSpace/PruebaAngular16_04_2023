import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map, debounceTime } from 'rxjs';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements AfterViewInit, OnInit {

  @Input() pokemons: Array<any> = [];
  @Output() selectInfoPokemon = new EventEmitter<string>();

  // Angular material table with pagination
  displayedColumns: string[] = ['Name', 'url'];
  dataSource = new MatTableDataSource<PokemonModel>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //Angular Material Autocomplete
  control = new FormControl();
  filPokemons: Observable<string[]> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.pokemons;
    console.log(this.dataSource.data);
  }

  //Buscador
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //boton
  pokemonSelect(name: string){
    this.selectInfoPokemon.emit( name );
  }

}
