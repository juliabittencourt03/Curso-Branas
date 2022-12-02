const Connection = require("./server/connection");
const HttpServer = require("./server/HttpServer");
const LancamentoController = require("./server/lancamentoController");
const LancamentoData = require("./server/lancamentoData")

const connection = new Connection();
const lancamentoData = new LancamentoData (connection);
const httpServer = new HttpServer ();
new LancamentoController(httpServer, lancamentoData);
httpServer.listen(3000);