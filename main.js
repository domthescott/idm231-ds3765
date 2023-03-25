
// Each of these functions represents a pokemon Selection. Each one carries out two purposes. 
// It shows the modal screen of the correct pokemon, and plays the corresponding audio. This function
// triggers whenever the user clicks an image of a pokemon, and whenever they finish entering their
// birth information.


function Sawsbucktrigger() {Modal1.showModal();
let audio = new Audio("Audio/sawsbuck.mp3");
audio.play();
}

function Simipourtrigger() {Modal2.showModal();
let audio = new Audio("Audio/simipour.mp3");
audio.play();
}

function Alomomolatrigger() {Modal3.showModal();
let audio = new Audio("Audio/alomomola.mp3");
audio.play();}

function Whimsicottatrigger() {Modal4.showModal();
   let audio = new Audio("Audio/whimsicott.mp3");
   audio.play();}

function Bouffalanttatrigger() {Modal5.showModal();
   let audio = new Audio("Audio/bouffalant.mp3");
      audio.play();}

function Klinktrigger() {Modal6.showModal();
   let audio = new Audio("Audio/klink.mp3");
      audio.play();}

function Crustletrigger() {Modal7.showModal();
   let audio = new Audio("Audio/crustle.mp3");
      audio.play();}

function Braviarytrigger() {Modal8.showModal();
   let audio = new Audio("Audio/braviary.mp3");
      audio.play();}

function Gothoritatrigger() {Modal9.showModal();
   let audio = new Audio("Audio/gothorita.mp3");
      audio.play();}

function Lampenttrigger() {Modal10.showModal();
       let audio = new Audio("Audio/lampent.mp3");
           audio.play();}

function Scolipedetrigger() {Modal11.showModal();
       let audio = new Audio("Audio/scolipede.mp3");
           audio.play();}

function Fraxuretrigger() {Modal12.showModal();;
       let audio = new Audio("Audio/fraxure.mp3");
           audio.play();}


// This section is devoted to making the modals Work. Each is stored in a variable,
// and each one can be opened by clicking an image of a pokemon or by entering a Date
// of birth. Each modal has an exit button to close it.


const Modal1 = document.getElementById("modal1");
const openModal1 = document.getElementById("modalbutton1");
const closeModal1 = document.getElementsByClassName ("button close-button1")[0];
openModal1.addEventListener('click', () => {Sawsbucktrigger()})
closeModal1.addEventListener('click', () => {Modal1.close();})

const Modal2 = document.getElementById("modal2");
const openModal2 = document.getElementById("modalbutton2");
const closeModal2 = document.getElementsByClassName ("button close-button2")[0];
openModal2.addEventListener('click', () => {Simipourtrigger()})
closeModal2.addEventListener('click', () => {Modal2.close();})

const Modal3 = document.getElementById("modal3");
const openModal3 = document.getElementById("modalbutton3");
const closeModal3 = document.getElementsByClassName ("button close-button3")[0];
openModal3.addEventListener('click', () => {Alomomolatrigger()})
closeModal3.addEventListener('click', () => {Modal3.close();})

const Modal4 = document.getElementById("modal4");
const openModal4 = document.getElementById("modalbutton4");
const closeModal4 = document.getElementsByClassName ("button close-button4")[0];
openModal4.addEventListener('click', () => {Whimsicottatrigger()})
closeModal4.addEventListener('click', () => {Modal4.close();})

const Modal5 = document.getElementById("modal5");
const openModal5 = document.getElementById("modalbutton5");
const closeModal5 = document.getElementsByClassName ("button close-button5")[0];
openModal5.addEventListener('click', () => {Bouffalanttatrigger()})
closeModal5.addEventListener('click', () => {Modal5.close();})

const Modal6 = document.getElementById("modal6");
const openModal6 = document.getElementById("modalbutton6");
const closeModal6 = document.getElementsByClassName ("button close-button6")[0];
openModal6.addEventListener('click', () => {Klinktrigger()})
closeModal6.addEventListener('click', () => {Modal6.close();})

