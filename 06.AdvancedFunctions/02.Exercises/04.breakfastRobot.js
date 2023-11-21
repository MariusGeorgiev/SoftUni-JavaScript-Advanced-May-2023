function getManager() {
  const SUCCESS_MSG = "Success";

  // dictionaries
  const elements = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0,
  };

  const receipts = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  // error handling
  const getError = (element) => `Error: not enough ${element} in stock`;

  const commands = {
    restock: (element, quantity) => {
      //
      elements[element] += Number(quantity);
      return SUCCESS_MSG;
    },
    prepare: (recipe, quantity) => {
      let missingElementEntry;
      let errorMsg;

      for (let i = 0; i < quantity; i++) {
        //                      [0, 1] = [key, value]
        missingElementEntry = Object.entries(receipts[recipe]).find(
          (x) => elements[x[0]] < Number(x[1])
        );

        if(missingElementEntry) {
        errorMsg = getError(missingElementEntry[0])
        break;
        }

         Object.entries(receipts[recipe]).forEach(x => {
             elements[x[0]] -= Number(x[1]);
         });
        
      }
      return errorMsg ? errorMsg : SUCCESS_MSG;
    },
    report: () => {
        return Object.keys(elements)
        .reduce((a,b) => {
          a.push(`${b}=${elements[b]}`);
            return a;
        }, [])
        .join(" ");
    },
  };

  return function (cmd) {
    const cmdTokens = cmd.split(" ");

    return cmdTokens.length === 1
     ? commands[cmdTokens[0]]()
     : commands[cmdTokens[0]](cmdTokens[1], cmdTokens[2]);
  };
}

let manager = getManager();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager('report'));
