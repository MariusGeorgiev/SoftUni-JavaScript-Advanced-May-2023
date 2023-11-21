function sortAnArrayBy2Criteria(arr) {
    const sortedArr = arr.sort((a,b) => {
        const firstCriteria = a.length - b.length;
        const secondCriteria =  a.localeCompare(b);
        return firstCriteria || secondCriteria;
    })

    console.log(sortedArr.join("\n"));

}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
console.log("-----------------");
sortAnArrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("-----------------");
sortAnArrayBy2Criteria(["test", "Deny", "omen", "Default"]);
