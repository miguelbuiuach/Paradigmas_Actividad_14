const ComprarCasco = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Comprando casco");
            //reject("error");
        }, 1000);
    })
}

const ComprarGuantes = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Comprando guantes");
            //reject("error");
        }, 2000);
    })
}

const IrPaseo = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Listo para pasear");
            //reject("error");
        }, 8000);
    })
}

const miFetchApi = async () => {
    const casco = await ComprarCasco();
    const guantes = await ComprarGuantes();
    const pasear = await IrPaseo();
    return [casco,guantes,pasear]
}

miFetchApi()
    .then(informacion => {
        console.log(informacion);
    })

