let footertext = 'Copyright &copy; 2021 Timeless Hero Productions.';

let info = [
	["Ace is on the case, and he's not alone! The Robotrio character video for Ace McNacho and DANT-1C is out!","C1S2D.webp","Ace in his signature hat and cloak"],
	["Meet Castilles, a nervous but eager bot, and his caretaker Adelpha in this Robotrio character video.","C2S4A.webp","Castilles in a dark alley"],
	["The release date for Season 1 is now revealed!","MSCposter.webp","Series logo and all three robots"],
	["Heracles Engineering Robotics Showcase: DANT-1C","C4DA.webp","DANT-1C near a waterfall"],
	["Season 1 is now released!","sp_cover.webp","The three robots"]
];


function load() {
	let header = '<a href="index.html"><img id="headerlogom" src="images/rs1l.webp" alt="Robotrio logo"/></a>';
	header += '<nav><ul>';
	header += '<li><a href="index.html">HOME</a></li><li><a href="about.html">ABOUT</a></li>';
	header += '<li id="lilogo"><h1><a href="index.html"><img id="headerlogo" src="images/rs1l.webp" alt="Robotrio logo"/></a></h1></li>';
	header += '<li><a href="characters.html">CHARACTERS</a></li><li><a href="media.html">MEDIA</a></li>';
	//header += '<li><a href="cast.html">CAST</a></li><li><a href="crew.html">CREW</a></li>'
	header += '</ul><hr/></nav>';
	//header += '<div id="headerimg"><a class="divlink" href="s1-announce.html"></a></div>';
	document.querySelector('header').innerHTML = header;
	document.querySelector('footer').innerHTML = footertext;
}

function loadb() {
	let header = '<a href="../index.html"><img id="headerlogom" src="../images/rs1l.webp" alt="Robotrio logo"/></a>';
	header += '<nav><ul>';
	header += '<li><a href="../index.html">HOME</a></li><li><a href="../about.html">ABOUT</a></li>';
	header += '<li id="lilogo"><h1><a href="../index.html"><img id="headerlogo" src="../images/rs1l.webp" alt="Robotrio logo"/></a></h1></li>';
	header += '<li><a href="../characters.html">CHARACTERS</a></li><li><a href="../media.html">MEDIA</a></li>';
	//header += '<li><a href="cast.html">CAST</a></li><li><a href="crew.html">CREW</a></li>'
	header += '</ul><hr/></nav>';
	//header += '<div id="headerimg"><a class="divlink" href="s1-announce.html"></a></div>';
	document.querySelector('header').innerHTML = header;
	document.querySelector('footer').innerHTML = footertext;
	//if (document.body.contains(document.getElementById('audioLink'))) {document.getElementById('audioLink').children.innerHTML = 'Listen to the audio version here.';}
	let goBack = '<a href="../index.html"><img alt="Back to Home" style="width:3em;height:3em;margin-top:1em;" src="../images/arrow.svg"/>';
	if (document.body.contains(document.getElementById('backArrow'))) {document.getElementById('backArrow').innerHTML = goBack;}
	
	if (document.body.contains(document.getElementById('iframes'))) {
			let ytCode, spCode, yt, sp;
			ytCode = document.getElementById('iframes').dataset.ytid;
			spCode = document.getElementById('iframes').dataset.spid;
			yt = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ytCode+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
			if (spCode !== 'none') {
				sp = '<iframe src="https://open.spotify.com/embed-podcast/episode/'+spCode+'" style="height:232px;" allowtransparency="true" allow="encrypted-media"></iframe>';
			}
			else {sp = ''};
			document.getElementById('iframes').innerHTML = yt + sp;
	}
}