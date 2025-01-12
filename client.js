const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Cargar el archivo .proto
const PROTO_PATH = path.join(__dirname, 'hello.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello;

// Crear un cliente
function main() {
  const client = new helloProto.Greeter('localhost:50051', grpc.credentials.createInsecure());

  client.sayHello({ name: 'Daniiel' }, (error, response) => {
    if (!error) {
      console.log('Greeting:', response.message);
    } else {
      console.error(error);
    }
  });
}

main();