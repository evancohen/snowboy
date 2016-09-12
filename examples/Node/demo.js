const record = require('node-record-lpcm16');
const SnowboyDetect = require('../../');

const d = new SnowboyDetect({
  resource: "resources/common.res",
  model: "resources/snowboy.umdl",
  sensitivity: "0.5",
  audioGain: 2.0
});

d.on('voiceactivity', function (voice) {
  console.log('voiceactivity: ' + voice);
});

d.on('error', function  (error) {
  console.log(error);
});

d.on('hotword', function (index) {
  console.log('hotword', index);
});

const r = record.start({
  threshold: 0,
  verbose: true
});

r.pipe(d);