const Modal7 = document.getElementById("modal7");
const openModal7 = document.getElementById("modalbutton7");
const closeModal7 = document.getElementsByClassName ("button close-button7")[0];
openModal7.addEventListener('click', () => {Crustletrigger()})
closeModal7.addEventListener('click', () => {Modal7.close();})

const Modal8 = document.getElementById("modal8");
const openModal8 = document.getElementById("modalbutton8");
const closeModal8 = document.getElementsByClassName ("button close-button8")[0];
openModal8.addEventListener('click', () => {Braviarytrigger()})
closeModal8.addEventListener('click', () => {Modal8.close();})

const Modal9 = document.getElementById("modal9");
const openModal9 = document.getElementById("modalbutton9");
const closeModal9 = document.getElementsByClassName ("button close-button9")[0];
openModal9.addEventListener('click', () => {Gothoritatrigger()})
closeModal9.addEventListener('click', () => {Modal9.close();})

const Modal10 = document.getElementById("modal10");
const openModal10 = document.getElementById("modalbutton10");
const closeModal10 = document.getElementsByClassName ("button close-button10")[0];
openModal10.addEventListener('click', () => {Lampenttrigger()})
closeModal10.addEventListener('click', () => {Modal10.close();})

const Modal11 = document.getElementById("modal11");
const openModal11 = document.getElementById("modalbutton11");
const closeModal11 = document.getElementsByClassName ("button close-button11")[0];
openModal11.addEventListener('click', () => {Scolipedetrigger()})
closeModal11.addEventListener('click', () => {Modal11.close();})

const Modal12 = document.getElementById("modal12");
const openModal12 = document.getElementById("modalbutton12");
const closeModal12 = document.getElementsByClassName ("button close-button12")[0];
openModal12.addEventListener('click', () => {Fraxuretrigger()})
closeModal12.addEventListener('click', () => {Modal12.close();})


// the "startbuttondata" array is a way of ensuring that the start button cannot be clicked over and over again
// to generate endless month and day buttons. When there is a "1" in the first pocket of the array, the start button
// can be used. When this pocket is empty, the start button cannot be used. There is a function to add a 1 to this
// pocket, and a function to subtract a 1 from the pocket. By using these functions, I can control when the start
// button is usable.

let startbuttondata = [1]
function starbuttonsubtract() {startbuttondata.pop()}
function startbuttonadd() {startbuttondata.unshift(1)}

// the "reset" function triggers whenever the user has succesfully entered a birth Date. It puts a 1 into the start button
// array and makes the button visible. This is in place so that the user can enter a birthdate any number of Times .

function reset() {
startbuttonadd()
my_element.className = "visible"
}

// myArray holds the user's birth data. The month and date of birth are stored here and are read later on in the script
// to determine the user's pokemon.

let myArray = []


// this object defines how many days can be in each monthdata. This is so that each month button creates the correct number of days
// to prevent invalid birthdates from being selected.

