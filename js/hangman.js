(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 960,
	height: 640,
	fps: 24,
	color: "#F7E1AF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.stick2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#756E54").ss(7,2,0,3).p("ABzheIjlC9");
	this.shape.setTransform(11.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-4.9,32.9,28.9);


(lib.stick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#756E54").ss(5,2,0,3).p("AgEkXIAJIv");
	this.shape.setTransform(0.5,28);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,6.1,61.1);


(lib.rope = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#756E54").ss(7,2,0,3).p("AAAhPIAACf");
	this.shape.setTransform(0,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,7,23);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#756E54").ss(5.8,2,0,3).p("AhlhlQAqgrA7AAQA8AAAqArQArAqAAA7QAAA8grAqQgqArg8AAQg7AAgqgrQgrgqAAg8QAAg7Argqg");
	this.shape.setTransform(14.5,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6753D").s().p("AhlBmQgqgqgBg8QABg6AqgrQArgqA6gBQA8ABAqAqQAqArAAA6QAAA8gqAqQgqAqg8AAQg6AAgrgqg");
	this.shape_1.setTransform(14.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-2.8,34.7,34.7);


(lib.button_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#242077").s().p("AxUFoQhkAAAAhkIAAoGQAAhlBkABMAipAAAQBkgBAABlIAAIGQAABkhkAAg");
	this.shape.setTransform(121,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,72);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6753D").s().p("AnZH0QhlAAABhkIAAseQgBhlBlABIOzAAQBlgBAABlIAAMeQAABkhlAAg");
	this.shape.setTransform(50,50,0.87,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.playButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.text = new cjs.Text("PLAY", "bold 50px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 64;
	this.text.lineWidth = 182;
	this.text.setTransform(113.4,3.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:NaN},0).wait(1).to({_off:true},1).wait(1));

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.427],0.6,-120.9,-0.5,121).s().p("AxUFoQhkAAAAhkIAAoGQAAhlBkABMAipAAAQBkgBAABlIAAIGQAABkhkAAg");
	this.shape.setTransform(121,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3));

	// back
	this.instance = new lib.button_back();
	this.instance.setTransform(121,36,1,1,0,0,0,121,36);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,251,82);


(lib.LetterPad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.196],0.9,-57.5,-0.9,57.5).s().p("AmbHzQhYAAAAhjIAAsfQAAhjBYgBIM3AAQBYABgBBjIAAMfQABBjhYAAg");
	this.shape.setTransform(20,20,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.tf = new cjs.Text("A", "bold 30px 'Myriad Pro'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 39;
	this.tf.lineWidth = 29;
	this.tf.setTransform(17.5,0.9);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	// back
	this.instance = new lib.back();
	this.instance.setTransform(20,20,0.4,0.4,0,0,0,50,50);
	this.instance.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,48,48);


(lib.LetterHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.196],0.9,-57.5,-0.9,57.5).s().p("AmbHzQhYAAAAhjIAAsfQAAhjBYgBIM3AAQBYABgBBjIAAMfQABBjhYAAg");
	this.shape.setTransform(40,40,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.tf = new cjs.Text("A", "bold 50px 'Myriad Pro'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 64;
	this.tf.lineWidth = 53;
	this.tf.setTransform(38,7.1);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	// back
	this.instance = new lib.back();
	this.instance.setTransform(40,40,0.8,0.8,0,0,0,50,50);
	this.instance.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,88,88);


(lib.GuessHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.196],0.9,-57.5,-0.9,57.5).s().p("AmbHzQhYAAAAhjIAAsfQAAhjBYgBIM3AAQBYABgBBjIAAMfQABBjhYAAg");
	this.shape.setTransform(40,40,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// text
	this.tf = new cjs.Text("A", "bold 50px 'Myriad Pro'", "#FFFFFF");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 64;
	this.tf.lineWidth = 53;
	this.tf.setTransform(38,7.1);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

	// back
	this.instance = new lib.back();
	this.instance.setTransform(40,40,0.8,0.8,0,0,0,50,50);
	this.instance.shadow = new cjs.Shadow("rgba(118,0,0,1)",0,0,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-9,102,102);


(lib.backButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.text = new cjs.Text("BACK", "bold 50px 'Myriad Pro'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 64;
	this.text.lineWidth = 182;
	this.text.setTransform(113.4,3.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({_off:true},1).wait(1));

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.427],0.6,-120.9,-0.5,121).s().p("AxUFoQhkAAAAhkIAAoGQAAhlBkABMAipAAAQBkgBAABlIAAIGQAABkhkAAg");
	this.shape.setTransform(121,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3));

	// back
	this.instance = new lib.button_back();
	this.instance.setTransform(121,36,1,1,0,0,0,121,36);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,251,82);


