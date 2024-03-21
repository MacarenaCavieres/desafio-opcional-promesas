const result = document.querySelector("#result");

const albumes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                const data = await response.json();

                for (let i = 0; i < 20; i++) {
                    // console.log(data[i].title);
                    let li = document.createElement("li");
                    result.appendChild(li);
                    li.textContent = `${data[i].title}`;
                }

                resolve(console.log(`Informacion enviada`));
            } catch (err) {
                reject(console.log(err));
            }
        }, 3000);
    });
};

albumes();
