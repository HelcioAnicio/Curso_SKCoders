verificarResposta = {
    questao1: "opcao3-1",
    questao2: "opcao1-2",
    questao3: "opcao3-3",
    questao4: "opcao2-4",
    questao5: "opcao1-5",
    questao6: "opcao4-6",
    questao7: "opcao4-7",
    questao8: "opcao1-8",
    questao9: "opcao2-9",
    questao10: "opcao1-10",
  };
  
  const checks = document.querySelectorAll("input");
  
  checks.forEach((check) => {
    check.addEventListener("click", () => {
      console.log(check.checked);
      if (check.id === verificarResposta[check.name]) {
        check.nextSibling.style.backgroundColor = "green";
      } else {
        check.nextSibling.style.backgroundColor = "red";
        setTimeout(() => {
            check.nextSibling.style.backgroundColor = "rgba(255, 255, 255, 0.822)";
            check.nextSibling.style.color = "black";
          }, 1000);
      }
    });
  });