// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const serialport = require('serialport')
// const tableify = require('tableify')
const Readline = require('@serialport/parser-readline')

var temperature;

async function listSerialPorts() {
	await serialport.list().then((ports, err) => {
		if(err) {
			document.getElementById('error').textContent = err.message;
			return;
		} else {
			document.getElementById('error').textContent = '';
		}
		console.log('ports', ports);

		if (ports.length === 0) {
			document.getElementById('error').textContent = 'No ports discovered';
		}

		var selection = document.getElementById("selectPort");
		// Empty dropdown selections
		document.getElementById("selectPort").innerHTML = "";
		// Populate dropdown
		for(var i = 0; i < ports.length; i++){
			var opt = ports[i].path;
			var el = document.createElement("option");
			el.textContent = opt;
			selection.appendChild(el);
		}

		console.log(ports[0].path);

		var e = document.getElementById("selectPort");
		var text = e.options[e.selectedIndex].text;
		console.log(text)
	})
}

function portSelected(){
  var selectPorts = document.getElementById("selectPort");
  var selectedPort = selectPorts.options[selectPorts.selectedIndex].text;
  console.log(selectedPort);
  const port = new serialport(String(selectedPort),{
    baudRate: 9600
  })

  const parser = port.pipe(new Readline({delimiter: '\r\n'}))

  parser.on('data', function serialLog(Data){
	var readings = JSON.parse(Data);

	document.getElementById('temperature').innerHTML = readings[0];
	document.getElementById('objectTemperature').innerHTML = readings[1];
	document.getElementById('acceleration').innerHTML = readings[2];
	document.getElementById('magnetic').innerHTML = readings[3];
	document.getElementById('cap').innerHTML = readings[4];

	temperature = readings[0];

    console.log(readings[0]);
  });
}





