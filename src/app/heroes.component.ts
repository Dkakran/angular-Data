import { Component } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import { OnInit } from '@angular/core';
import { RouterModule }   from '@angular/router';
@Component({
  selector: 'my-heroes',
  template: `
  <!--List of Heroes -->
  <U><h2 style = 'color:rgb(54, 198, 21)' align = 'center'>EMPLOYEE NAME</h2></U>

<!-- add emp -->
<div>
<label>Emp name:</label> <input #heroName /><br><br>
<label>DOB: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type = 'date' #dob/><br>
<tr><td>
<button (click)="add(heroName.value,dob.value); heroName.value='';dob.value=''">
  Add
</button>
</div>
<!-- add emp complete -->

<div align = 'center'>
  <input type = 'button' value = 'Sort in ASC' (click) = 'ascSort()'/>
  <input type = 'button' value = 'Sort in DSC' (click) = 'dscSort()'/> 
  </div>
  <br><hr><hr>
  <input type="text" placeholder="Search Emp!!" [(ngModel)]="curfname"/><br><hr><hr>
   <table border = '1' width="100%">
   <tr>
   <th (click)="Sorty('id')">ID</th> <th (click)="Sorty('name')">NAME</th> <th (click)="Sorty('dob')">DOB</th> <th>AGE</th> <th>ACTION</th></tr>
   <tr *ngFor="let item of tempheroes | srchpipe: curfname |sortpipe : {prop: col, direction:dir}; let i=index">
    <td>{{item.id}}</td>
    <td [routerLink]="['/detail', item.id]"  class="col-1-4"[class.selected]="item === selectedHero" (click)="onSelect(item)"><a>{{item.name}}</a></td>
    <td>{{item.dob | date: 'dd/MM/yyyy'}}</td>
    <td>{{(date.getFullYear()) - (item.dob | date: 'yyyy')}} Year</td>
    
    <td (click)="delete(item,i); $event.stopPropagation()"><a>Remove</a></td>
   
     </tr>
     </table>


  <!--<hero-detail [hero1]="selectedHero"></hero-detail>-->`,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
  export class HeroesComponent implements OnInit{
  title = 'GREATWITS EMPLOYEEE INFORMATION';
  heroname = 'Divyansh';

  date = new Date();
  
   
  heroes: Hero[];
  tempheroes:Hero[]=[];


  selectedHero: Hero;
  onSelect(hero:Hero): void 
  {
   this.selectedHero = hero;
  }
  constructor(private heroService: HeroService,) 
  { 
  }
  
  // Fetching Data From Service
 /* getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }  */
   getHeroes(): void 
   {
     this.heroService.getHeroesSlowly().then(hero => this.heroes = hero);
     this.heroService.getHeroesSlowly().then(t => {this.tempheroes=t});
   }

  ngOnInit(): void {
    this.getHeroes(); 
  }

  // sorting
  ascSort()
  {
    this.heroes.sort(function compare(a,b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    });
  }
  dscSort()
  {
    this.heroes.sort(function compare(a,b) {
      if (a.name < b.name)
        return 1;
      if (a.name > b.name)
        return -1;
      return 0;
    });
  }

  //add Emp
  add(name: string , dob:any): void {
    console.log(dob);
    name = name.trim();
    if (!name) { return; }
    console.log(name,dob,"=======");
    this.heroService.create(name , dob)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
      console.log(this.heroes);
      this.tempheroes=this.heroes;
  }

//delete emp

delete(hero: Hero ,i): void {
  if(this.heroes.length>1 && !((this.heroes[i].name==='Mukesh') ||(this.heroes[i].name==='Divyansh')))
    {
      this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero)
         {
           this.selectedHero = null; 
          }
      });}
      else
      {
        alert("You Cant Delete ADMIN");
      }
}
  col="";
  flag=0;
  dir=0;
  curfname="";
  Sorty(s)
  {
    this.col=s;
    (this.flag%2==0)?(this.dir=+1):(this.dir=-1);
    this.flag++;
  }
}
