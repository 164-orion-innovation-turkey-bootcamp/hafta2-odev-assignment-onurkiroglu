let recipeList = ["marulTursu", "paketSos", "sogan", "kofte", "tavuk", "domates", "ekmek", "patates", "cola"];

let order = () => {
    setTimeout(() => {

    }, 1000);
};

let stockControl = () => {
    setTimeout(() => {
        for(let i in recipeList) {
            if(recipeList.find(i)) {
                console.log('Malzeme bulunmuyor')
            }
        }
    }, 3000);
};