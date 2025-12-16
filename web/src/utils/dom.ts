import useUnfocus from "../hooks/useUnfocus"
import { isFocused } from ".."
import useFocus from "../hooks/useFocus"

const block = document.getElementById('block')
const outside = document.getElementById('root') || document.getElementById('container')

outside?.addEventListener('mousedown', (e) => {
  if (!block?.contains(e.target as Node)) {
    useUnfocus()
  }
})

document.addEventListener('keydown', (e) => {
  if ((e.key === 't' || e.key === 'T') && !isFocused) {
    e.preventDefault()
    useFocus()
  } else if (e.key === 'Escape') {
    useUnfocus()
  }
})