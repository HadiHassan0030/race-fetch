let firstData = fetch('https://jsonbox.io/box_7ebd8cb0b8fb187873ef');
let secondData = fetch('https://jsonbox.io/box_82b5a4aa7a4a71abaa80');


let div = document.querySelector('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

let x;

Promise.race([firstData, secondData])
    .then(files => {

        return files.json()


    }).then(data => {

        console.log(data[0].type);



        h1.textContent = data[0].type;
        document.querySelector('div').appendChild(h1)


        for (i in data[0].data) {

            console.log(data[0].data)

            if (data[0].type == 'The Big Lebowski') {


                let div = document.querySelector('div');
                let p = document.createElement('p');
                let ul = document.createElement('ul')
                let span = document.createElement('span')



                ul.textContent = 'id: ' + data[0].data[i].id;
                document.querySelector('div').insertAdjacentElement('beforeend', ul);


                p.textContent = 'Actor: ' + data[0].data[i].actor;
                document.querySelector('div').insertAdjacentElement('beforeend', p);


                span.textContent = 'Charcter: ' + data[0].data[i].character;
                document.querySelector('div').insertAdjacentElement('beforeend', span);





            }

            if (data[0].type == 'archer') {

                let div = document.querySelector('div');
                let p = document.createElement('p');
                let ul = document.createElement('ul')
                let span = document.createElement('span')


                ul.textContent = 'id: ' + data[0].data[i].id;
                document.querySelector('div').insertAdjacentElement('beforeend', ul);

                p.textContent = 'First Name: ' + data[0].data[i].first_name;
                document.querySelector('div').insertAdjacentElement('beforeend', p);

                span.textContent = 'Last Name: ' + data[0].data[i].last_name;
                document.querySelector('div').insertAdjacentElement('beforeend', span);



            }





        }


        if (data[0].type == 'The Big Lebowski') {
            div.classList.add('lebowski');
        }
        if (data[0].type == 'archer') {
            div.classList.add('archer');
        }






    })
    .catch(err => {
        console.log(err);
    })