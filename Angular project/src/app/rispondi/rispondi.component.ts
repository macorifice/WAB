import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-rispondi',
  templateUrl: './rispondi.component.html',
  styleUrls: ['./rispondi.component.scss']
})
export class RispondiComponent implements OnInit {

  constructor(private httpService: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAndSetParams();
    this.removeParams();
  }

  getAndSetParams(){
    $.urlParam = function(name){
      var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
      return results[1] || 0;
    }
    $('#name').val(decodeURIComponent($.urlParam('number')));
    $('#risposta').val(decodeURIComponent($.urlParam('risposta')));
    $("#name").prop('disabled', true);
    $("#risposta").prop('disabled', true);
    
  }

  removeParams(){
    var clean_uri = location.protocol + "//" + location.host + location.pathname;
    window.history.replaceState({}, document.title, clean_uri);
    }

  sendResponse(number, text){
    this.httpService.get('https://9jvzknfz2a.execute-api.eu-west-1.amazonaws.com/prod/send?number='+number+'&text='+text).subscribe();
    this.openSnackBar();
  }

  resolveTicket(number, risposta, text){
    this.httpService.get('https://t6jgpqt8wl.execute-api.eu-west-1.amazonaws.com/prod/track?from='+393428639085+'&text_from='+risposta+'&to='+number+'&text_to='+text).subscribe();
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 1500,
    });
  }
}
