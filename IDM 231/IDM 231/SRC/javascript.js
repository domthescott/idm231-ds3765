function tester() {const assignments = document.getElementById('assignment');
console.log(assignments.textContent)}


const my_element = document.getElementById('startbutton');
my_element.addEventListener('click', () => {console.log('hello')})



const months = {
   1 : January,
   2 : February,
   3 : March,
   4 : April,
   5 : May, 
   6 : June,
   7 : July,
   8 : August,
   9 : September, 
   10 : October,
   11 : November,
   12 : December,
   Jan : 31,
   Feb : 29,
   March : 31,
   April : 30,
   May : 31,
   June : 30,
   July : 31,
   August : 31,
   September : 30,
   October : 31,
   November : 30,
   December: 31,
};

for (let i=1; i < 13; i++) {
    const create_button = document.createElement('button');
    const button_text = document.createTextNode(months.i);
    create_button.appendChild(button_text);

}



for (let i=1; i < 31; i++) {

    const create_button = document.createElement('button'); // Creates button element //
const button_text = document.createTextNode(i); // creates the text for the button which is equal to "i" //
create_button.appendChild(button_text); // appends the "i" text to the button element//

const position = document.getElementsByTagName('p2')[0]; // finds p2//
position.appendChild(create_button); //appends the button with text to p2//
 
create_button.addEventListener('click', () => {console.log(i)}) //adds an event listener to each button//

}

