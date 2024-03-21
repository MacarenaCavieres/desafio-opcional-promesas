const result = document.querySelector("#result");

const albumes = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json();

        for (let i = 0; i < 20; i++) {
            let li = document.createElement("li");
            result.appendChild(li);
            li.textContent = `${data[i].title}`;
        }
    } catch (err) {
        throw err;
    }
};

// albumes();

const tresSegundos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Informacion enviada");
        }, 3000);
    });
};

const msg = async () => {
    try {
        await albumes();
        const answer = await tresSegundos();
        console.log(answer);
    } catch (err) {
        throw err;
    }
};

msg();
