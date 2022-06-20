import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public clock: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.clockUpdata()
  }

  clockUpdata() {
    setInterval(()=> this.clock = new Date())
  }

}
