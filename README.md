# gRPC Simple Example in JavaScript

This is a simple example of a gRPC service implemented in JavaScript using Node.js. The service allows you to greet a user using a provided name. The hello.proto file defines a service called Greeter with a SayHello method that takes a HelloRequest and returns a HelloReply.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- npm (included with Node.js)

## Project Structure

```plaintext
GRPC/
│
├── hello.proto # gRPC service definition file
├── server.js # gRPC server implementation
├── client.js # gRPC client implementation
└── package.json # Node.js project configuration file
└── README.md # READEME file
```

## Instructions for Using the Project
1. Clone the Repository

To clone this repository, use the following command:

 ```bash
 git clone https://github.com/your_user/grpc-simple-example.git

 ```

2. Install the necessary dependencies:
Initialize and download the dependencies Required dependencies:
 
 ```bash
 npm install
 ```

3. Run the Server
Start the GRPC server:
 
 ```bash
  node server.js
  ```

4. Run the client
Start the GRPC client:
 
 ```bash
  node client.js
  ```

## How to Make Queries
 To interact with the GRPC server, just run the client, which will display a greeting message with  your name, which can be changed or modified in the client.js file.
 client.sayHello({ name: 'TuNombre' }, (error, response) => {
  // ...
 });

## Author
EDWIN PROAÑO
GitHub: Daniielpro10