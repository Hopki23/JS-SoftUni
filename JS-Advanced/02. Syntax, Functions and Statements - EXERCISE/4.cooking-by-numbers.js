function solve(speed, area) {
    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;

    let status = "";
    let result = 0;
    let overTheLimit = 0;

    if (area == 'motorway') {
    } else if (area == 'interstate') {

    } else if (area == 'city') {
        result = city - speed;

        if (result >= 0) {
            console.log(`Driving ${speed} km/h in a ${city} zone`);   
        }else{
           overTheLimit = speed - city;

           if (overTheLimit >= 20) {
             status = 'speeding';

             console.log(`The speed is ${overTheLimit} km/h faster than the allowed speed of ${city} - ${status}`);
           }
        }

    } else if (area == 'residential') {

    }

   
}

solve(70, 'city');
solve(21, 'residential');
solve(200, 'motorway');