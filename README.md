# Lenix TypeScript Template

## Structure
```
├── shared/      - Shared types, constants, utils
├── client/      - FiveM client (JS runtime)
├── server/      - FiveM server (Node runtime)
├── nui/         - FiveM Browser UI (NUI)
└── build/       - Compiled output
```

## Setup
```bash
build (compile the ts files, production mode)
watch (auto compiler, watches the changes made in the sc)
reinstall (unsure to install the latest node_modules again)
```

### Extra:
- Build a specific side
```bash
build:client
build:server
build:nui
build:style
```
- Watch a specific side
```bash
watch:client
watch:server
watch:nui
watch:style
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
