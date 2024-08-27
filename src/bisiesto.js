function comprobar_bisiesto(numero){
    if(numero % 400 === 0)
    {
        return"bisiesto";
    }else{
        return"no bisiesto"
    }
}
export default comprobar_bisiesto;

