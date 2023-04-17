import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { InfoPokeModel } from 'src/app/models/info-poke.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokemon: any;
  @Output() updateFav = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
    this.loadData()
  }

  saveData() {
    localStorage.setItem('favoritePokemon', JSON.stringify(this.pokemon))
  }
  
  loadData(){
    let data:any = localStorage.getItem('favoritePokemon')
    this.pokemon = JSON.parse(data);
  }

  outPutEvent(){
    this.updateFav.emit(this.pokemon)
  }

}
