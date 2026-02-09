import { disablePrint } from "../shared/constants"

setImmediate(() => {
  if (disablePrint) return
  console.log("Hello Client, this is TypeScript!")
})