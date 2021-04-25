const botao = document.getElementById('botao');
const minions3 = document.getElementById('lista').value;

botao.addEventListener("click", function() {
    let valor = document.getElementById('item').value
    document.getElementById('item').value = "";
    const lista = document.querySelector('#lista')
    const item = document.createElement('li');
    const botaolist = document.createElement('button');
    item.focus()

    item.textContent = valor;
    botaolist.textContent = 'Excluir'
    lista.appendChild(item);
    lista.appendChild(botaolist);

    botaolist.addEventListener('click', function() {
        lista.removeChild(item)
        lista.removeChild(botaolist)
    })
    document.getElementById('item').value = ""

})