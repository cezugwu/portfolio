const form = document.getElementById('form');

const showSubmit = () => {
    form.reset();
    const show = document.getElementById('show');

    show.classList.remove('top-[-100%]');
    show.classList.add('top-5');

    setTimeout(() => {
        show.classList.remove('top-5');
        show.classList.add('top-[-100%]');
    }, 3000)
}

const sendEmail = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const title = e.target.title.value;
    const message = e.target.message.value;
    console.log(name, email, title, message);

    showSubmit();

    try {
        let response = await fetch(`https://gezugwu-a919977fc5f2.herokuapp.com/email/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name, 
            email: email, 
            title: title, 
            message: message
        })
        });
        let data = await response.json();
        if (response.status === 200) {
            console.log(data);
        } else {
            console.log('failed to post response');
        }
    } catch (error) {
        console.log('unexpected error', error);
    }
}

form.addEventListener('submit', sendEmail);
