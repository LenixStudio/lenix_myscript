import { disablePrint } from "../shared/constants"

setImmediate(() => {
  if (disablePrint) return
  console.log("Hello Server, this is TypeScript!f")
})