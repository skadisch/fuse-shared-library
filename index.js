const os = require('os')

const arch = os.arch()

let platform = os.platform();

if (arch === 'arm' || arch === 'arm64') {
  platform = `${platform}-${arch}`;
}

switch (platform) {
  case 'darwin':
    module.exports = require('fuse-shared-library-darwin')
    break
  case 'linux':
    module.exports = require('fuse-shared-library-linux')
    break
  case 'linux-arm':
    module.exports = require('fuse-shared-library-linux-arm')
    break
  case 'linux-arm64':
    module.exports = require('fuse-shared-library-linux-arm64')
    break
   default:
    throw new Error(`fuse-shared-library is not currently supported on: ${platform}`)
}
