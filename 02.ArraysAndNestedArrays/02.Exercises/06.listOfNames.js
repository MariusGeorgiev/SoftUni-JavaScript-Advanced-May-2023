function listOfNames(names) {

    const sortedArray = names.sort((nameA, nameB) => {
        return nameA.localeCompare(nameB);
    })

    sortedArray.forEach((name, index) => console.log(`${index + 1}.${name}`))

}
listOfNames(["John", "Bob", "Christina", "Ema"]);
