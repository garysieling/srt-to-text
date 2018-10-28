const assert = require('assert');
const srt = require('../index');

describe('Array', function() {
  describe('#indexOf()', function() {

    const text = `00:00:00.610 --> 00:00:02.640
In the last video, we

00:10:04.340 --> 00:10:06.340
saw that

00:10:06.340 --> 00:10:08.850
something happened.`

	  it('single line test', function() {
      assert.equal('In the last video, we saw that something happened.', srt.parse(text));
    });
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {

    const text = `00:00:00.610 --> 00:00:02.640
In the last video, we

00:10:04.340 --> 00:10:06.340
saw that
something happened.`

	  it('multiple line test', function() {
      assert.equal('In the last video, we saw that something happened.', srt.parse(text));
    });
  });
});

