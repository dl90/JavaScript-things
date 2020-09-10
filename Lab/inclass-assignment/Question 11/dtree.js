/*
Instructions: Create a JavaScript object-based representation of a directory tree

Given a directory structure like this:

photos
├── summer
│   └── june
│       └── windsurf.jpg
└── winter
    └── january
        ├── ski.png
        └── snowboard.jpg

Your module should return something like this:
{
  "path": "photos",
  "name": "photos",
  "size": 600,
  "type": "directory",
  "children": [
    {
      "path": "photos/summer",
      "name": "summer",
      "size": 400,
      "type": "directory",
      "children": [
        {
          "path": "photos/summer/june",
          "name": "june",
          "size": 400,
          "type": "directory",
          "children": [
            {
              "path": "photos/summer/june/windsurf.jpg",
              "name": "windsurf.jpg",
              "size": 400,
              "type": "file",
              "extension": ".jpg"
            }
          ]
        }
      ]
    },
    {
      "path": "photos/winter",
      "name": "winter",
      "size": 200,
      "type": "directory",
      "children": [
        {
          "path": "photos/winter/january",
          "name": "january",
          "size": 200,
          "type": "directory",
          "children": [
            {
              "path": "photos/winter/january/ski.png",
              "name": "ski.png",
              "size": 100,
              "type": "file",
              "extension": ".png"
            },
            {
              "path": "photos/winter/january/snowboard.jpg",
              "name": "snowboard.jpg",
              "size": 100,
              "type": "file",
              "extension": ".jpg"
            }
          ]
        }
      ]
    }
  ]
}
*/

const fs = require('fs');

console.table(JSON.stringify(readDir(__dirname + '/test')[0], null, "  "));
console.info(readDir(__dirname + '/test'));

/**
 * Reads all files in directory
 * @param {String} path directory path
 */
function readDir (path) {
  const dir = fs.readdirSync(path);
  const arr = []
  for (ele of dir) {
    arr.push(DFSdirCheck(ele, path));
  }
  return arr
}

/**
 * Goes to the deepest level of until there is no more directories
 * Adds each real directory to the array filePathStackArr for storage
 * @param {String} file name of each file
 * @param {String} location relative location
 */
function DFSdirCheck (file, location) {
  const realPath = location + `/${file}`;
  const stats = fs.lstatSync(realPath);

  const parent = {}
  parent.fullPath = realPath
  parent.relativePath = file;
  parent.name = file
  parent.size = stats.size

  if (stats.isDirectory()) {
    parent.type = 'directory';
    parent.children = readDir(realPath);
  } else if (stats.isFile) {
    parent.type = 'file'
    parent.extension = splitter(file, '.')
  } else {
    parent.type = 'unknown'
  }

  return parent
}

/**
 * Finds the last occurrence of index in string and returns whatever that follows it
 * @param { String } str original string
 * @param { String } index split with
 * @returns { String } string following last occurrence of index
 */
function splitter (str, index) {
  let extension = null;
  const extensionIndex = str.lastIndexOf(index);
  if (extensionIndex > 0) {
    extension = str.slice(extensionIndex);
  }
  return extension;
}
