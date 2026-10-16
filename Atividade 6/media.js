let nome, N1, N2, N3, N4, Media

nome=prompt("Qual e o seu nome?");
N1= prompt("Nota1: ");
N2= prompt("Nota2: ");
N3= prompt("Nota3: ");
N4= prompt("Nota4: ");

Media=(parseFloat(N1)+parseFloat(N2)+parseFloat(N3)+parseFloat(N4))/4;
alert("Media: "+Media);