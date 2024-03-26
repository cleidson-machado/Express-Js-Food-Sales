const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Pizza Sales and Delivery - API",
    description: "Nodejs Express + MongoDb",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "./src/swagger-output.json";
//const endpointsFiles = ["./src/**/*.routes.js"]; //THIS WAY DON'T WORK!?
//## USE: | node swagger.js | ON TERMINAL TO GENERATE AUTO DOCS!!
//## Beware! Because when do you create a new swagger AUTO DOCS!! All the .json (swagger-output.json ) file will be rebuild!!
//## USE: https://editor.swagger.io/ | To Test AND Download Layouts for .json (swagger-output.json )!!
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./app.js");
});
