Example code:

```
const fs = require('fs');
const srt = require('srt-to-text');
let text = fs.readFileSync('test.srt');

console.log(srt.parse(text));
```

