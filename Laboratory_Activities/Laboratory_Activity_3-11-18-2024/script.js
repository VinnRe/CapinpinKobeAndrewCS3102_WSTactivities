const textInput = document.getElementById('textInput')
const wordCount = document.getElementById('wordCount')
const sentenceCount = document.getElementById('sentenceCount')

function updateCounts() {
    const text = textInput.value.trim()

    const words = text.split(/\s+/).filter(word => word.length > 0)
    wordCount.textContent = `Words: ${words.length}`

    const sentences = text.split(/[.!?]\s+/).filter(sentence => sentence.length > 0)
    sentenceCount.textContent = `Sentences: ${sentences.length}`

}

textInput.addEventListener('input', updateCounts)