new Vue({
    el: '#app',

    data:{
        primeiroAtaque: false,
        vidaMonstro: 100,
        vidaJogador: 100,
        rodadas: 0
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
            this.danoJogador(n*2)
            this.danoMonstro(n)
            this.primeiroAtaque = true
            this.validaVida()
            return n
        },

        ataqueEspecial(){
            let n = this.random()
            this.danoJogador(n)
            this.danoMonstro(n*2)
            this.primeiroAtaque = true
            this.validaVida()
            return n 
        },

        curar(){
            this.cura(this.random())
            this.danoJogador(this.random())
            this.validaVida()
        },

        iniciarJogo(){
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.primeiroAtaque = false
            rodadas = 0
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
        }





    }
})