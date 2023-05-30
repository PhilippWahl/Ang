import {Component, OnInit} from '@angular/core';
import {StandartFelgen} from "../Felgen/standart-felgen";
import {Felgen} from "../Felgen/felgen";
import {Car} from "../Car/car";
import {ReducedFelgen} from "../Felgen/reduced-felgen";
import {PremiumFelgen} from "../Felgen/premium-felgen";
import {Far} from "../Farben/enum";
import {ActivatedRoute, Router} from "@angular/router";
import {CarServiceService} from "../car-service.service";

@Component({
  selector: 'app-standart-user',
  templateUrl: './standart-user.component.html',
  styleUrls: ['./standart-user.component.css']
})


export class StandartUserComponent implements OnInit {

  url : string =""

  car: Car = {
    id: "1",
    felgen: "Standart Felgen",
    felgenPreis:100,
    farbePreis: Far.Schwarz,
    farbe: "Schwarz",
    motorleistung: 170,
    motorPreis: 0,
    addOnPreis:0,
    addOns:[],
    gesamtPreis:0

  }


  constructor(private route: ActivatedRoute,private router: Router, private carService: CarServiceService) {
    this.car=new Car()
  }

  ngOnInit(): void {
    const yourID= this.router.url.split('/').pop()
    if (yourID!='0'&&yourID!=undefined){
      var specs:string[] =yourID.split('#')

      this.car.felgen=specs[0].split("%")[0]+" Felgen"
      this.car.felgenPreis= +specs[1];
      // switch (specs[0]){
      //   case "standart":
      //     this.car.felgen = new StandartFelgen();
      //     break;
      //   case "premium":
      //     this.car.felgen = new PremiumFelgen();
      //     break;
      //   case "reduziert":
      //     this.car.felgen = new ReducedFelgen()
      //     break;
      //   default:
      //     this.car.felgen= new Felgen();
      //
      // }
      switch (specs[2]) {
        case "Grau":
          this.car.farbePreis= Far.Grau
          break;
        case "Silber":
          this.car.farbePreis= Far.Silber
          break;
        default:
          this.car.farbePreis= Far.Schwarz
          break;

      }
      this.car.farbe=specs[3];
      this.car.motorleistung= +specs[4];
      this.car.motorPreis= +specs[5];
      this.car.addOnPreis= +specs[6]
      this.car.addOns =specs[7].split(",")

      this.car.gesamtPreis=this.car.motorPreis+this.car.felgenPreis+this.car.farbePreis+this.car.addOnPreis+28000

    }
  }

  onFelgenChange(value: string) {
    this.car.gesamtPreis-=this.car.felgenPreis;

    if(value == "1") {
      this.car.felgen = "Standart Felgen";
      this.car.felgenPreis=0
    }
    else if(value=="2") {
      this.car.felgen = "Premium Felgen";
      this.car.felgenPreis=100
    }
    else if (value=="3") {
      this.car.felgen = "Silber Felgen";
      this.car.felgenPreis=50
    }
    else  this.car.felgen=   "Undefinierte Felgen";

    this.car.gesamtPreis+=this.car.felgenPreis;
  }


  onColorChange(value: string) {
    this.car.gesamtPreis-=this.car.farbePreis;
    if (value=="1") {this.car.farbe ="Schwarz"; this.car.farbePreis = Far.Schwarz}
    if (value=="2") {this.car.farbe ="Grau"; this.car.farbePreis = Far.Grau}
    if (value=="3") {this.car.farbe ="Silber"; this.car.farbePreis = Far.Silber}
    this.car.gesamtPreis+=this.car.farbePreis;
  }

  onMotorChange(value: string) {
    this.car.gesamtPreis-=this.car.motorPreis;

     if (value=="1") {
       this.car.motorleistung=170;
       this.car.motorPreis=0;
     }
    else if (value=="2") {
      this.car.motorleistung=218;
      this.car.motorPreis=5100;
    }
    else if (value=="3") {
      this.car.motorleistung=306;
      this.car.motorPreis=12750;
    }
    else if (value=="4") {
      this.car.motorleistung=340;
      this.car.motorPreis=23500;
    }
    this.car.gesamtPreis+=this.car.motorPreis;
  }

  onKlimaChange(accept: boolean) {

    const index = this.car.addOns.indexOf("Klima",0);
    if (index>-1){
      this.car.addOns.splice(index,1);
      this.car.gesamtPreis=this.car.gesamtPreis-550;
      this.car.addOnPreis-=550;
    }

    if (accept){
      this.car.gesamtPreis=this.car.gesamtPreis+550;
      this.car.addOnPreis+=550;
      this.car.addOns.push("Klima")
    }

  }

  onSoundChange(checked: boolean) {

    const index = this.car.addOns.indexOf("HiFi-Soundsystem",0);
    if (index>-1){
      this.car.addOns.splice(index,1);
      this.car.gesamtPreis=this.car.gesamtPreis-350;
      this.car.addOnPreis-=350;
    }
    if (checked) {
      this.car.gesamtPreis=this.car.gesamtPreis+350;
      this.car.addOnPreis+=350;
      this.car.addOns.push("HiFi-Soundsystem")
    }

  }

  onLenkChange(checked: boolean) {

    const index = this.car.addOns.indexOf("Sportlenkrad",0);
    if (index>-1){
      this.car.addOns.splice(index,1);
      this.car.gesamtPreis=this.car.gesamtPreis-120;
      this.car.addOnPreis-=120;
    }
    if (checked) {
      this.car.gesamtPreis=this.car.gesamtPreis+120;
      this.car.addOnPreis+=120;
      this.car.addOns.push("Sportlenkrad");
    }

  }

  onAlarmChange(checked: boolean) {

    const index = this.car.addOns.indexOf("Alarmanlage",0);
    if (index>-1){
      this.car.addOns.splice(index,1);
      this.car.gesamtPreis=this.car.gesamtPreis-500;
      this.car.addOnPreis-=500;
    }
    if (checked) {
      this.car.gesamtPreis=this.car.gesamtPreis+500;
      this.car.addOnPreis+=500;
      this.car.addOns.push("Alarmanlage")
    }

  }


  onSave() {
    if (this.car.addOns.toString()!="-") {
      const index = this.car.addOns.indexOf("-",0);
      if (index>-1)
        this.car.addOns.splice(index,1);
    }
    if (this.car.addOns.length==0) this.car.addOns.push("-")

    this.url="localhost:4200/modify-car/"+
      this.car.felgen+"#"+
      this.car.felgenPreis+"#"+
      this.car.farbePreis+"#"+
      this.car.farbe+"#"+
      this.car.motorleistung+"#"+
      (this.car.motorPreis)+"#"+
      this.car.addOnPreis+"#"+
      this.car.addOns+"#"+
      this.car.gesamtPreis


    this.carService.save(this.car).subscribe();
  }

  goToCarList(){
    this.router.navigate(['/cars']);
  }

}
