function status(resquest, response) {
  response.status(200).json({ mensagem: "teste do primeiro EndPoint" });
}

export default status;
