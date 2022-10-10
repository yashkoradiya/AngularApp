import { CityService } from "./CityService";

fdescribe('cityService',()=>{

    let cityService: CityService;



    beforeEach(()=>{

        cityService =new CityService();

    });



    afterEach(()=>{

        cityService=new CityService();

    });



   

    it('should check if specified cities are present in the array ', ()=>{

        const cities = cityService.getcities();

        expect(cities).toContain('Bengaluru');

        expect(cities).toContain('Chennai');

       

    });



    it('should check if new city is added to the array ', ()=>{



        const newCity='Pune';

        const newCity1='abc';



        cityService.addCity(newCity);

        expect(cityService.cities).toContain(newCity);

    });




});
