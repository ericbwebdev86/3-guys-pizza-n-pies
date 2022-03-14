async function signupHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();
    const first_name = document.querySelector('#inputFirstName').value.trim();
    const last_name = document.querySelector('#inputLastName').value.trim();
    const street_address = document.querySelector('#inputAddress').value;
    const street_address2 = document.querySelector('#inputAddress2').value;
    const city_address = document.querySelector('#inputCity').value;
    const state_address = document.querySelector('#inputState').value;
    const zip_address = document.querySelector('#inputZip').value;

    if (email && password && street_address && street_address2 && city_address && state_address && zip_address) {
        const response2 = await fetch('/api/customers', {
            method: 'post',
            body: JSON.stringify({
                email,
                first_name,
                last_name,
                password,
                street_address,
                street_address2,
                city_address,
                state_address,
                zip_address
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