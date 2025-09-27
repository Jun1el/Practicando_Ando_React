const myPromise = new Promise<number>((resolve,reject) => {
    setTimeout(() => {
        //resolve(100);
        reject('Se produjo un error');
    }, 2000);
    }
);
myPromise.then( (valor)=>{
    console.log(valor);
} ).catch( (err)=>{
    console.warn(err);
} ).finally( ()=>{console.log('Termino la promesa');} );