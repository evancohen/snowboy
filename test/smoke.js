'use strict'

const assert = require('assert')
const path = require('path')
const root = path.dirname(require.resolve('snowboy/package.json', { paths: [process.cwd()] }))
const { Models, Detector } = require(root)
const models = new Models()
models.add({ file: path.join(root, 'resources/models/snowboy.umdl'), hotwords: 'snowboy' })
const detector = new Detector({
  resource: path.join(root, 'resources/common.res'), models, audioGain: 1, applyFrontend: false
})
assert.strictEqual(detector.numHotwords(), 1)
assert.strictEqual(detector.sampleRate(), 16000)
assert.strictEqual(detector.numChannels(), 1)
assert.strictEqual(detector.bitsPerSample(), 16)
const result = detector.runDetection(Buffer.alloc(3200))
assert.ok(result === -2 || result === 0, 'Silence must not trigger a hotword or detection error')
detector.destroy()
console.log('Packed Snowboy native smoke test passed')
