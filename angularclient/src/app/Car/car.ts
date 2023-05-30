import {Felgen} from "../Felgen/felgen";
import {StandartFelgen} from "../Felgen/standart-felgen";
import {Farbe} from "../Farben/farbe";
import {Far} from "../Farben/enum";

export class Car {

  id: string |undefined;
  // felgen : Felgen = new StandartFelgen()
  felgen: string = "Standart Felgen"
  felgenPreis: number=0
  farbePreis : Far = Far.Schwarz
  farbe: string = "Schwarz"
  motorleistung : number = 170
  motorPreis : number = this.felgenPreis+this.farbePreis.valueOf()
  addOnPreis: number =0
  addOns: string[]=[]
  gesamtPreis:number=28000
  //test mor
}
