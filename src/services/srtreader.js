var raw_lines = [];
var time = [];
var dialogue = [];
async function loadFile(file) {
  time.length = 0;
  dialogue.length = 0;
  raw_lines.length = 0;

  let text = await file.text();
  raw_lines = text.split(/\r\n|\n/);
  raw_lines = raw_lines.filter((e) => e != "");
  raw_lines = raw_lines.filter((x) => isNaN(x));

  for (var i = 0; i < raw_lines.length; i++) {
    raw_lines[i] = raw_lines[i].trim();
  }

  for (var i = 0; i < raw_lines.length - 1; i++) {
    if (isNaN(raw_lines[i][0]) && isNaN(raw_lines[i + 1][0])) {
      raw_lines[i] = raw_lines[i] + " " + raw_lines[i + 1];
      raw_lines.splice(i + 1, 1);
    }
  }

  for (var i = 0; i < raw_lines.length; i++) {
    if (i % 2 == 0) {
      time.push(raw_lines[i]);
    } else {
      dialogue.push(raw_lines[i]);
    }
  }

  raw_lines.length = 0;

  for (var i = 0; i < time.length; i++) {
    time[i] = time[i].split("-->");
    time[i][0] = time[i][0].replace(",", ":");
    time[i][1] = time[i][1].replace(",", ":");
  }
  return { time, dialogue };
}

function makeSubs() {
  for (var i = 0; i < time.length; i++) {
    document.getElementById("output").innerHTML +=
      time[i] + "\n" + dialogue[i] + "\n";
    console.log(time[i] + "\n" + dialogue[i] + "\n");
  }
}
function getSub_Seconds(param) {
  /*
		Pass this function the string format of time parameter and it will return you the 
		time converted to seconds in integer format
		*/
  param = param.split(":");
  var hours = parseInt(param[0]);
  var minutes = parseInt(param[1]);
  var seconds = parseInt(param[2]);
  var millis = parseInt(param[3]);

  var total_seconds = hours * 3600 + minutes * 60 + seconds + millis / 1000;
  return total_seconds;
}

function getSub_Millis(param) {
  /*
		Pass this function the string format of time parameter and it will return you the 
		time converted to milliseconds in integer format
		*/
  param = param.split(":");
  var hours = parseInt(param[0]);
  var minutes = parseInt(param[1]);
  var seconds = parseInt(param[2]);
  var millis = parseInt(param[3]);

  var total_millis =
    hours * 3600000 + minutes * 60000 + seconds * 1000 + millis;
  return total_millis;
}
exports.loadFile = loadFile;
exports.makeSubs = makeSubs;
exports.getSub_Seconds = getSub_Seconds;

exports.getSub_Millis = getSub_Millis;
