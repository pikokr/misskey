import 'zx/globals'
import packageJson from './package.json' assert {type: 'json'}
import fs from 'fs'

if (!process.env.DOCKER) throw new Error('Don\'t run this script on dev environment')

packageJson.version = `paring.${(await $`git rev-parse --short HEAD`).toString().trim()}`

await fs.promises.writeFile('package.json', JSON.stringify(packageJson))