const monthdata = {
    January : 31,
    Februrary : 29,
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




const my_element = document.getElementById('startbutton'); // this finds the start button //
my_element.addEventListener('click', () => {if (startbuttondata[0] === 1) // this if statement makes sure that the event listener only works when there is a 1 in the pocket of the startbuttondata
                                                                           // Array. As mentioned Before , this is to prevent the button from being clicked over and over again.
   
                                                                   
   {

my_element.className = "invisible"    //  this makes the start button invisible until it is needed again    

   starbuttonsubtract()  //  this disables the start button until it is needed again   



// the following section uses a for in loop which references the object which defines how many days are in each month. 
// "cycle" is set to a number which corresponds to the number of days of each month. In other words, 12 month buttons
// are created, each of which will create a number of buttons equal to the number of days within the month. If the user 
// clicks January, there will be 31 day buttons. If the user clicks April, there will only be 30.

   for (let cycle in monthdata){const create_button = document.createElement('button'); // Creates button element //
const button_text = document.createTextNode(cycle); // creates the text for the button which is equal to "cycle" //
create_button.appendChild(button_text); // appends the "cycle" text to the button element//
const position = document.getElementsByTagName('p3')[0]; // finds p3//
position.appendChild(create_button); //appends the stuff to p3//
;



create_button.addEventListener('click', () => // this is the event listener which each month button has. Clicking any of them will remove all of them to make room for the day buttons.



{
   
   
 while (position.firstChild) {position.removeChild(position.lastChild)} //this loop removes each of the month buttons
 
  myArray.unshift(cycle) // this logs the month that the user chose in myArray to be read later.
  
  
  for (let i=1; i < monthdata[cycle] + 1; i++) { //this loop creates a number of day buttons that corresponds to the month the user selected 
 const create_button = document.createElement('button'); // Creates button element //
const button_text = document.createTextNode(i); // creates the text for the button which is equal to "i" //
create_button.appendChild(button_text); // appends the "i" text to the button element//
const dosition = document.getElementsByTagName('p3')[0]; // finds p3//
dosition.appendChild(create_button); //appends the button with text to p3//
 
create_button.addEventListener('click', () => {
   

    while (dosition.firstChild) {dosition.removeChild(dosition.lastChild)}//each day button has an event listener that removes all of the day buttons when clicked.
    myArray.unshift(i)//the event listener also logs the date that the user chose into myArray to be read later
    
    zodiac()//this triggers a function which reads the data that the user has logged and determines which pokemon it corresponds to
    reset()// this triggers the reset function which readies the startbutton to be usable again so that the user can repeat the process.

}) 



}})}}}



) 


function zodiac() {//this function looks at the user's birth data and determines which pokemon it corresponds with. Then, it triggers a functin activates the corresponding modal and plays the corresponding sound.
    
if (myArray[1] == 'December' && myArray[0] >= 22 || myArray[1] == 'January' && myArray[0] <= 19)
{Sawsbucktrigger()}
else if ((myArray[1] == 'January' && myArray[0] >= 20 || myArray[1] == 'Februrary' && myArray[0] <= 18))
{Simipourtrigger()}
else if ((myArray[1] == 'Februrary' && myArray[0] >= 19 || myArray[1] == 'March' && myArray[0] <= 20))
{Alomomolatrigger()}
else if ((myArray[1] == 'March' && myArray[0] >= 21 || myArray[1] == 'April' && myArray[0] <= 19))
{Whimsicottatrigger()}
else if ((myArray[1] == 'April' && myArray[0] >= 20 || myArray[1] == 'May' && myArray[0] <= 20))
{Bouffalanttatrigger()}
else if ((myArray[1] == 'May' && myArray[0] >= 21 || myArray[1] == 'June' && myArray[0] <= 20))
{Klinktrigger()}
else if ((myArray[1] == 'June' && myArray[0] >= 21 || myArray[1] == 'July' && myArray[0] <= 22))
{Crustletrigger()}
else if ((myArray[1] == 'July' && myArray[0] >= 23 || myArray[1] == 'August' && myArray[0] <= 22))
{Braviarytrigger()}
else if ((myArray[1] == 'August' && myArray[0] >= 23 || myArray[1] == 'September' && myArray[0] <= 22))
{Gothoritatrigger()}
else if ((myArray[1] == 'September' && myArray[0] >= 23 || myArray[1] == 'October' && myArray[0] <= 22))
{Lampenttrigger()}
else if ((myArray[1] == 'October' && myArray[0] >= 23 || myArray[1] == 'November' && myArray[0] <= 21))
{Scolipedetrigger()}
else if ((myArray[1] == 'November' && myArray[0] >= 22 || myArray[1] == 'December' && myArray[0] <= 21))
{Fraxuretrigger()}



}








