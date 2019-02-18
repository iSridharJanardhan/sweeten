import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: boolean = false;
clickEvent(){
    this.status = !this.status;       
}

  private _productURL = 'http://starlord.hackerearth.com/movies';  
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;
  constructor(private http : HttpClient){
    this.columnDefs=[
      {
        headerName:"Movie Name",
        field:"movie_title",
        width:150,
        sortingOrder:["asc","desc"]
      },
      {
        headerName:"Directed By",
        field:"director_name",
        width:150,
        sortingOrder:["desc","asc"]
      },
      {
        headerName:"1stActor",
        field:"actor_1_name",
        width:150,
        sortingOrder:["desc","asc"]
      },
      {
        headerName:"2ndActor",
        field:"actor_2_name",
        width:150,
        sortingOrder:["desc","asc"]
      },
      {
        headerName:"Genre",
        field:"genres",
        width:350,
        sortingOrder:["desc","asc"]
      },
      {
        headerName:"Language",
        field:"language",
        width:150,
        sortingOrder:["desc","asc"]
      },
      {
        headerName:"Country",
        field:"country",
        width:150,
        sortingOrder:["desc","asc"]
      },
      {
        headerName:"Content Rating",
        field:"content_rating",
        width:150,
        sortingOrder:["desc","asc"]
      },
      {
        headerName:"Budget",
        field:"budget",
        width:150,
        sortingOrder:["desc","asc"]
      },
      {
        headerName:"Title Year",
        field:"title_year",
        width:150,
        sortingOrder:["desc","asc"]
      },
      {
        headerName:"Key Plots",
        field:"plot_keywords",
        width:350,
        sortingOrder:["desc","asc"]
      },
      {
        headerName:"IMDB Review",
        field:"movie_imdb_link",
        width:300,
        sortingOrder:["desc","asc"]
      },
    ];
    this.sortingOrder=["asc","asc",null]
  }
  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
    .get("http://localhost:4200/assets/data.json")
    .subscribe(data => {
      console.log(data)
      params.api.setRowData(data)
    })
  }
}
