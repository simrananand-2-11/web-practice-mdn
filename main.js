//1. Complete variable and function definitions
 
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array)
{
	const random = Math.floor(Math.random()*array.length);
	return array[random];
}

// 2. raw text strings
let storyText = "It was fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing but was not surpeised - :insertx: weighs 300 pounds and it was a hot day.";
let insertx = ['Willy the Goblin','Big buddy','Father Christmas'];
let inserty = ['the soup kitevchen', 'DisneyLand','The White House'];
let insertz = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//3. Event listener and partial function definition
 randomize.addEventListener('click',result);
 
 function result()
 {
	 if(customName.value !=='')
	 {
		let name = customName.value;
	 }
	 
	 if(document.getElementById("uk").checked)
	 {
		 let weight = Math.round(300);
		 let temperature = Math.round(94);
	 }
	 
	 story.textcontent = ;
	 story.style.visibility ="visible";
 }