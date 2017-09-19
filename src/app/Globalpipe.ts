import {Pipe, PipeTransform} from '@angular/core';
import {Hero} from './hero';

@Pipe({name: 'sortpipe'})
export class Pipe1 implements PipeTransform
{
    transform(Arr=Array<Hero>(), val:any): Hero[]
    {
        
        return Arr.sort (function(a,b)
    {
        //console.log(a[val]);
        //console.log(b[val]);
        if(a[val.prop]>b[val.prop])
            {return val.direction;}
        else if(a[val.prop]<b[val.prop])
            {
                return -1*val.direction;
            }
            else
                {return 0;}
    } );
    }
}

@Pipe({name: 'srchpipe'})
export class Pipe2 implements PipeTransform{
    transform(Carr=Array<Hero>(), val:string):Hero[]
    {
        console.log(val,"=====",Carr);
        return Carr.filter( t=> t.name.toLowerCase().match(val.toLowerCase()));
    }
}
