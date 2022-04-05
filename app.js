new Vue({
    el: '#app',

    data:{
        primeiroAtaque: false,
        vidaMonstro: 100,
        vidaJogador: 100,
        width: 100

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
            this.danoJogador(this.random()*2)
            this.danoMonstro(this.random())
            this.primeiroAtaque = true
            this.validaVida()
        },

        ataqueEspecial(){
            this.danoJogador(this.random())
            this.danoMonstro(this.random()*2)
            this.primeiroAtaque = true
            this.validaVida()
        },

        curar(){
            this.cura(this.random())
            this.danoJogador(this.random())
            this.validaVida()
        },

        validaVida(){
            if (this.vidaJogador < 0){
                this.vidaJogador = 0
            }
            if (this.vidaMonstro < 0){
                this.vidaMonstro = 0
            }
        }

    }
})