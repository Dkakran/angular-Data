import { Component ,Input ,OnInit} from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
@Component({
    selector: 'hero-detail',
    templateUrl : './hero-detail.component.html',
    styleUrls:['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
   // @Input() hero1 : Hero;
   ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }
 
  //going back to previous page
  goBack(): void {
    this.location.back();
  }

  hero:Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
      ) {}

      save(): void {
        this.heroService.update(this.hero)
          .then(() => this.goBack());
      }
}