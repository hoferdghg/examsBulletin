console.log("SVC 1 DE 10")
console.log("")
console.log("BOLETIM")
console.log("")

/* VARIÁVEIS */

alunos = ["João", "Maria", "Paulo", "Rosa", "Vânia", "Catarina"]
prova1 = [8, 4.5, 10, 9, 10, -1]
prova2 = [6, 3.5, 9.5, 8.5, 20, -2]

/* FUNÇÕES */

function calcularMedia(a, b) {

  return (a + b) / 2;

}

/* EXECUÇÃO DO CÓDIGO */



for (i = 0; i < alunos.length; i++) {

  console.log("Nome do aluno: ", alunos[i]);
  console.log("Prova parcial 1: ", prova1[i]);
  console.log("Prova parcial 2: ", prova2[i]);
  console.log("Média: ", calcularMedia(prova1[i], prova2[i]));

  let m = calcularMedia(prova1[i], prova2[i])

  if (m > 10)
    conceito = ("ERRO!")
  else if (m > 8)
    conceito = ("Bom")
  else if (m > 5)
    conceito = ("Regular")
  else if (m < 0)
    conceito = ("ERRO!")
  else
    conceito = ("Ruim")


  console.log("Conceito: ", conceito)
  switch (conceito) {

    case 'Bom':
      console.log("Parabéns, continue assim.");
      break;

    case 'Regular':
      console.log("Falta pouco, tenha foco.");
      break;

    case 'Ruim':
      console.log("Precisa estudar mais.");
      break;

    case 'ERRO!':
      console.log("Revise o lançamento das notas.");
      break;
  }

  console.log("")
  console.log("")

}