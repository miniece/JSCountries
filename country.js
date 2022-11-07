class Country {
	constructor(name, lang, greeting, colors) {
		this.name = name;
		this.lang = lang;
		this.greeting = greeting;
		this.colors = colors;
	}
}
let usa = new Country('USA', 'Murican', 'Why Hello there world! Have some McDonalds', [ 'red', 'white', 'blue' ]);
let mexico = new Country('Mexico', 'Spanish', 'Hola mundo!', [ 'red', 'white', 'green' ]);
let algeria = new Country('Algeria', 'Arabic and Berber', 'Sup', [ 'green', 'white', 'red' ]);
let ireland = new Country('Ireland', 'Irish and English', 'Hiagh', [ 'green', 'white', 'orange' ]);
let germany = new Country('Germany', 'German', 'Hallo', [ 'black', 'red', 'yellow' ]);

function SwitchCountry() {
	let input = document.getElementById('CountryList').value;
	let country;

	if (input === 'USA') {
		country = usa;
		document.getElementById('Color1').style.backgroundColor = `${country.colors[0]}`;
		document.getElementById('Color2').style.backgroundColor = `${country.colors[1]}`;
		document.getElementById('Color3').style.backgroundColor = `${country.colors[2]}`;
		document.getElementById('CountryName').innerHTML = `<p>${country.name}</p>`;
		document.getElementById('OfficialLanguage').innerHTML = `<p>${country.lang}</p>`;
		document.getElementById('HelloWorld').innerHTML = `<p>${country.greeting}</p>`;
		document.getElementById(
			'image'
		).innerHTML = `<img src="https://as1.ftcdn.net/v2/jpg/02/33/77/74/1000_F_233777406_FiXPY6OpW7r9ZyrIWEwyUDjZLO61TNGY.jpg"/>`;
	} else if (input === 'Mexico') {
		country = mexico;
		document.getElementById('Color1').style.backgroundColor = `${country.colors[0]}`;
		document.getElementById('Color2').style.backgroundColor = `${country.colors[1]}`;
		document.getElementById('Color3').style.backgroundColor = `${country.colors[2]}`;
		document.getElementById('CountryName').innerHTML = `<p>${country.name}</p>`;
		document.getElementById('OfficialLanguage').innerHTML = `<p>${country.lang}</p>`;
		document.getElementById('HelloWorld').innerHTML = `<p>${country.greeting}</p>`;
		document.getElementById(
			'image'
		).innerHTML = `<img src="https://previews.123rf.com/images/therenderfish/therenderfish1406/therenderfish140600002/29240127-a-cute-and-funny-soccer-character-holding-the-national-flag-of-mexico-and-a-horn-dressed-in-the-colo.jpg"/>`;
	} else if (input === 'Algeria') {
		country = algeria;
		document.getElementById('Color1').style.backgroundColor = `${country.colors[0]}`;
		document.getElementById('Color2').style.backgroundColor = `${country.colors[1]}`;
		document.getElementById('Color3').style.backgroundColor = `${country.colors[2]}`;
		document.getElementById('CountryName').innerHTML = `<p>${country.name}</p>`;
		document.getElementById('OfficialLanguage').innerHTML = `<p>${country.lang}</p>`;
		document.getElementById('HelloWorld').innerHTML = `<p>${country.greeting}</p>`;
		document.getElementById(
			'image'
		).innerHTML = `<img src="https://previews.123rf.com/images/therenderfish/therenderfish1406/therenderfish140600020/29277053-a-cute-and-funny-soccer-character-holding-the-national-flag-of-algeria-and-a-horn-dressed-in-the-col.jpg"/>`;
	} else if (input === 'Ireland') {
		country = ireland;
		document.getElementById('Color1').style.backgroundColor = `${country.colors[0]}`;
		document.getElementById('Color2').style.backgroundColor = `${country.colors[1]}`;
		document.getElementById('Color3').style.backgroundColor = `${country.colors[2]}`;
		document.getElementById('CountryName').innerHTML = `<p>${country.name}</p>`;
		document.getElementById('OfficialLanguage').innerHTML = `<p>${country.lang}</p>`;
		document.getElementById('HelloWorld').innerHTML = `<p>${country.greeting}</p>`;
		document.getElementById(
			'image'
		).innerHTML = `<img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/4-dabbing-leprechaun-funny-st-patricks-day-irish-flag-apparel-michael-s.jpg"/>`;
	} else if (input === 'Germany') {
		country = germany;
		document.getElementById('Color1').style.backgroundColor = `${country.colors[0]}`;
		document.getElementById('Color2').style.backgroundColor = `${country.colors[1]}`;
		document.getElementById('Color3').style.backgroundColor = `${country.colors[2]}`;
		document.getElementById('CountryName').innerHTML = `<p>${country.name}</p>`;
		document.getElementById('OfficialLanguage').innerHTML = `<p>${country.lang}</p>`;
		document.getElementById('HelloWorld').innerHTML = `<p>${country.greeting}</p>`;
		document.getElementById(
			'image'
		).innerHTML = `<img src="https://previews.123rf.com/images/chudtsankov/chudtsankov1606/chudtsankov160600070/58231800-happy-soccer-ball-cartoon-mascot-character-holding-a-flag-of-germany.jpg"/>`;
	}
}
