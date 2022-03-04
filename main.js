
// köfte mi tavuk mu?
// burgerde neler olsun (domates, turşu, soğan)
// ekmekle birleştir
// ek tercihler (sos, patates, kola)


let stock =  {               // stock is defined
    meat: 5,
    chicken: 5,
    patatoes: 5,
    coke: 5,
    pickles: 5,
    onion: 5,
    lettuce: 5,
    tomatoes: 5,
    bread: 5,
    packetSauce: 5,
};

let meatChoice;
let cookDegree; 
let newBurger;

let burgerIngredients = ["tomatoes", "pickles", "lettuce", "onion"];

let orderTime = (time, work) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(work());
        }, time);
    });
};



async function orderProcess() {
    try {
        // Sipariş al
        await orderTime(1000, (() => console.log('Welcome, how do you like your burger? tomatoes/ pickles/ lettuce/ onion')))

        // Stok kontrolü
        await orderTime(3000, (() => {
            for (let x in stock) {
                if (stock[x] === 0) {  
                    console.log('No enough ingredient, sorry')
                }
            }
            console.log('Stock checked')
        }))
        cookLevel();

    } catch(err) {
        
    } finally {
        
    }
} 


async function cookLevel() {
    try {
        //Köfte mi Tavuk mu?
        await orderTime(1000, (() => console.log("Meat or Chicken?" )))
        if (meatChoice === "meat" && cookDegree === "rare") {
            order(2000, () => {                          
                console.log("Rare burger is on the way ");
            })
        }
        if (meatChoice === "meat" && cookDegree === "medium") {
            order(3000, () => {                          
                console.log("Rare burger is on the way ");
            })
        }
        if (meatChoice === "meat" && cookDegree === "well") {
            order(4000, () => {                          
                console.log("Rare burger is on the way");
            })
        }
        if (meatChoice === "chicken") {
            order(3000, () => {                          
                console.log("Chicken burger is on the way");
            })
        }

    } catch(err) {
        
    } finally {
        
    }
}

orderProcess();


