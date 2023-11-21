class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle (wineName, wineType, price) {

        if(this.space < 1) {
            throw new Error("Not enough space in the cellar.")
        } 

     this.wines.push({wineName, wineType, price, paid: false})

     this.space -= 1
            
    return `You reserved a bottle of ${wineName} ${wineType} wine.`
        
    }

    payWineBottle(wineName, price) {

        let wine = this.wines.find(w => w.wineName == wineName);

        if(!wine) {
            throw new Error(`${wineName} is not in the cellar.`)
        }

        if(wine.paid) {
            throw new Error(`${wineName} has already been paid.`)
        } else {
            wine.paid = true;
            this.bill += Number(price);
            return `You bought a ${wineName} for a ${Number(price)}$.`
        }

    }

    openBottle(wineName) {

        let wine = this.wines.find(w => w.wineName == wineName);

        if(!wine) {
            throw new Error("The wine, you're looking for, is not found.")
        }
        if(!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        // remove wine from the array
        this.wines = this.wines.filter(w => w.wineName !== wineName);

        return `You drank a bottle of ${wineName}.`
    }


    cellarRevision(wineType) {

        let result = [];
        let wine = this.wines.find(w => w.wineType == wineType);

        this.wines
            .sort((a, b) => a.wineName.localeCompare(b.wineName))
            .map(w => result.push(`${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`));

        if(!wineType) {
            return `You have space for ${this.space} bottles more.\nYou paid ${this.bill}$ for the wine.\n${result.join("\n")}` 
        } 
           
        if(!wine) {
            throw new Error(`There is no ${wineType} in the cellar.`)

        } else {
            return `${result}`
        }

            
        }
    }




const selection = new WineSelection(2)

console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose',

144));

console.log(selection.cellarRevision('Rose'));
