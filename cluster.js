var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log("numCPUs "+numCPUs);
// ok ingore actual cpus
numCPUs = 4;

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
    console.log("Worker "+process.pid);
    //change this line to your node.js app entry point
     require("./bin/www");
}
