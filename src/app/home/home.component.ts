import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'n5-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToCharacter(isDisney: boolean){
    const path = isDisney ? 'disney' : 'rickandmorty'
    this.router.navigate([`/mf-character/${path}`]);
  }

}
