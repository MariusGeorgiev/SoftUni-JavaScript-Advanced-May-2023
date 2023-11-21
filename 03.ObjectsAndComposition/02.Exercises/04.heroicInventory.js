function heroicInventory(input) {

    const result = [];

    input.forEach((str) => {

        const obj = {};
        const heroDataArr = str.split(" / ");
        obj.name = heroDataArr[0];
        obj.level = Number(heroDataArr[1]);

        const items = heroDataArr[2]
        obj.items = items ? items.split(", ") : [];

        result.push(obj);
    });

   // console.table(result);
  //console.table(JSON.stringify(result));
    return JSON.stringify(result);

}
heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

console.log("---------");
heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
