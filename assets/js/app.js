const result = document.querySelector("#result");

// const albumes = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(async () => {
//             try {
//                 const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//                 const data = await response.json();

//                 for (let i = 0; i < 20; i++) {
//                     // console.log(data[i].title);
//                     let li = document.createElement("li");
//                     result.appendChild(li);
//                     li.textContent = `${data[i].title}`;
//                 }

//                 resolve(console.log(`Informacion enviada`));
//             } catch (err) {
//                 reject(`Error por ${err}`);
//             }
//         }, 3000);
//     });
// };

// albumes();

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
        console.log(err);
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
        if (albumes()) {
            console.log(answer);
        }
    } catch (err) {
        console.log(err);
    }
};

msg();
