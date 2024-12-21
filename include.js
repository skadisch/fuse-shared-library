const os = require('os')

const arch = os.arch()

let platform = os.platform();

if (arch === 'arm' || arch === 'arm64') {
  platform = `${platform}-${arch}`;
}

switch (platform) {
  case 'linux':
    require('fuse-shared-library-linux/include')
    break
  case 'darwin':
    require('fuse-shared-library-darwin/include')
    break
  case 'linux-arm':
    require('fuse-shared-library-linux-arm/include')
    break
  case 'linux-arm64':
    require('fuse-shared-library-linux-arm64/include')
    break
  default:
    throw new Error(`fuse-shared-library is not currently supported on: ${platform}`)
}