// stage content:



(lib.hangman = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var that = this;
		var title = "hangman";
		var arr = title.split('');
		for (var k in arr) {
			this[arr[k] + k].tf.text = arr[k].toUpperCase();
		}
		this.playButton.addEventListener('click', function () {
			that.gotoAndStop(1);
		});
	}
	this.frame_1 = function() {
		this.stop();
		
		
		var wordtoGuess, wordLength, badGuess, correctGuess;
		var letterPad = {};
		var wordPad = {},
			badGuess = 0,
			correctGuess = 0,
			wordtoGuess = getWord(),
			wordLength = wordtoGuess.length;
		this.theWord = wordtoGuess;
		
		var hangman = ['rope', 'head', 'body', 'hand1', 'hand2', 'leg1', 'leg2'];
		for (var z in hangman) {
			this[hangman[z]].visible = false;
		}
		
		this['bad_guess'].text = '0';
		this['bad_guess'].text = '0';
		
		var xWord = 75;
		var yWord = 500;
		//alert(wordtoGuess);
		
		for (var i = 0; i < wordLength; i++) {
			wordPad['word_' + i] = new lib.GuessHolder();
			wordPad['word_' + i].tf.text = '';
			wordPad['word_' + i].x = xWord + i * 90;
			wordPad['word_' + i].y = yWord;
			this.addChild(wordPad['word_' + i]);
		}
		
		var that = this;
		var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		
		var xValue = 530;
		var yValue = 200;
		
		for (var counter = 0; counter < 26; counter++) {
			letterPad['pad_' + abc[counter]] = new lib.LetterPad();
			letterPad['pad_' + abc[counter]].tf.text = abc[counter];
			letterPad['pad_' + abc[counter]].tf.en
			letterPad['pad_' + abc[counter]].x = xValue + (counter % 6) * 50;
			letterPad['pad_' + abc[counter]].y = yValue + parseInt((counter / 6)) * 50;
			letterPad['pad_' + abc[counter]].addEventListener('click', getLetter);
			this.addChild(letterPad['pad_' + abc[counter]]);
		}
		
		function getLetter(e) {
			var obj = e.target;
			var letter;
			if (obj instanceof createjs.Text) {
				letter = obj.text;
			}
			else if (obj instanceof createjs.Shape) {
				letter = obj.parent.tf.text;
			}
			else{
				letter = obj.tf.text;
			}
			
			checkLetter(letter);
			
		}
		
		
		function checkLetter(letter) {
			var wrongGuess = true;
			for (var j = 0; j < wordLength; j++) {
				if (wordtoGuess.charAt(j) === letter.toLowerCase()) {
					wordPad['word_' + j].tf.text = letter.toUpperCase();
					wrongGuess = false;
					correctGuess++;
					that['good_guess'].text = correctGuess;
					if (correctGuess == wordLength) {
						removeAll();
						that.gotoAndStop(3);
					}
				}
			}
		
			if (wrongGuess) {
				badGuess++;
				that['bad_guess'].text = badGuess;
				drawHangman();
			}
		}
		
		function drawHangman() {
			var target = that[hangman[badGuess - 1]];
			target.visible = true;
			target.alpha = 0;
			createjs.Tween.get(target).to({
				alpha: 1
			}, 1000).call(onComplete);
		
		}
		
		function onComplete() {
			if (badGuess == hangman.length) {
				removeAll();
				that.gotoAndStop(2);
			}
		}
		
		function removeAll() {
			for (var k in letterPad) {
				that.removeChild(letterPad[k]);
			}
			for (var m in wordPad) {
				that.removeChild(wordPad[m]);
			}
		}
		// Select random word to guess
		
		function getWord() {
			var a = new Array('abate', 'aberrant', 'abscond', 'accolade', 'acerbic', 'acumen', 'adulation', 'adulterate', 'aesthetic', 'aggrandize', 'alacrity', 'alchemy', 'amalgamate', 'ameliorate', 'amenable', 'anachronism', 'anomaly', 'approbation', 'archaic', 'arduous', 'ascetic', 'assuage', 'astringent', 'audacious', 'austere', 'avarice', 'aver', 'axiom', 'bolster', 'bombast', 'bombastic', 'bucolic', 'burgeon', 'cacophony', 'canon', 'canonical', 'capricious', 'castigation', 'catalyst', 'caustic', 'censure', 'chary', 'chicanery', 'cogent', 'complaisance', 'connoisseur', 'contentious', 'contrite', 'convention', 'convoluted', 'credulous', 'culpable', 'cynicism', 'dearth', 'decorum', 'demur', 'derision', 'desiccate', 'diatribe', 'didactic', 'dilettante', 'disabuse', 'discordant', 'discretion', 'disinterested', 'disparage', 'disparate', 'dissemble', 'divulge', 'dogmatic', 'ebullience', 'eccentric', 'eclectic', 'effrontery', 'elegy', 'eloquent', 'emollient', 'empirical', 'endemic', 'enervate', 'enigmatic', 'ennui', 'ephemeral', 'equivocate', 'erudite', 'esoteric', 'eulogy', 'evanescent', 'exacerbate', 'exculpate', 'exigent', 'exonerate', 'extemporaneous', 'facetious', 'fallacy', 'fawn', 'fervent', 'filibuster', 'flout', 'fortuitous', 'fulminate', 'furtive', 'garrulous', 'germane', 'glib', 'grandiloquence', 'gregarious', 'hackneyed', 'halcyon', 'harangue', 'hedonism', 'hegemony', 'heretical', 'hubris', 'hyperbole', 'iconoclast', 'idolatrous', 'imminent', 'immutable', 'impassive', 'impecunious', 'imperturbable', 'impetuous', 'implacable', 'impunity', 'inchoate', 'incipient', 'indifferent', 'inert', 'infelicitous', 'ingenuous', 'inimical', 'innocuous', 'insipid', 'intractable', 'intransigent', 'intrepid', 'inured', 'inveigle', 'irascible', 'laconic', 'laud', 'loquacious', 'lucid', 'luminous', 'magnanimity', 'malevolent', 'malleable', 'martial', 'maverick', 'mendacity', 'mercurial', 'meticulous', 'misanthrope', 'mitigate', 'mollify', 'morose', 'mundane', 'nebulous', 'neologism', 'neophyte', 'noxious', 'obdurate', 'obfuscate', 'obsequious', 'obstinate', 'obtuse', 'obviate', 'occlude', 'odious', 'onerous', 'opaque', 'opprobrium', 'oscillation', 'ostentatious', 'paean', 'parody', 'pedagogy', 'pedantic', 'penurious', 'penury', 'perennial', 'perfidy', 'perfunctory', 'pernicious', 'perspicacious', 'peruse', 'pervade', 'pervasive', 'phlegmatic', 'pine', 'pious', 'pirate', 'pith', 'pithy', 'placate', 'platitude', 'plethora', 'plummet', 'polemical', 'pragmatic', 'prattle', 'precipitate', 'precursor', 'predilection', 'preen', 'prescience', 'presumptuous', 'prevaricate', 'pristine', 'probity', 'proclivity', 'prodigal', 'prodigious', 'profligate', 'profuse', 'proliferate', 'prolific', 'propensity', 'prosaic', 'pungent', 'putrefy', 'quaff', 'qualm', 'querulous', 'query', 'quiescence', 'quixotic', 'quotidian', 'rancorous', 'rarefy', 'recalcitrant', 'recant', 'recondite', 'redoubtable', 'refulgent', 'refute', 'relegate', 'renege', 'repudiate', 'rescind', 'reticent', 'reverent', 'rhetoric', 'salubrious', 'sanction', 'satire', 'sedulous', 'shard', 'solicitous', 'solvent', 'soporific', 'sordid', 'sparse', 'specious', 'spendthrift', 'sporadic', 'spurious', 'squalid', 'squander', 'static', 'stoic', 'stupefy', 'stymie', 'subpoena', 'subtle', 'succinct', 'superfluous', 'supplant', 'surfeit', 'synthesis', 'tacit', 'tenacity', 'terse', 'tirade', 'torpid', 'torque', 'tortuous', 'tout', 'transient', 'trenchant', 'truculent', 'ubiquitous', 'unfeigned', 'untenable', 'urbane', 'vacillate', 'variegated', 'veracity', 'vexation', 'vigilant', 'vilify', 'virulent', 'viscous', 'vituperate', 'volatile', 'voracious', 'waver', 'zealous');
			return a[parseInt(Math.random() * a.length)];
		}
	}
	this.frame_2 = function() {
		this.stop();
		this.lost_word.text = this.theWord;
		var that = this;
		this.lost_back.addEventListener('click', function () {
			that.gotoAndStop(0);
		});
	}
	this.frame_3 = function() {
		this.stop();
		this.won_word.text = this.theWord;
		var that = this;
		this.won_back.addEventListener('click', function () {
			that.gotoAndStop(0);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// actions
	this.bad_guess = new cjs.Text("0", "bold 30px 'Myriad Pro'", "#C6753D");
	this.bad_guess.name = "bad_guess";
	this.bad_guess.textAlign = "center";
	this.bad_guess.lineHeight = 39;
	this.bad_guess.lineWidth = 35;
	this.bad_guess.setTransform(914.6,46.6);

	this.good_guess = new cjs.Text("0", "bold 30px 'Myriad Pro'", "#C6753D");
	this.good_guess.name = "good_guess";
	this.good_guess.textAlign = "center";
	this.good_guess.lineHeight = 39;
	this.good_guess.lineWidth = 35;
	this.good_guess.setTransform(632.4,46.6);

	this.text = new cjs.Text("Bad Guess", "bold 30px 'Myriad Pro'", "#C6753D");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 185;
	this.text.setTransform(784.3,46.6);

	this.text_1 = new cjs.Text("Good Guess", "bold 30px 'Myriad Pro'", "#C6753D");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 185;
	this.text_1.setTransform(505.1,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1},{t:this.text},{t:this.good_guess},{t:this.bad_guess}]},1).to({state:[]},1).wait(2));

	// buttons
	this.playButton = new lib.playButton();
	this.playButton.setTransform(359.1,377.4);
	this.playButton.cache(-5,-5,255,86);
	new cjs.ButtonHelper(this.playButton, 0, 1, 2, false, new lib.playButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playButton).to({_off:true},1).wait(3));

	// title
	this.a5 = new lib.LetterHolder();
	this.a5.setTransform(664.4,260.2,1,1,0,0,0,40,40);

	this.n6 = new lib.LetterHolder();
	this.n6.setTransform(760.7,260.2,1,1,0,0,0,40,40);

	this.m4 = new lib.LetterHolder();
	this.m4.setTransform(568.1,260.2,1,1,0,0,0,40,40);

	this.g3 = new lib.LetterHolder();
	this.g3.setTransform(471.9,260.2,1,1,0,0,0,40,40);

	this.n2 = new lib.LetterHolder();
	this.n2.setTransform(375.6,260.2,1,1,0,0,0,40,40);

	this.a1 = new lib.LetterHolder();
	this.a1.setTransform(279.4,260.2,1,1,0,0,0,40,40);

	this.h0 = new lib.LetterHolder();
	this.h0.setTransform(193.1,270.2,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.h0},{t:this.a1},{t:this.n2},{t:this.g3},{t:this.m4},{t:this.n6},{t:this.a5}]}).to({state:[]},1).wait(3));

	// man
	this.rope = new lib.rope();
	this.rope.setTransform(249.4,82.4,1,1.563,0,0,0,0,8);
	this.rope.visible = false;

	this.leg2 = new lib.stick2();
	this.leg2.setTransform(263.9,269.4,1,1,0,0,180,11.5,9.5);
	this.leg2.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.leg2.visible = false;

	this.hand2 = new lib.stick2();
	this.hand2.setTransform(268.9,206.4,1,1,0,0,180,11.5,9.5);
	this.hand2.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.hand2.visible = false;

	this.leg1 = new lib.stick2();
	this.leg1.setTransform(235.9,269.4,1,1,0,0,0,11.5,9.5);
	this.leg1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.leg1.visible = false;

	this.hand1 = new lib.stick2();
	this.hand1.setTransform(235.9,206.4,1,1,0,0,0,11.5,9.5);
	this.hand1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.hand1.visible = false;

	this.body = new lib.stick();
	this.body.setTransform(251.4,209.9,2,1.786,0,0,0,0.5,28);
	this.body.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.body.visible = false;

	this.head = new lib.head();
	this.head.setTransform(249.4,127.9,1.724,1.724,0,0,0,14.5,14.5);
	this.head.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);
	this.head.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.head},{t:this.body},{t:this.hand1},{t:this.leg1},{t:this.hand2},{t:this.leg2},{t:this.rope}]},1).to({state:[]},1).wait(2));

	// board
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8D6D58").ss(12,2,0,3).p("Ai/D8IF/n3");
	this.shape.setTransform(128.1,95.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8D6D58").ss(12,2,0,3).p("AsHAGIYPgL");
	this.shape_1.setTransform(183.8,64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8D6D58").ss(12,2,0,3).p("AAAdcMAAAg63");
	this.shape_2.setTransform(107.5,253.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8D6D58").ss(12,2,0,3).p("Ax6AAMAj2AAA");
	this.shape_3.setTransform(190.5,445.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

	// lost
	this.lost_word = new cjs.Text("Word is", "bold 40px 'Myriad Pro'", "#242077");
	this.lost_word.name = "lost_word";
	this.lost_word.textAlign = "center";
	this.lost_word.lineHeight = 52;
	this.lost_word.lineWidth = 339;
	this.lost_word.setTransform(643.7,249.5);

	this.text_2 = new cjs.Text("Word is", "bold 40px 'Myriad Pro'", "#C6753D");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 52;
	this.text_2.lineWidth = 339;
	this.text_2.setTransform(643.7,159.9);

	this.lost_back = new lib.backButton();
	this.lost_back.setTransform(516.8,391.7);
	new cjs.ButtonHelper(this.lost_back, 0, 1, 2, false, new lib.backButton(), 3);

	this.text_3 = new cjs.Text("YOU LOST", "bold 80px 'Myriad Pro'", "#C6753D");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 101;
	this.text_3.lineWidth = 476;
	this.text_3.setTransform(651.7,36.8);

	this.rope_1 = new lib.rope();
	this.rope_1.setTransform(249.4,82.4,1,1.563,0,0,0,0,8);

	this.leg2_1 = new lib.stick2();
	this.leg2_1.setTransform(263.9,269.4,1,1,0,0,180,11.5,9.5);
	this.leg2_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.hand2_1 = new lib.stick2();
	this.hand2_1.setTransform(268.9,206.4,1,1,0,0,180,11.5,9.5);
	this.hand2_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.leg1_1 = new lib.stick2();
	this.leg1_1.setTransform(235.9,269.4,1,1,0,0,0,11.5,9.5);
	this.leg1_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.hand1_1 = new lib.stick2();
	this.hand1_1.setTransform(235.9,206.4,1,1,0,0,0,11.5,9.5);
	this.hand1_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.body_1 = new lib.stick();
	this.body_1.setTransform(251.4,209.9,2,1.786,0,0,0,0.5,28);
	this.body_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.head_1 = new lib.head();
	this.head_1.setTransform(249.4,127.9,1.724,1.724,0,0,0,14.5,14.5);
	this.head_1.shadow = new cjs.Shadow("rgba(246,91,27,1)",0,0,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#8D6D58").ss(12,2,0,3).p("Ai/D8IF/n3");
	this.shape_4.setTransform(128.1,95.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#8D6D58").ss(12,2,0,3).p("AsHAGIYPgL");
	this.shape_5.setTransform(183.8,64);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8D6D58").ss(12,2,0,3).p("AAAdcMAAAg63");
	this.shape_6.setTransform(107.5,253.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8D6D58").ss(12,2,0,3).p("Ax6AAMAj2AAA");
	this.shape_7.setTransform(190.5,445.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.head_1},{t:this.body_1},{t:this.hand1_1},{t:this.leg1_1},{t:this.hand2_1},{t:this.leg2_1},{t:this.rope_1},{t:this.text_3},{t:this.lost_back},{t:this.text_2},{t:this.lost_word}]},2).to({state:[]},1).wait(1));

	// won
	this.text_4 = new cjs.Text("This is a hangman game sample that is created using HTML5 Canvas document and can be published to  HTML5. The sample has Java Script code snippets for interactivity.", "13px 'Myriad Pro'", "#99FF99");
	this.text_4.lineHeight = 18;
	this.text_4.lineWidth = 975;
	this.text_4.setTransform(0,-43);

	this.won_word = new cjs.Text("Word is", "bold 40px 'Myriad Pro'", "#242077");
	this.won_word.name = "won_word";
	this.won_word.textAlign = "center";
	this.won_word.lineHeight = 52;
	this.won_word.lineWidth = 339;
	this.won_word.setTransform(477.4,356.6);

	this.text_5 = new cjs.Text("Word is", "bold 40px 'Myriad Pro'", "#C6753D");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 52;
	this.text_5.lineWidth = 339;
	this.text_5.setTransform(477.4,267.1);

	this.won_back = new lib.backButton();
	this.won_back.setTransform(359.1,476.9);
	new cjs.ButtonHelper(this.won_back, 0, 1, 2, false, new lib.backButton(), 3);

	this.text_6 = new cjs.Text("CONGRATS \nYOU WON", "bold 80px 'Myriad Pro'", "#C6753D");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 101;
	this.text_6.lineWidth = 541;
	this.text_6.setTransform(481.1,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_6},{t:this.won_back},{t:this.text_5},{t:this.won_word},{t:this.text_4}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(621.1,538.2,665.6,238.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;