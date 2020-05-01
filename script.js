// Script feito em aula com auxilio do professor

function carregarClientes() {
	const httpReq = new XMLHttpRequest();
	const url = "https://demo0299299.mockable.io/cliente";

	httpReq.open("GET", url, false);
	httpReq.send(null);

	const res = JSON.parse(httpReq.responseText);

	// console.log(res);

	return res;
}

function carregarTabelaCliente() {
	const clientes = carregarClientes();

	// ForEach jQuery
	$.each(clientes, (index, cliente) => {
		const linha = `
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
