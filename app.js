// Name:HADI HASSAN
// StudentNum: 040879490
// Email: dahi0030@algonquinlive.com




let firstData = fetch('https://gist.githubusercontent.com/gard0137/d978a3672c361c046d182c748a2b4bb7/raw/a5e9fcafa41c0fbab03aed34679438ed1d03b7b8/lebow.json');
let secondData = fetch('https://gist.githubusercontent.com/gard0137/39b467726693000b9c1074c4c7e59b2b/raw/10cda6a9f7fd2f1f3efa10f6b34e5f5bdb50b88d/archer.json');


let div = document.querySelector('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

let x;

Promise.race([firstData, secondData])
    .then(files => {

        return files.json()


    }).then(data => {

        console.log(data[0].type);



        h1.textContent = data.type;
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