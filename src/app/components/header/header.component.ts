import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() pokemon: any;

  constructor(private matDialog: MatDialog,         
  ) { }

  openDialog(){
    this.matDialog.open(DialogComponent,{
      width: '100%',
    })
  }

  ngOnInit(): void {
    let data:any = localStorage.getItem('favoritePokemon')
    this.pokemon = JSON.parse(data);
  }

}
