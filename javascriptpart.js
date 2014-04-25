var names = [];
var scores = [];
scores[0] = 0;

var gnames = [];
var gscores = [];
gscores[0] = 0;

var lnames = [];
var lscores = [];
lscores[0] = 0;

var wnames = [];
var wscores = [];
wscores[0] = 0;

var prev;

function fillTables() {
	var clues = document.getElementById("clues");
	clues.innerHTML = " ";
	var games = document.getElementById("games");
	games.innerHTML = " ";
	var longest = document.getElementById("longest");
	longest.innerHTML = " ";
	var win = document.getElementById("wins");
	win.innerHTML = " ";

	var dataRefC = new Firebase("https://clues309.firebaseio.com/users");

	dataRefC.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var name = childSnapshot.val().name;
			var totalClues;

			var dataRefC2 = new Firebase("https://clues309.firebaseio.com/users/" + childSnapshot.name() + "/scores/totalClues");
			dataRefC2.on('value', function(snapshot) {
				totalClues = snapshot.val();
				var i = 0;
				for ( i = 0; i < scores.length; i++) {
					if (totalClues > scores[i]) {
						scores.splice(i, 0, totalClues);
						names.splice(i, 0, name);
						break;
					}
				}
			});
		});

		var j = 0;
		while (j < 10 && j < scores.length - 1) {
			clues.innerHTML += "<tr><td>" + (j + 1) + "</td> <td>" + names[j] + "</td><td>" + scores[j] + " clues</td></tr>";
			j++;
		}
	});

	var dataRefG = new Firebase("https://clues309.firebaseio.com/users");

	dataRefG.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var name = childSnapshot.val().name;
			var totalClues;

			var dataRefG2 = new Firebase("https://clues309.firebaseio.com/users/" + childSnapshot.name() + "/scores/totalGames");
			dataRefG2.on('value', function(snapshot) {
				totalClues = snapshot.val();
				var i = 0;
				for ( i = 0; i < gscores.length; i++) {
					if (totalClues > gscores[i]) {
						gscores.splice(i, 0, totalClues);
						gnames.splice(i, 0, name);
						break;
					}
				}
			});
		});

		var j = 0;
		while (j < 10 && j < gscores.length - 1) {
			games.innerHTML += "<tr><td>" + (j + 1) + "</td> <td>" + gnames[j] + "</td><td>" + gscores[j] + " games</td></tr>";
			j++;
		}
	});

	var dataRefD = new Firebase("https://clues309.firebaseio.com/users");

	dataRefD.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var name = childSnapshot.val().name;
			var totalClues;

			var dataRefD2 = new Firebase("https://clues309.firebaseio.com/users/" + childSnapshot.name() + "/scores/days");
			dataRefD2.on('value', function(snapshot) {
				totalClues = snapshot.val();
				var i = 0;
				for ( i = 0; i < lscores.length; i++) {
					if (totalClues > lscores[i]) {
						lscores.splice(i, 0, totalClues);
						lnames.splice(i, 0, name);
						break;
					}
				}
			});
		});

		var j = 0;
		while (j < 10 && j < lscores.length - 1) {
			longest.innerHTML += "<tr><td>" + (j + 1) + "</td> <td>" + lnames[j] + "</td><td>" + lscores[j] + " days</td></tr>";
			j++;
		}
	});

	var dataRefW = new Firebase("https://clues309.firebaseio.com/users");

	dataRefW.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var name = childSnapshot.val().name;
			var totalClues;

			var dataRefW2 = new Firebase("https://clues309.firebaseio.com/users/" + childSnapshot.name() + "/scores/totalWins");
			dataRefW2.on('value', function(snapshot) {
				totalClues = snapshot.val();
				var i = 0;
				for ( i = 0; i < wscores.length; i++) {
					if (totalClues > wscores[i]) {
						wscores.splice(i, 0, totalClues);
						wnames.splice(i, 0, name);
						break;
					}
				}
			});
		});

		var j = 0;
		while (j < 10 && j < wscores.length - 1) {
			win.innerHTML += "<tr><td>" + (j + 1) + "</td> <td>" + wnames[j] + "</td><td>" + wscores[j] + " wins</td></tr>";
			j++;
		}
	});

	var space = document.getElementById("contentThingy");
	space.innerHTML = " ";

	var about = new Firebase("https://cyventure-manager.firebaseio.com/about");

	about.on('value', function(snapshot) {
		space.innerHTML += snapshot.val();

	});

}

