

var textoLegivel = document.getElementById('input-text')
var textoSaida = document.getElementById('inputTextSaida')
var msg = document.getElementById('msg')
textoLegivel.focus()



var encriptar = document.querySelector('#bntEncriptar')
encriptar.onclick = encrypt


var descriptografar = document.querySelector('#btnDescriptografar')
descriptografar.onclick = decrypt


/*FUNÇÃO PARA ENCRIPTAR */
function encrypt() {
    if (textoLegivel.value.length == 0) {
        /*INSERI DENTRO DO HTML ELEMENTOS CONFORME BOTÃO CLICADO */
        let imgLupa = document.getElementById('lupa')
        imgLupa.setAttribute('src', './img/ComputerError.gif')
        msg.innerText = "Nenhuma mensagem encontrada"
    } else {
        /*INSERI DENTRO DO HTML ELEMENTOS CONFORME BOTÃO CLICADO */
        let imgLupa = document.getElementById('lupa')
        imgLupa.setAttribute('src', './img/Ok.gif')
        msg.innerText = "Copie o texto para área de transferencia."
        document.getElementById('copy').innerHTML = '<button id="btn-copiar" class="btn-copiar" onclick="copiar()">Copiar</button>'
    
         var text = textoLegivel.value;
         var txt = text.replace(/e/igm, 'enter');
         var txt = txt.replace(/i/igm, 'imes');
         var txt = txt.replace(/a/igm, 'ai');
         var txt = txt.replace(/o/igm, 'ober');
         var txt = txt.replace(/u/igm, 'ufat');
         /*INSERI NA AREA DE TEXTO DE SAIDA */
         document.getElementById('inputTextSaida').innerHTML = `${txt}`;
         /*LIMPA ÁREA DE TEXTO DE ENTRADA */
         textoLegivel.value=""
         textoLegivel.focus()
    }
    
}
/*FUNÇÃO PARA DECRIPTAR*/
function decrypt() {
        /* VARIAVEIS REVERSAS DA CRIPTOGRAFIA */
        if(textoSaida.value.length==0){
            /*INSERI DENTRO DO HTML ELEMENTOS CONFORME BOTÃO CLICADO */
            let imgLupa = document.getElementById('lupa')
            imgLupa.setAttribute('src', './img/ComputerError.gif')
            msg.innerText = "Nenhuma mensagem encontrada" 
        }else{
            var text = textoSaida.value;
            var txt = text.replace(/enter/igm, 'e');
            txt = txt.replace(/imes/igm, 'i');
            txt = txt.replace(/ai/igm, 'a');
            txt = txt.replace(/ober/igm, 'o');
            txt = txt.replace(/ufat/igm, 'u');
            
            document.getElementById('inputTextSaida').innerHTML = `${txt}`;
            txt1.focus()
        }
        
}
/*FUNÇÃO PARA COPIAR TEXTO*/
function copiar() {
    if (textoSaida.value.length == 0) {
        msg.innerHTML = "Não é possível copiar, pois não há resultados!."
        let imgLupa = document.getElementById('lupa')
        imgLupa.setAttribute('src', './img/ComputerError.gif')
    } else {
        document.querySelector('#inputTextSaida').select()
        document.execCommand('copy')
        msg.innerHTML = "O texto copiado já está na área de transferência!"
    }

}


    