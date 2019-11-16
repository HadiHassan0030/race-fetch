// let firstData = fetch('https://jsonbox.io/box_7ebd8cb0b8fb187873ef');
// let secondData = fetch('https://jsonbox.io/box_82b5a4aa7a4a71abaa80');
let firstData = fetch('https://gist.githubusercontent.com/prof3ssorSt3v3/22eb7745efdee9e130ed13cc19d85b75/raw/9dd9becedcf05e4392323645f7d8618ff26b1c38/box_7ebd8cb0b8fb187873ef.json');
let secondData = fetch('https://gist.githubusercontent.com/prof3ssorSt3v3/9fcda9dc6d5e94e5689de33b0d9d45f8/raw/f1a89ab08aff538c1a7d4b85d0d7ba76ea92b88e/box_82b5a4aa7a4a71abaa80.json');


let div = document.querySelector('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

let x;

Promise.race([firstData, secondData])
    .then(files => {

        return files.json()


    }).then(data => {

        console.log(data.type);



        h1.textContent = data.type;
        document.querySelector('div').appendChild(h1)


        for (i in data.data) {

            console.log(data.data)

            if (data.type == 'The Big Lebowski') {


                let div = document.querySelector('div');
                let p = document.createElement('p');
                let ul = document.createElement('ul')
                let span = document.createElement('span')



                ul.textContent = 'id: ' + data.data[i].id;
                document.querySelector('div').insertAdjacentElement('beforeend', ul);


                p.textContent = 'Actor: ' + data.data[i].actor;
                document.querySelector('div').insertAdjacentElement('beforeend', p);


                span.textContent = 'Charcter: ' + data.data[i].character;
                document.querySelector('div').insertAdjacentElement('beforeend', span);





            }

            if (data.type == 'archer') {

                let div = document.querySelector('div');
                let p = document.createElement('p');
                let ul = document.createElement('ul')
                let span = document.createElement('span')


                ul.textContent = 'id: ' + data.data[i].id;
                document.querySelector('div').insertAdjacentElement('beforeend', ul);

                p.textContent = 'First Name: ' + data.data[i].first_name;
                document.querySelector('div').insertAdjacentElement('beforeend', p);

                span.textContent = 'Last Name: ' + data.data[i].last_name;
                document.querySelector('div').insertAdjacentElement('beforeend', span);



            }





        }


        if (data.type == 'The Big Lebowski') {
            div.classList.add('lebowski');
        }
        if (data.type == 'archer') {
            div.classList.add('archer');
        }






    })
    .catch(err => {
        console.log(err);
    })