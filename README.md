# TypeScript Boilerplate

## Structure
```
├── shared/      - Shared types, constants, utils
├── client/      - FiveM client (JS runtime)
   └── nui/         - FiveM Browser UI (NUI)
├── server/      - FiveM server (Node runtime)
└── build/       - Compiled output
```

## Setup
```bash
pnpm i
pnpm nui
pnpm build

```

## Common Issues
> exports2 is not a function

This is causing esbuild to treat it as CommonJS because exports looks like a CommonJS pattern.
* exports does not exist on the client context by default like the server

### Example:
exports('name', name) 
exports('age', age)

use this on the client context only
### Solution:
globalThis.exports('name', name) 
globalThis.exports('age', age) 
