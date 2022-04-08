new Vue({
    el: '#app',

    data:{
        primeiroAtaque: false,
        vidaMonstro: 100,
        vidaJogador: 100,
        rodadas: 0,
        log: [0],
    },

    watch:{
        vidaJogador(n, a){
            return a-n
        }
    },

    methods:{
        danoJogador(dano){
          this.vidaJogador -= dano
        },

        danoMonstro(dano){
            this.vidaMonstro -= dano
        },

        cura(vida){
            this.vidaJogador += vida
        },

        random(){
            return Math.floor(10* Math.random() + 1)
        },

        ataque(){
            let n = this.random() 
            this.danoJogador(n)
            this.danoMonstro(n * 2)
            this.primeiroAtaque = true
            this.validaLog([n, n * 2])
            this.validaVida()
        },

        ataqueEspecial(){
            let n = this.random()
            this.danoJogador(n)
            this.danoMonstro(n * 2)
            this.primeiroAtaque = true
            this.validaLog([n, n * 2])
            this.validaVida()
        },

        curar(){
            let n1 = this.random()
            let n2 = this.random()
            this.cura(n1)
            this.danoJogador(n2)
            this.validaLog([n1, n2])
            this.validaVida()
        },

        iniciarJogo(){
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.primeiroAtaque = false
            this.rodadas = 0
            this.log = [0]
        },

        validaVida(){
            if (this.vidaJogador < 0){
                this.vidaJogador = 0
            }
            if (this.vidaMonstro < 0){
                this.vidaMonstro = 0
            }
            this.rodadas++
            this.vidaBaixa()
        },

        validaLog(numero){
            this.log.push(numero)
        }





    }
})