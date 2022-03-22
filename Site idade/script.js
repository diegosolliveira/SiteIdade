function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){

            gênero = 'Homem'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotobebeh.png')
            }

            else if(idade < 21){
                img.setAttribute('src', 'fotojovemh.png')
            }

            else if(idade < 50){
                img.setAttribute('src', 'fotojovemh.png')
            }
            else{
                img.setAttribute('src', 'fotoidoso.png')
            }
        }

        else if(fsex[1].checked){

            gênero = 'Mulher'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotobebef.png')
            }

            else if(idade < 21){
                img.setAttribute('src', 'fotojovemf.png')
            }

            else if(idade < 50){
                img.setAttribute('src', 'fotojovemf.png')
            }
            else{
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ' + gênero + ' com ' + idade + ' anos.'
        res.appendChild(img)
    }
}