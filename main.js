
// Malzeme listesini tanımladık
let stock={lettuce:5,
    pickle:5,
    packetSauce:5,
    onion:5,
    tomato:51,
    bread:5,
    potato:5,
    cola:5,
    chicken:5,
    burger:5}


// Tavuk / Köfte seçimini yaptırdık
function meatChoice(){
    let meat=prompt("1.Tavuk 2.Köfte")
    if(meat==1){
    stock.chicken--
    console.log("Siparişiniz hazırlanıyor")
    }

    else if(meat==2){
    stock.burger--
    cook=prompt("Pişme derecesi seçiniz: \n 1.Az Pişmiş\n 2.Orta Pişmiş\n3.Çok Pişmiş")
    }
    else if(meat!==2 && meat!==1){
    console.log('Hatalı giriş yaptınız ')
    }
}

// cook=0 referans değer alındı. 1,2,3 seçilmezse 0 seçilmiş oluyor.
let cook=0

// Sipariş alındıktan sonra gereken beklemeler oluşturuldu.
async function cookingProcess(){
   if(cook==0){
   await  order(()=>{console.log("Tavuk burger siparişiniz hazır.")},3000)
   }
   else if(cook==1){
    await order(()=>console.log("Az pişmiş burgeriniz hazır."),2000)
   }
   else if(cook==2){
    await order(()=>console.log("Orta pişmiş burgeriniz hazır."),3000)
   }
   else if(cook==3){
    await order(()=>console.log("Çok pişmiş burgeriniz hazır."),4000)
   }
}

// Await için gereken promise yapısını kurduk.
let order=(work,time)=>{
    return new Promise((resolve)=>{
       return setTimeout(()=>{
         resolve(work())
        },time)
    }
    )
}


let stockCheck=()=>{
    return new Promise((resolve,reject)=>{
        if(Object.values(stock).every((element) => element > 0)){
            setTimeout(()=>{
                resolve(console.log("2.stok kontrolü yapıldı."))
            },3000)
        }
        else{
            reject(console.log("Stokta yeterli ürün yok"))
        }
    })	
}



async function tasks(){
    await order(()=>{console.log("1.sipariş alındı.")},1000)
    await stockCheck() 
    await order(meatChoice,1000)
    order(()=>{stock.potato--,console.log("4.patatesler hazır.")},5000)
    order(()=>{stock.cola--,console.log("5.içecekler hazır.")},2000)
    await cookingProcess()
    await order(()=>{stock.bread--, console.log("3.1 hamburger hazır.")},2000)
    await order(()=>{stock.packetSauce--, console.log("6.soslar ve ürünler servis tepsisine koyuldu.")},1000)
    order(()=>{console.log("7.müşteriye servis edildi.")},1000)
}
tasks()

