function dayOfWeek(input) {

    let dayInNum = 0

    switch(input) {
        case "Monday": dayInNum = 1; break;
        case "Tuesday": dayInNum = 2; break;
        case "Wednesday": dayInNum = 3; break;
        case "Thursday": dayInNum = 4; break;
        case "Friday": dayInNum = 5; break;
        case "Saturday": dayInNum = 6; break;
        case "Sunday": dayInNum = 7; break;   
    }

    if (dayInNum > 0 && dayInNum < 8) {
        console.log(dayInNum);
    } else {
        console.log("error");
    }

}
dayOfWeek('Monday')
dayOfWeek('Friday')
dayOfWeek('Invalid')
