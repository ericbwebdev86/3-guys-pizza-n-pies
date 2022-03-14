async function loginHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#inputEmail4').value.trim();
    const password = document.querySelector('#inputPassword4').value.trim();

    if (username && password) {
        const response = await fetch('/api/customers/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText);
        }

    }
}
document.querySelector('.login-form').addEventListener('submit', loginHandler);
