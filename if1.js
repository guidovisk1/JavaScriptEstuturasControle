function soNotaBoa(nota){
    if(nota >= 7){
        console.log(`Voce passou com a nota ${nota}`);
    }
}
soNotaBoa(6)

function seForVerdade(valor){
    if(valor){
        console.log(`É verdade.... ${valor}`);
    }
}

seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);
seForVerdade(-1);
seForVerdade(' ');
seForVerdade('?');
seForVerdade([]);
seForVerdade([1,3])
