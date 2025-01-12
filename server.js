const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Cargar el archivo .proto
const PROTO_PATH = path.join(__dirname, 'hello.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello;

// Implementar el método SayHello
function sayHello(call, callback) {
  callback(null, { message: `GOood Morning, ${call.request.name}` });
}

// Crear y configurar el servidor
function main() {
  const server = new grpc.Server();
  server.addService(helloProto.Greeter.service, { sayHello: sayHello });
  const port = '50051';
  server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(`Server running at http://127.0.0.1:${port}`);
    server.start();
  });
}

main();