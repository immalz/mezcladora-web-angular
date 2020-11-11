import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbar = false;

  estado(): boolean {
    return this.navbar = !this.navbar;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
