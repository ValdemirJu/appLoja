// Script feito em aula com auxilio do professor

function carregarClientes() {
	var httpReq = new XMLHttpRequest();
	var url = "https://demo0299299.mockable.io/cliente";

	httpReq.open("GET", url, false);
	httpReq.send(null);

	var res = JSON.parse(httpReq.responseText);

	// console.log(res);

	return res;
}

function carregarTabelaCliente() {
	var clientes = carregarClientes();

	// ForEach jQuery
	$.each(clientes, (index, cliente) => {
		var linha = `
		<tr>
			<td>${cliente.nome}</td>
			<td>${cliente.idade}</td>
			<td>${cliente.rg}</td>
			<td>${cliente.estado}</td>
		</tr>`;
		$("#cliente").append(linha);
		// console.log(linha);
	});
}

window.addEventListener("load", carregarTabelaCliente);
