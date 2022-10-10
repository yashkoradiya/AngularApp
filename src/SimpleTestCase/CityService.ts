export class CityService{
    cities = ['Bengaluru', 'Mumbai', 'Chennai', 'New Delhi'];

    getcities(){
        return this.cities;
    }

    addCity(city: string){
        this.cities.push(city);
    }
}