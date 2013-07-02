var brain = require('brain');

var net = new brain.NeuralNetwork();

function range(mx, mi) {
	return Math.floor(Math.random() * (mx - mi + 1) + mi);
}

var training_set = [];
for (var i = 0; i < 10000; i++) {
	var a_val = Math.random();
	var b_val = Math.random();

	if (i % 1000 == 0) console.log(".");

	training_set[i] = {input: {a:a_val, b:b_val}, output : {c: a_val + b_val}};
};

console.log("training...");


net.train(training_set);

console.log("running...");

var output = net.run({ a: 0.3, b: 0.02 });
console.log(output);
output = net.run({ a: 0.1, b: 0.4 });
console.log(output);
output = net.run({ a: 0.09, b: 0.5 });
console.log(output);
output = net.run({ a: 0.1, b: 0.1 });
console.log(output);