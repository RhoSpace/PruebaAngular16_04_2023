import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  pokemon: any;

  constructor() { }

  ngOnInit(): void {
    let data:any = localStorage.getItem('favoritePokemon')
    this.pokemon = JSON.parse(data);
  }

}
