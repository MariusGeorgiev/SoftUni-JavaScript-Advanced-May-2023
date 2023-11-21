function squareOfStars(input) {

    let star = []

    for(let i = 0; i < input; i++) {
        if(i === input - 1) {
            star += "*"
        } else {
            star += "* "
        }
    }
    for(let i = 0; i < input; i++) {
        console.log(star);
    }

}
squareOfStars(3)
squareOfStars(5)
squareOfStars(7)