async function signupHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
    const firstName = document.querySelector('#inputFirstName').value.trim();
    const lastName = document.querySelector('#inputLastName').value.trim();
    const username = document.querySelector('#inputUsername').value.trim();
    const address = document.querySelector('#inputAddress').value;
    const addressLine2 = document.querySelector('#inputAddress2').value;
    const city = document.querySelector('#inputCity').value;
    const state = document.querySelector('#inputState').value;
    const zip = document.querySelector('#inputZip').value;

    if (email && password && address && addressLine2 && city && state && zip) {
        const response2 = await fetch('/api/customer', {
            method: 'post',
            body: JSON.stringify({
                email,
                firstName,
                lastName,
                password,
                address,
                addressLine2,
                city,
                state,
                zip
            }),

            headers: { 'Content-Type': 'application/json' }
        });
        if (response2.ok) {
            console.log('success');
            document.location.replace('/')
        } else {
            alert(response2.statusText);
        }
    }
}
document.querySelector('.register-form').addEventListener('submit', signupHandler);