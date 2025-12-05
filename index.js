  let imagens = [
    'imagens/banner1.PNG',
    'imagens/banner2.PNG',
    'imagens/banner3.PNG',
  ]

  let indiceAtualListaImagem = 0

  function exibirImagem() {
    let imagemCarrossel = document
      .getElementById('img-carrossel')
    imagemCarrossel.src = imagens[indiceAtualListaImagem]
  }

  setInterval(function () {
    exibirImagem()
    indiceAtualListaImagem++

    if (indiceAtualListaImagem > 2) {
      indiceAtualListaImagem = 0
    }

  }, 4000);

  exibirImagem()
  indiceAtualListaImagem++ 