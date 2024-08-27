function comprobar_bisiesto(numero){
    if(numero % 4 ===0){
        if(numero % 100 != 0){
            return "bisiesto";
        }
    }
    if(numero % 400 === 0)
    {
        return"bisiesto";
    }else{
        if(numero % 100 === 0){
            return"no bisiesto";
        }
        return"no bisiesto";
    }
}
export default comprobar_bisiesto;

