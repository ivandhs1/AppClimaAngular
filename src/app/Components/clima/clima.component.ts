import { Component, OnInit } from '@angular/core';
import { TraductionService } from '../../Services/traduction.service'
import { ClimaService } from '../../Services/clima.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  pais!:string;
  RES:any;

  info:any={
    grados:"",
    pais:"",
    hora:"",
    fecha:"",
    imgClima:"",
    nameClima:""
  }

  is_day!:boolean;

  constructor(private traduction:TraductionService, private clima:ClimaService) { }

  ngOnInit(): void {
    /* alert("Por favor la busqueda solo se realizara en ingles, ya que aun no contamos con traduccion. Gracias!!") */
    this.search("colombia")
  }

  search(country: any){
    let hour:string;
    let date:string;

    this.clima.getCountry(country).subscribe((dates:any) => {
      console.log(dates);
      hour="";
      date="";

      this.is_day= dates.current.is_day == 1 ? true : false;

      this.info.grados=dates.current.temp_c;
      this.info.pais=dates.location.country;
      hour=dates.location.localtime;
      hour=hour.substring(10);
      this.info.hora=hour;

      date=dates.location.localtime;
      date=date.substring(0,10) 
      this.info.fecha=date;
      this.info.imgClima=dates.current.condition.icon;
      this.info.nameClima=dates.current.condition.text;

      
    })
    
    
    
  }

}
