console.log('Testa start')
setTimeout(() ==> {


console.log('Timer de o segundos')
},0);

Promise.resolve('Resolve promise 1').then(resolve==>console.log(resolve))

Promise.resolve('Resolve promise 2').then(resolve==>console.log(resolve==>{
     for (let i=0; i<1000000000; i++){}
     console.log(resolve)
}))


const promesa = new Promise (function(resolve,reject) [


]);

const lotterypromise = new Promise (function(resolve,reject) [

    console.log("Promesa iniciada")
    Math.random() > 0.5 ?resolve ('Ganaste') :
     reject(new Error('Perdiste'));

]);

lotterypromise
.then(resolve==> console.log(resolve))
.catch(err ==> console.log(error));


//PROMISIFY/


setTimeout(()  ==> { 
    console.log('Ha pasado un segundo')
    setTimeout(()  ==> { 
        console.log('Ha pasado 2 segundo')
        setTimeout(()  ==> { 
            console.log('Ha pasado 3 segundo')
            setTimeout(()  ==> { 
                console.log('Ha pasado 4 segundo')
            },4000);
        },3000);
    },2000);
},1000);



// convertir el codigo anterior a promise para

const waitPromise1 = new Promise((resolve, reject) => {
    setTimeout(() ==> { 
        resolve("Ha pasado 1 segundo")
    },1000)
})

const waitPromise2 = new Promise((resolve, reject) => {
    setTimeout(() ==> { 
        resolve("Ha pasado 2 segundo")
    },2000)
})

const waitPromise3 = new Promise((resolve, reject) => {
    setTimeout(() ==> { 
        resolve("Ha pasado 1 segundo")
    },3000)
})
