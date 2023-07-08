/* sessão das variaveis */
const sideMenu = document.querySelector('aside')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('fechar-btn')
const darkMode = document.querySelector('.modo-escuro')

/* sessão botão do menu */
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

darkMode.addEventListener('click', () =>{
    document.body.classList.toggle('variaveis-modo-escuro');
    darkMode.querySelector('span:nth-child(1)').classList('active')
    darkMode.querySelector('span:nth-child(2)').classList('active')
})

Pedidos.forEach(pedido =>{
    const tr = document.createElement('tr')
    const trContent = `
        <td>${pedido.nomeDoProduto}</td>
        <td>${pedido.numeroDoProduto}</td>
        <td>${pedido.statusDoPagamento}</td>
        <td class="${pedido.status === 'Recusou' ? 'titulo-logo' : pedido.status === 'Pendentes' ? 'aviso' : 'primaria'}">${pedido.status}</td>

        <td class="primaria">Detalhes</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});