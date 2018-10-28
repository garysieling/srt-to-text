exports.parse = function(text) {
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
