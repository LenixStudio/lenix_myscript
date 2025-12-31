# Lenix TypeScript Template

## Structure
```
├── shared/      - Shared types, constants, utils
├── client/      - FiveM client (JS runtime)
├── server/      - FiveM server (Node runtime)
├── web/         - Browser UI (NUI)
└── build/       - Compiled output
```

## Setup
```bash
npm install
npm run watch    # Development
npm run build    # Production
```

## Development
- Add types in `shared/types/`
- Server logic in `server/api/`
- Client logic in `client/api/`
- UI features in `web/src/features/`

## Common Issues
This is causing esbuild to treat it as CommonJS because exports looks like a CommonJS pattern.

### Example:
exports('name', name) 
exports('age', age)

// output: exports2 is not a function

### Solution:
globalThis.exports('name', name) 
globalThis.exports('age', age) 
