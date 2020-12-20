
const server = require("./server").server;
const readDir = require("./server").readDir;
const removeFile = require("./server").removeFile;
const getTags = require("./server").getTags
const splitter = require("./html-css/modules/gray-scale").splitter;
const grayScale = require("./html-css/modules/gray-scale").grayScale;



test('splitter', () => {
  expect(splitter("ab.cd.e.f.xyz", "."))
    .toBe(".xyz");
})

test('readDirTestFail', () => {
  expect(readDir("docker-volume"))
    .toBe(false);
})

test('removeFile', () => {
  expect(removeFile("docker-volume"))
    .toBe()
})

test('getTags', () => {
  expect(getTags(
    {
      "responses": [
        {
          "labelAnnotations": [
            {
              "mid": "/m/01c8br",
              "description": "Street",
              "score": 0.87294734,
              "topicality": 0.87294734
            },
            {
              "mid": "/m/06pg22",
              "description": "Snapshot",
              "score": 0.8523099,
              "topicality": 0.8523099
            },
            {
              "mid": "/m/0dx1j",
              "description": "Town",
              "score": 0.8481104,
              "topicality": 0.8481104
            },
            {
              "mid": "/m/01d74z",
              "description": "Night",
              "score": 0.80408716,
              "topicality": 0.80408716
            },
            {
              "mid": "/m/01lwf0",
              "description": "Alley",
              "score": 0.7133322,
              "topicality": 0.7133322
            }
          ]
        }
      ]
    }
  ))
    .toEqual(["Street", "Snapshot", "Town", "Night", "Alley"]);
})