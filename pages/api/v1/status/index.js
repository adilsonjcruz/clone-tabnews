function status(resquest, response) {
  response.status(200).json({ chave: "Teste de retorno da Api" });
}

export default status;
