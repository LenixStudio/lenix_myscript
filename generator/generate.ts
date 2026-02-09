import { writeFile } from 'fs/promises'

const { default: fxmanifest } = await import('./fxmanifest.json')

let content: string = ''
for (const [key, value] of Object.entries(fxmanifest)) {
  if (Array.isArray(value)) {
    content +=
`${key} {
  "${value}",
}
`
  } else if (typeof value === 'string') {
    content +=
`${key} "${value}"
`
  } else throw new Error('Invalid value type')
}

await writeFile('fxmanifest.lua', content)