import { Component } from '@angular/core';
import  {Hero} from '../model/hero';
import  {HEROES} from '../mocks/dataMock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
export class AppComponent {
  title = 'Tour of heros tutorial :v xd';
  selectedHero : Hero;
  heroes = HEROES;


  onSelect(hero: Hero): void {
    if(this.selectedHero && this.selectedHero.id == hero.id){
      this.selectedHero = null;
    }else{
      this.selectedHero = hero;
    }
  }

}
