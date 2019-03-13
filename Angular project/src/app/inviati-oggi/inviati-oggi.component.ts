import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-inviati-oggi',
  // templateUrl: './inviati.component.html',
   template: `
 <mat-card class="example-card">
 <div #start ></div>
 <button type="button" class="btn btn-success" (click)="scroll(target)">&#8595;</button>
    <ul #scrollBottom *ngFor="let item of dataArray">
    <mat-card-header>
    <div mat-card-avatar class="example-header-image"></div>
    <mat-card-title>Inviato a : {{item.number}}</mat-card-title>
  </mat-card-header>
    <mat-card-content>
    <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
        <div class="bg-cover h-48"></div>
        <div class="p-4 flex-1 flex flex-col" style="">
        <b>Ora:</b> {{item.sendHH | date :'dd/MM/yyyy HH:mm'}}
            <h3 class="mb-4 text-2xl"></h3>
            <div class="mb-4 text-grey-darker text-sm flex-1"></div>
            </div>
            </div>
            </div>
    </mat-card-content>
    </ul>
    <div #target ></div>
    <button type="button" class="btn btn-success" (click)="scroll(start)">&#8593;</button>
    </mat-card>
    `
  ,
  styleUrls: ['./inviati-oggi.component.scss']
})
export class InviatiOggiComponent implements OnInit {
  scrHeight:any;
  scrWidth:any;

  dataArray : any []; 

  constructor(private httpService: HttpClient, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      window.location.reload();      
    }, 150000); // Activate after 2,5 minutes.

    

    this.httpService.get('https://k1logu3d9i.execute-api.eu-west-1.amazonaws.com/prod/send').subscribe(
      data => {
        this.dataArray = data as object [];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      })
      
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }


}
