var carta1 = {
    Nome: "Messi",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frealsport101.com%2Fwp-content%2Fuploads%2F2019%2F10%2FMessi-360x546.png&f=1&nofb=1",
    atributos: {
      PAC: 93,
      SHO: 98,
      PAS: 94,
      DRI: 98,
      DEF: 22,
      PHY: 63
    }
  };
  
  var carta2 = {
    Nome: "C. Ronaldo",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fj76vylpjwtl41.png&f=1&nofb=1",
    atributos: {
      PAC: 98,
      SHO: 99,
      PAS: 94,
      DRI: 98,
      DEF: 53,
      PHY: 97
    }
  };
  
  var carta3 = {
    Nome: "Pelé",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.realsport101.com%2Fimages%2Fncavvykf%2Frealsport-production%2Fff7d550ccae615299c55c1e5063ebabafba38374-450x650.png%3Fw%3D346%26h%3D500%26auto%3Dformat&f=1&nofb=1",
    atributos: {
      PAC: 97,
      SHO: 98,
      PAS: 95,
      DRI: 98,
      DEF: 61,
      PHY: 78
    }
  };
  
  var carta4 = {
    Nome: "Beckenbauer",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ibb.co%2FDGrzSvn%2FBECKENBAUER.png&f=1&nofb=1",
    atributos: {
      PAC: 87,
      SHO: 85,
      PAS: 91,
      DRI: 86,
      DEF: 97,
      PHY: 86
    }
  };
  
  var carta5 = {
    Nome: "Maldini",
    imagem:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffifadataba.com%2Fimages%2Fcards%2F16.png&f=1&nofb=1",
    atributos: {
      PAC: 82,
      SHO: 56,
      PAS: 74,
      DRI: 68,
      DEF: 95,
      PHY: 81
    }
  };
  
  var cartas = [carta1, carta2, carta3, carta4, carta5];
  var cartaJogador;
  var cartaMaquina;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(numeroCartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 5);
  
    while (numeroCartaMaquina == numeroCartaJogador) {
      var numeroCartaJogador = parseInt(Math.random() * 5);
    }
    console.log(numeroCartaJogador);
    cartaJogador = cartas[numeroCartaJogador];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    var imagemCarta = document.getElementById("imagemCarta");
    var imagem = cartaJogador.imagem;
    imagemCarta.innerHTML = "<img src='" + imagem + "' name='imagem'>";
  
    // inserir linha de codigo para imagem da carta sorteada para o jogador aqui.
  
    exibirOpcoes();
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributos' value='" +
        atributo +
        "' checked>" +
        atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemItemSelecionado() {
    var radioSelecionado = document.getElementsByName("atributos");
  
    for (var i = 0; i < radioSelecionado.length; i++) {
      if (radioSelecionado[i].checked == true) {
        return radioSelecionado[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemItemSelecionado();
  
    var elementoResultado = document.getElementById("resultado");
  
    var valorAtributoJogador = cartaJogador.atributos[atributoSelecionado];
  
    var valorAtributoMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorAtributoJogador > valorAtributoMaquina) {
      elementoResultado.innerHTML = "Parabéns! Você venceu!";
    } else if (valorAtributoMaquina > valorAtributoJogador) {
      elementoResultado.innerHTML = "Você perdeu.";
    } else {
      elementoResultado.innerHTML =
        "Os valores do atributo selecionado são iguais. O jogo empatou.";
    }
  }
  