const assert = require('assert');
const srt = require('../index');

describe('Array', function() {
  describe('#indexOf()', function() {

    const text = `WEBVTT
Kind: captions
Language: en
Style:
::cue(c.colorCCCCCC) { color: rgb(204,204,204);
 }
::cue(c.colorE5E5E5) { color: rgb(229,229,229);
 }
##

00:00:00.060 --> 00:00:02.360 align:start position:0%

if<00:00:00.240><c> you</c><00:00:00.420><c> take</c><00:00:00.630><c> a</c><00:00:00.659><c> store</c><00:00:01.170><c> and</c><c.colorE5E5E5><00:00:01.469><c> put</c><00:00:01.650><c> it</c><00:00:01.740><c> inside</c><00:00:01.829><c> a</c></c>

00:00:02.360 --> 00:00:02.370 align:start position:0%
if you take a store and<c.colorE5E5E5> put it inside a
 </c>
`

	  it('vtt', function() {
      assert.equal('In the last video, we saw that something happened.', srt.parse(text));
    });
  });
});


describe('Array', function() {
  describe('#indexOf()', function() {

    const text = `WEBVTT
Kind: captions
Language: en
	  
00:00:00.610 --> 00:00:02.640
In the last video, we

00:10:04.340 --> 00:10:06.340
saw that

00:10:06.340 --> 00:10:08.850
something happened.`

	  it('headers', function() {
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

