const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let caixaLabirinto = document.createElement('div')
caixaLabirinto.setAttribute('class', 'caixaLabirintoDiv')
let divJogo = document.querySelector('#jogo')
divJogo.appendChild(caixaLabirinto)

let personagem = document.createElement('div')
personagem.classList.add('jogador')



for (let i = 0; i < map.length; i++) {
    let linha = document.createElement('div')
    linha.classList.add('linhaDiv')

    caixaLabirinto.appendChild(linha)
    for (let j = 0; j < map[i].length; j++) {
        let elemento = document.createElement('div')
        linha.appendChild(elemento)

        if (map[i][j] === 'W') {
            let parede = document.createElement('div')
            parede.classList.add('paredeClass')
            elemento.appendChild(parede)

        } else if (map[i][j] === ' ') {
            let caminho = document.createElement('div')
            caminho.classList.add('caminhoClass')
            elemento.appendChild(caminho)

        } else if (map[i][j] === 'S') {
            let chao = document.createElement('div')
            chao.classList.add('caminhoClass')
            elemento.appendChild(chao)
            chao.appendChild(personagem)

        } else if (map[i][j] === 'F') {
            let chegada = document.createElement('div')
            chegada.classList.add('caminhoClass')
            elemento.appendChild(chegada)
        }
    }
}

let posicao = [9, 0]
let jogadorTop = 270
let jogadorLeft = 0

document.addEventListener("keydown", (event) => {

    const keyName = event.key;

    // document.querySelector(".jogador").style.transitionDuration = "0.5s";
    if (keyName === 'ArrowDown') {

        if (map[posicao[0] + 1][posicao[1]] === ' ') {
            jogadorTop += 30
            posicao[0] += 1
            document.querySelector(".jogador").style.top = jogadorTop + "px";
        }

    } else if (keyName === 'ArrowUp') {
        if (map[posicao[0] - 1][posicao[1]] === ' ') {
            jogadorTop -= 30
            posicao[0] -= 1
            document.querySelector(".jogador").style.top = jogadorTop + "px";
        }

    } else if (keyName === 'ArrowLeft') {
        if (map[posicao[0]][posicao[1] - 1] === ' ' || map[posicao[0]][posicao[1] - 1] === 'S') {
            jogadorLeft -= 30
            posicao[1] -= 1
            document.querySelector(".jogador").style.left = jogadorLeft + "px";
        }

    } else if (keyName === 'ArrowRight') {
        if (map[posicao[0]][posicao[1] + 1] === ' ') {
            jogadorLeft += 30
            posicao[1] += 1
            document.querySelector(".jogador").style.left = jogadorLeft + "px";
        } else if (map[posicao[0]][posicao[1] + 1] === 'F') {
            jogadorLeft += 30
            posicao[1] += 1
            document.querySelector(".jogador").style.left = jogadorLeft + "px";
            vitoria()
            posicao = [9, 0]
            jogadorTop = 270
            jogadorLeft = 0
            setTimeout(function () {
                window.location.reload()
            }, 2000);
        }
    }
})

function vitoria() {

    let vitoriaApp = document.createElement('p')
    vitoriaApp.setAttribute('class', 'vitoriaP')
    vitoriaApp.innerText = 'Parabéns, você ganhou! :) \n  sua pagina vai ser recarregada para um novo jogo!'
    document.body.appendChild(vitoriaApp)
}