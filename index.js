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
  let matchBreak = /\d\d:\d\d:\d\d\.\d\d\d --> \d\d:\d\d:\d\d\.\d\d\d/i;
  let transcript = "";
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
 
    if (!line.match(matchBreak)) {
      transcript += ' ' + line;
    }
  }
 
  return transcript.replace(/\s+/ig, ' ').trim();
}
