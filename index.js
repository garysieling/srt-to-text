exports.parse = function(text) {
  if (text.match(/^WEBVTT\n/)) {
    text = text.substring("WEBVTT\n".length)
  }

  if (text.match(/^Kind: captions\n/)) {
    text = text.substring("Kind: captions\n".length)
  }

  if (text.startsWith("Language: ")) {
    text = text.substring(text.indexOf("\n"));
  }

  let lines = text.split("\n");
  // can have css on the end
  let matchBreak = /^\d\d:\d\d:\d\d\.\d\d\d --> \d\d:\d\d:\d\d\.\d\d\d.*/i;
  let transcript = "";
  let started = false; // style block is optional - helps skip it
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
 
    if (line.match(matchBreak)) {
      started = true;
    } else if (started) {
      transcript += 
        ' ' + line.replace(/[<]c[.]([^>]+)[>]/g, '')
	          .replace(/[<]c[>]/g, '')
	          .replace(/[<][\/]c[>]/g, '')
	          .replace(/[<][>]/g, '')
	          .replace(/[<]\d\d:\d\d:\d\d\.\d\d\d[>]/g, '')
    }
  }
 
  return transcript.replace(/\s+/ig, ' ').trim();
}
