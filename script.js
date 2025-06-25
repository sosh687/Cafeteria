const carrinho = document.getElementById("cart");
const listaCarrinho = document.querySelector(".cart-items");
const totalCarrinho = document.getElementById("cart-total");
const botaoCarrinho = document.getElementById("cart-icon");

let total = 0;

botaoCarrinho.addEventListener("click", () => {
  carrinho.style.display = carrinho.style.display === "flex" ? "none" : "flex";
});

function adicionarAoCarrinho(nome, preco) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${nome} - R$${preco.toFixed(2)}
    <button onclick="removerItem(this, ${preco})">🗑️</button>
  `;
  listaCarrinho.appendChild(li);
  total += preco;
  atualizarTotal();
}

function atualizarTotal() {
  totalCarrinho.textContent = total.toFixed(2);
}

function removerItem(botao, preco) {
  botao.parentElement.remove();
  total -= preco;
  atualizarTotal();
  if (listaCarrinho.children.length === 0) {
    carrinho.style.display = "none";
  }
}

function limparCarrinho() {
  listaCarrinho.innerHTML = "";
  total = 0;
  atualizarTotal();
  carrinho.style.display = "none";
}

document.querySelectorAll(".add-to-cart").forEach((botao) => {
  botao.addEventListener("click", () => {
    const nome = botao.dataset.nome;
    const preco = parseFloat(botao.dataset.preco);
    adicionarAoCarrinho(nome, preco);
    carrinho.style.display = "flex";
  });
});
