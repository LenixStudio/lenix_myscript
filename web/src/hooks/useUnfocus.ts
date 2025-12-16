import { pendingMessageForFadeCount, setFocus } from '../index'
import { messageCount } from '../index'

export default () => {
  setFocus(false)
  const input = document.getElementById('input')?.classList
  const block = document.getElementById('block')?.classList
  const messages = document.getElementById('messages')?.classList
  const cooldown = document.getElementById('cooldown-bar')?.classList
  cooldown?.add('opacity-0')
  input?.add('opacity-0')
  input?.remove('opacity-100')
  block?.remove('bg-stone-700')
  messages?.remove('bg-stone-900')
  const inputElement = document.querySelector('.input') as HTMLInputElement
  inputElement?.blur()
  for (let i = 1; i <= messageCount; i++) {
    const message = document.getElementById('message-' + i)?.classList
    if (pendingMessageForFadeCount.includes(i)) {
      message?.add('duration-[5s]')
      message?.add('opacity-100')
      message?.remove('opacity-0')
    } else {
      message?.add('duration-[5s]')
      message?.remove('opacity-100')
      message?.add('opacity-0')
    }
  }
}