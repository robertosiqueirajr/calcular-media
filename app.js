class Aluno {
    constructor(){
        this.arrayMedia = []
    }

    calcular (){
        let media = this.lerDados()
        this.adicionar(media)
        console.log(this.arrayMedia)

        this.listaTabela()

    }

    listaTabela(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for( let i =0; i < this.arrayMedia.length; i++ ){
            let tr = tbody.insertRow()

            let td_nome = tr.insertCell()
            let td_primeiro = tr.insertCell()
            let td_segundo = tr.insertCell()
            let td_terceiro = tr.insertCell()
            let td_total = tr.insertCell()

            td_nome.innerText = this.arrayMedia[i].aluno
            td_primeiro.innerText = this.arrayMedia[i].primeiroTrimestre
            td_segundo.innerText = this.arrayMedia[i].segundoTrimestre
            td_terceiro.innerText = this.arrayMedia[i].terceiroTrimestre
            td_total.innerText = this.arrayMedia[i].total
        }
    }

    lerDados (){
        let medi = {}
        medi.aluno = document.getElementById('consultaNome').value
        medi.primeiroTrimestre = Number(document.getElementById('primeiro').value)
        medi.segundoTrimestre = Number(document.getElementById('segundo').value)
        medi.terceiroTrimestre = Number(document.getElementById('terceiro').value)
        medi.total = (medi.primeiroTrimestre+medi.segundoTrimestre+medi.terceiroTrimestre)/3
       
        if(medi.total >= 60){
            medi.total = 'Aprovado'

            
        }else{
            medi.total = 'Reprovado'

        }
        
        return medi
    }

    adicionar (media){
        this.arrayMedia.push(media)
    }
}


let aluno = new Aluno()