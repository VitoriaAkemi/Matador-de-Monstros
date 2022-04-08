new Vue({
    el: '#app',

    data:{
        primeiroAtaque: false, // caso aperte algum botao, mostra o log
        vidaMonstro: 100, // valor inicial da vida do monstro
        vidaJogador: 100, // valor inicial da vida do jogador
        rodadas: 0, // quantidade de vezes que atacou ou curou, tamanho do log exibido 
        log: [0], //valores de ataque e mensagem que serão exibidos
        fim: false // vira true caso a vida de algum chegue a 0
    },

    methods:{
        danoJogador(dano){
            // diminui a vida do jogador
          this.vidaJogador -= dano
        },

        danoMonstro(dano){
            //diminui a vida do monstro 
            this.vidaMonstro -= dano
        },

        cura(vida){
            // adiciona vida ao jogador
            this.vidaJogador += vida
        },

        random(){
            // calcula numeros aleatorios entre 1 e 10
            return Math.floor(10* Math.random() + 1)
        },

        ataque(){
            // causa dano em ambos, porem jogador sofre o dobro de dano
            let n = this.random() 
            this.danoJogador(n * 2)
            this.danoMonstro(n)
            this.primeiroAtaque = true
            this.validaLog([n * 2, n , "atacou Monstro com "])
            this.validaVida()
            
        },

        ataqueEspecial(){
            // causa dano em ambos, porem monstro sofre o dobro de dano
            let n = this.random()
            this.danoJogador(n)
            this.danoMonstro(n * 2)
            this.primeiroAtaque = true
            this.validaLog([n, n * 2, 'atacou Monstro com '])
            this.validaVida()
        },

        curar(){
            // aumenta aleatoriamente a vida do jogador, mas o monstro ataca ao mesmo tempo, entao perde vida aleatoriamente 
            let n1 = this.random()
            let n2 = this.random()
            this.primeiroAtaque = true
            this.cura(n1)
            this.danoJogador(n2)
            this.validaLog([n1, n2, "curou "])
            this.validaVida()
            this.acao = "curou "
        },

        iniciarJogo(){
            // reseta todos os valores
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.primeiroAtaque = false
            this.rodadas = 0
            this.log = [0]
            this.fim = false
        },

        validaVida(){
            // a vida não pode ser < 0, nem > 100
            if (this.vidaJogador <= 0){
                this.vidaJogador = 0
                this.fim = true
            }
            if (this.vidaMonstro <= 0){
                this.vidaMonstro = 0
                this.fim = true
            }
            if (this.vidaJogador >= 100){
                this.vidaJogador = 100
            }
            if (this.vidaMonstro >= 100){
                this.vidaMonstro = 100
            }
            // a cada botao precionado (exeto desistir) é adicionado uma rodada no for 
            this.rodadas++
            this.vidaBaixa()
        },

        validaLog(numero){
            // numero vai entrar no inicio da lista de log
            this.log = [numero,...this.log]
        }
    }
})