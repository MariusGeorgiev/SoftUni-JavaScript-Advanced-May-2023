function circleArea(argument) {
    
    let result = 0

    if(typeof argument === 'number') {
        result = (argument ** 2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof argument}.`);
    }
}
circleArea(5)
circleArea('name')
