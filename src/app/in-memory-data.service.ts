import { InMemoryDbService } from 'angular-in-memory-web-api';
import{Hero} from './hero'
export class InMemoryDataService implements InMemoryDbService {
createDb(){
     const hero:Hero[] = [
        {id:1  , name : 'Divyansh', dob : new Date('01/01/1994')},
        {id:2  , name : 'Mukesh'  , dob : new Date('01/02/1992')},
        {id:3  , name : 'Neeraj'  , dob : new Date('01/03/1981')},
        {id:4  , name : 'Pankaj'  , dob : new Date('01/04/1990')},
        {id:5  , name : 'Manish'  , dob : new Date('01/05/1994')},
        {id:6  , name : 'Rahul'   , dob : new Date('01/06/2010')},
        {id:7  , name : 'Sunny'   , dob : new Date('01/07/1991')},
        {id:8  , name : 'Sumit'   , dob : new Date('01/08/1990')},
        {id:9  , name : 'Rohit'   , dob : new Date('01/09/1991')},
        {id:10 , name : 'Gaurav'  , dob : new Date('01/10/2016')},
       ];
       return {hero};
}
}