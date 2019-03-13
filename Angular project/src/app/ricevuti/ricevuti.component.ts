import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-ricevuti',
  //templateUrl: './ricevuti.component.html',
  template: 
  `
  <mat-card class="example-card">
  <div #start ></div>
  <button type="button" class="btn btn-success" (click)="scroll(target)">&#8595;</button>
    <ul *ngFor="let item of dataArray">
    <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title><b>Messaggio da : </b>{{item.profile_name}}</mat-card-title>
  </mat-card-header>
    <mat-card-content>
    <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
        <div class="bg-cover h-48"></div>
        <div class="p-4 flex-1 flex flex-col" style="">
        <b>Numero:</b> {{item.number}}
        <b>Testo:</b> {{item.msg}}
        <b>Ora:</b> {{item.sendHH | date :'dd/MM/yyyy HH:mm'}}
            <h3 class="mb-4 text-2xl"></h3>
            <div class="mb-4 text-grey-darker text-sm flex-1">
            <button routerLink="/rispondi" [queryParams]="{ number:item.number, risposta:item.msg }"><b>Rispondi</b></button>
            </div>
            </div>
            </div>
            </div>
    </mat-card-content>
    </ul>
    <div #target ></div>
    <button type="button" class="btn btn-success" (click)="scroll(start)">&#8593;</button>
    </mat-card>`,
  styleUrls: ['./ricevuti.component.scss']
})
export class RicevutiComponent implements OnInit {
  dataArray : any [];
  dataArraySend : any []; 

  constructor(private httpService: HttpClient, private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      window.location.reload();
    }, 150000); // Activate after 2,5 minutes.

    
    // /*array for send messagges*/
    //this.readDB.readDb();
    this.httpService.get('https://j3gu53t4kf.execute-api.eu-west-1.amazonaws.com/prod/read').subscribe(
      data => {
        this.dataArray = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      })   
      
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}