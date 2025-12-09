const form = document.querySelector('form')
const emailInput = document.getElementById('email-input')
const errorMessage = document.getElementById('email-error')
const notifyButton = form.querySelector('button[type="submit"]')

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function isValidEmail(email) {
    return EMAIL_REGEX.test(email)
}

function clearError() {
    errorMessage.style.visibility = 'hidden'

    if (window.innerWidth <= 600) {
        errorMessage.style.display = 'none';
    }

    emailInput.style.border = '1px solid hsl(0, 0%, 85%)'
    errorMessage.innerText = ''
}

function displayError(message) {
    errorMessage.style.visibility = 'visible'

    if (window.innerWidth <= 600) {
        errorMessage.style.display = 'block';
    }

    emailInput.style.borderColor = 'hsl(354, 100%, 66%)'
    errorMessage.innerText = message
}

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const email = emailInput.value.trim()

    clearError()

    if (email === '') {
        displayError('Email field cannot be empty.')
    } else if (!isValidEmail(email)) {
        displayError('Please provide a valid email address.')
    } else {
        console.log('Valid email submitted:', email)
        alert(`Success! Email: ${email} has been notified.`)
        form.reset()
        clearError()
    }
})

