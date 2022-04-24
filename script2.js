// 1º sincrono -> 2º callback promesas -> 3º callback general


console.log(`test start`);
setTimeout(() =>{
console.log(`Timer de 0 segundos`);
},0);

Promise.resolve('resolve primse').then(res => console.log(res));

Promise.resolve('resolve primse 2').then(res => {
    for(let i = 0; i < 1000000; i++){}
    console.log(res)
});

console.log(`test end`);

// la respuesta a la promesa se vera tras 5 segundos
const promesa = new Promise ((resolve,reject) =>
{  
    console.log(`promesa iniciada`);
    setTimeout(() =>{
Math.random() > 0.5 ? resolve('ganaste') : reject (new Error ('perdiste'));
},5000);

});

promesa
.then(res => console.log(res))
.catch(err => console.log(err))


// PROMISIFY (Para evitar Callback Hell)
// Mejor mantenimiento del codigo y mas legible

// sin promisify:

setTimeout(() => {
    console.log(`Ha pasado un segundo`);
    setTimeout(() => {
        console.log(`han paado 2 segundos mas`);
        setTimeout(() => {
         console.log(`han paado 3 segundos mas`);
            setTimeout(() => {
             console.log(`han paado 4 segundos mas`);
             }, 4000);
         }, 3000);
    }, 2000);
}, 1000);

// con promisify 

const wait = (segundos)=>{
    return Promise(resolve =>{
        setTimeout(() => {
            resolve(` Han pasado ${segundos} segundos`)
        }, segundos*1000);
    })
}
wait(1)
.then((res) => {
    console.log(res);
    return wait(2);
})
.then((res) => {
    console.log(res);
    return wait(3);
})
.then((res) => {
    console.log(res);
    return wait(4);
})
.then((res) => {
    console.log(res);

})