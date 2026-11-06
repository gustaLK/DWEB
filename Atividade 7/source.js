function escolha(botao){
    let maquina= Math.random();
    if (maquina<=0.33)
        maquina=1;
    else if (maquina>0.33 && maquina<=0.66)
        maquina=2;
    else
    maquina=3;

    let jogador = botao;

    let escolhamq
    if(maquina==1){
        escolhamq="Pedra"
        document.getElementById("maquina").textContent = "A maquina escolheu " + escolhamq;
    }
    else if(maquina==2){
        escolhamq="Papel"
        document.getElementById("maquina").textContent = "A maquina escolheu " + escolhamq;
    }
    else{
        escolhamq="Tesoura"
        document.getElementById("maquina").textContent = "A maquina escolheu " + escolhamq;
    }


    
    if(jogador == maquina )
        document.getElementById("resultado").textContent = "Empate";

    else if ((jogador==1 && maquina==3) ||
            (jogador==2 && maquina==1) ||
            (jogador==3 && maquina==2))
        document.getElementById("resultado").textContent = "Vitoria";
    else
        document.getElementById("resultado").textContent = "Derrota";
}