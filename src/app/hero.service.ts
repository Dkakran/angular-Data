import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import { hero } from './mock-heroes';
import { Http ,Headers }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class HeroService {
   /* getHeroes():Hero[]{
        return hero;
    }   */
    private url = 'api/hero';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(
      private http : Http
    ){}

    getHeroes(): Promise<Hero[]> {
      //  return Promise.resolve(hero);
      return this.http.get(this.url).toPromise().then(response => response.json().data as Hero[]);
      }
       
      

     /* getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                   .then(heroes => heroes.find(hero => hero.id === id));
      } */

      getHero(id: number): Promise<Hero> {
        const url = `${this.url}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(respo => respo.json().data as Hero)
      }

       update(hero: Hero): Promise<Hero> {
        const url = `${this.url}/${hero.id}`;
        return this.http
          .put(url, JSON.stringify(hero), {headers: this.headers})
          .toPromise()
          .then(() => hero)
      }

      getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
        });
      }
      
      create(name: string , dob:any): Promise<Hero> {
        return this.http
          .post(this.url, JSON.stringify({name: name,dob:dob}), {headers: this.headers})
          .toPromise()
          .then(res => res.json().data as Hero)
      }

      delete(id: number): Promise<void> {
        const url = `${this.url}/${id}`;
        return this.http.delete(url, {headers: this.headers})
          .toPromise()
          .then(() => null)
      }
}