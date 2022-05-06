function gerar() {
    var num = document.getElementById('txtnum')
    var tabuada = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else{
        var n = Number(num.value)
        tabuada.innerHTML = ''
        for(var c = 1;c <= 10;c++){
            var item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
        }
    }
}