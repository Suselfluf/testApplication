
const body = JSON.stringify({
    testName: 'CSS'
})
fetch('/api/tests', {
    method: 'POST',
    body: body,
    headers: {
        'Content-Type': 'application/json'
    }
})