function fillOverview() {
	var space = document.getElementById("contentThingy");
	space.innerHTML = " ";

	var space = document.getElementById("contentThingy");
	space.innerHTML = " ";

	var about = new Firebase("https://cyventure-manager.firebaseio.com/about");

	about.on('value', function(snapshot) {
		space.innerHTML += snapshot.val();

	});

	$(FAQ).removeClass('active');
	$(over).addClass('active');
	$(team).removeClass('active');

}

function fillTeam() {
	var space = document.getElementById("contentThingy");
	space.innerHTML = " ";
	
	space.innerHTML += "<div class='row'>"
	
	 	  + "<div class='col-lg-6'>"
          + "<img class='img-circle' data-src='holder.js/140x140' alt='140x140'"
          + "src='kien.png' style='width: 140px; height: 140px;'>"
          + "<h2>Kien Nguyen</h2>"
          + "<i>Developer</i>"
          + "</div>"
          
          + "<div class='col-lg-6'>"
          + "<img class='img-circle' data-src='holder.js/140x140' alt='140x140'"
          + "src='zach.png' style='width: 140px; height: 140px;'>"
          + "<h2>Zach Plata</h2>"
          + "<i>Developer</i>"
          + "</div>"
          
          + "<div class='col-lg-6'>"
          + "<img class='img-circle' data-src='holder.js/140x140' alt='140x140'"
          + "src='shirley.png' style='width: 140px; height: 140px;'>"
          + "<h2>Shirley Wang</h2>"
          + "<i>Developer</i>"
          + "</div>"
          
          + "<div class='col-lg-6'>"
          + "<img class='img-circle' data-src='holder.js/140x140' alt='140x140'"
          + "src='cami.png' style='width: 140px; height: 140px;'>"
          + "<h2>Cami Williams</h2>"
          + "<i>Developer</i>"
          + "</div>"
        
      	+ "</div>"

	$(FAQ).removeClass('active');
	$(over).removeClass('active');
	$(team).addClass('active');

}

function fillFAQ() {
	var space = document.getElementById("contentThingy");
	space.innerHTML = " ";

	space.innerHTML += "<h4> What if I don't go to Iowa State?</h4>  So far, Cyventure has only been made for Iowa State's campus. You should tell the higher-ups at your school to contact us, so that way we can make a version for you!" + "<h4> How do I move on to the next clue?</h4>  You need to go to the location specified by the clue. This game promotes learning about Iowa State's history and campus, as well as being active." + "<h4> Why can I not use any more hints?</h4> In each game, you have 5 clues at max. Use them wisely!" + "<h4> What if I don't have a Facebook account to login with?</h4> For now, tough noogies, you need one. I am sorry." + "<h4> What if I want to play with friends who do not have Cyventure on their phone?</h4> Tell them that they are silly for not having it and that they should download it immediately. There is also an in-app feature that allows you to invite your friends to download Cyventure." + "<h4> What if I want to play with friends who do not have a Facebook account?</h4> You should tell them to get one so they can play with you!" + "<h4> The creators of Cyventure are extremely attractive. Can I get their numbers? </h4> No, but thanks for asking.";

	$(FAQ).addClass('active');
	$(over).removeClass('active');
	$(team).removeClass('active');
}

var liToSelect = 3;
$(".nav.nav-pills li:eq(" + (liToSelect - 1) + ")").addClass("active");

$(".nav.nav-pills li").on("click", function() {
	$(".nav.nav-pills li").removeClass("active");
	$(this).addClass("active");
}); 