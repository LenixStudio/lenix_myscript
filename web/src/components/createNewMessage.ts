import { maxTextLength, messagesCooldown, messagesFadeDuration } from "../../../shared/constants/config"
import useCooldown from "../hooks/useCooldown"
import { createElement } from "@lenixdev/ui_components"
import { isFocused, messageCount, pendingMessageForFadeCount, setMessagesCount, setPendingMessageForFadeCount } from ".."
import { player } from "../../../shared/constants/config"
import { input } from "../features/chat"

let canSend = true

export default (message: string) => {
  if (!message.trim()) return
  if (!canSend) return
  if (message.length > maxTextLength) return
  
  useCooldown()
  canSend = false
  setTimeout(() => {
    const bar = document.getElementById('cooldown-bar')
    canSend = true
    bar?.classList.add('hidden')
  }, messagesCooldown * 1000);
    
  createElement({
    parent: 'messages',
    id: 'message-' + setMessagesCount(messageCount + 1),
    className: 'w-full text-white text-lg p-1 rounded flex flex-wrap items-start gap-1 transition-opacity duration-[5s] opacity-100',
  })

  createElement({
    parent: "message-" + messageCount,
    className: "text-stone-400 text-lg shrink-0",
    content: '@' + player.name
  })

  createElement({
    parent: "message-" + messageCount,
    className: "text-" + player.role.color + " text-lg shrink-0",
    content: ' (' + player.role.name + '): '
  })

  createElement({
    parent: "message-" + messageCount,
    className: "text-white text-lg break-words min-w-0",
    content: message
  })

  const messageElement = document.getElementById('message-' + messageCount)

  if (messageElement) {
    pendingMessageForFadeCount.push(messageCount)
    const currentMessageId = messageCount
    setTimeout(() => {
      setPendingMessageForFadeCount(pendingMessageForFadeCount.filter((id) => id !== currentMessageId))
      if (!isFocused) {
        messageElement.classList.remove('opacity-100')
        messageElement.classList.add('opacity-0')
      }
    }, messagesFadeDuration)
  }

  input.value = ''

  const messages = document.getElementById('messages')
  if (messages) {
    messages.scrollTop = messages.scrollHeight
  }
  const characterLeftElement = document.getElementById('character-left')
  characterLeftElement?.classList.add('hidden')
}