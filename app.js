new Vue({
    el: '#app',

    data:{
        primeiroAtaque: false,
        vidaMonstro: 100,
        vidaJogador: 100

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
        },

        ataqueEspecial(){
            this.danoJogador(this.random())
            this.danoMonstro(this.random()*2)
        },

        curar(){
            this.cura(this.random())
            this.danoJogador(this.random())
        }

    }
})