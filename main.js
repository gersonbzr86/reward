function dis_num3() {
	document.getElementById("online2").innerHTML = eenum2;
	var e = Math.floor(10 * Math.random() + 1);
	5 >= e ? eenum2 += Math.floor(10 * Math.random() + 1) : eenum2 -= Math.floor(10 * Math.random() + 1), ee = setTimeout("dis_num3()", 1e3)
}

function rng(e, o) {
	return Math.floor(Math.random() * (o - e + 1) + e)
}

function Random(e, o) {
	return Math.floor(Math.random() * (o - e) + e)
}

function ChatAddEntry(e, o) {
	"" != e && "" != o && ($('<div class="livechatChatEntry"><span class="livechatEntryUserName">[' + ChatDate.getHours() + ":" + ChatDate.getFullMinutes() + "]  " + e + ':</span><span class="livechatEntryContent">' + o + "</span></div>").appendTo("#livechatChatContent").hide(0).fadeIn(250), $("#livechatChatContent").scrollTop($("#livechatChatContent")[0].scrollHeight))
}

function ChatLog(e) {
	$('<div class="livechatChatEntry"><span class="ChatNotification">' + e + "</span></div>").appendTo("#livechatChatContent").hide(0).fadeIn(250), $("#livechatChatContent").scrollTop($("#livechatChatContent")[0].scrollHeight)
}

function ChatStart() {
	var e = function () {
		setTimeout(function () {
			var o = ChatUserNames[Random(0, ChatUserNames.length - 1)],
				a = ChatContent[Random(0, ChatContent.length - 1)];
			ChatAddEntry(o, a), e()
		}, Random(1e3, 15e3))
	};
	e()
}
$(document).ready(function () {
	function e(e, o) {
		var a = e * o.width() / 100;
		o.find("div").animate({
			width: a
		}, 500).html(e + "%&nbsp;")
	}

	function o(e, o) {
		var a = e * o.width() / 100;
		o.find("div").animate({
			width: a
		}, 500).html(e + "%&nbsp;")
	}

	function a(e, o) {
		var a = e * o.width() / 100;
		o.find("div").animate({
			width: a
		}, 500).html(e + "%&nbsp;")
	}

	function i() {
		$("#account-information-wrapper").fadeOut(50), $("#resources-select-wrapper").fadeOut(500, function () {
			$("#processing-wrapper").fadeIn(500, function () {
				var e = $("#account-username").val(),
					o = $("#account-platform").val(),
					i = $("#slider-futcoins").slider("option", "value"),
					t = $("#slider-futpoints").slider("option", "value"),
					n = $(".console-message");
				$(window).width() < 600 && window.scrollTo(0, $("#processing-wrapper").offset().top), setTimeout(function () {
					$(".starting-loading-wrapper").fadeIn(), n.text("Carregando arquivos..."), a(3, $("#progressBarConsole"))
				}, 0), setTimeout(function () {
					n.text("Preparando Arquivos..."), a(15, $("#progressBarConsole"))
				}, 1e3), setTimeout(function () {
					n.text("Carregando..."), a(18, $("#progressBarConsole"))
				}, 1800), setTimeout(function () {
					n.html("Procurando por nome de usuário <span class='console-message-connected-item'>" + e + "</span> ..."), a(22, $("#progressBarConsole"))
				}, 3e3), setTimeout(function () {
					n.html("Conectando-se ao seu nome de usuário <span class='console-message-connected-item'>" + e + "</span> conectado <span class='console-message-connected-item'>" + o + "</span> Plataforma"), $(".starting-loading-wrapper").fadeOut(500, function () {
						$(".console-username-wrapper").fadeIn(), $(".console-platform-wrapper").fadeIn(500)
					}), a(26, $("#progressBarConsole"))
				}, 5e3), setTimeout(function () {
					n.html("Conectado com sucesso ao nome de usuário <span class='console-message-connected-item'>" + e + "</span>"), $("#console-username-value").text($("#account-username").val()), $("#console-platform-value").text($("#account-platform").val()), $("#console-success-confirmation-username").fadeIn(), $("#console-success-confirmation-platform").fadeIn(), $(".console-message").addClass("pulse animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
						$(this).removeClass("pulse animated")
					}), a(30, $("#progressBarConsole"))
				}, 8e3), setTimeout(function () {
					n.html("Preparando-se para gerar seus recursos"), a(35, $("#progressBarConsole"))
				}, 1e4), setTimeout(function () {
					n.html("Gerando pacotes de ouro para sua conta grátis"), a(38, $("#progressBarConsole"))
				}, 11e3), setTimeout(function () {
					n.html("Gerando <span class='console-message-connected-item'>" + i + "</span> Free Fire ouros"), $(".console-futcoins-wrapper").fadeIn(500, function () {
						var e = $("#slider-futcoins").slider("option", "value");
						$("#console-futcoins-value").countTo({
							from: 0,
							to: e,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (e, o) {
								return e.toFixed(o.decimals)
							}
						})
					}), a(42, $("#progressBarConsole"))
				}, 12500), setTimeout(function () {
					n.html("<span class='console-message-connected-item'>" + i + "</span> <span class='console-message-success'>Free Fire ouros Gerado com Sucesso</span>"), $("#console-success-confirmation-futcoins").fadeIn(), $(".console-message").addClass("pulse animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
						$(this).removeClass("pulse animated")
					}), a(55, $("#progressBarConsole"))
				}, 16e3), setTimeout(function () {
					n.html("Gerando Pacotes de Diamantes Agora"), a(58, $("#progressBarConsole"))
				}, 18e3), setTimeout(function () {
					n.html("Gerando <span class='console-message-connected-item'>" + t + "</span> Free Fire Diamantes"), $(".console-futpoints-wrapper").fadeIn(500, function () {
						var e = $("#slider-futpoints").slider("option", "value");
						$("#console-futpoints-value").countTo({
							from: 0,
							to: e,
							speed: 2500,
							refreshInterval: 10,
							formatter: function (e, o) {
								return e.toFixed(o.decimals)
							}
						})
					}), a(62, $("#progressBarConsole"))
				}, 19500), setTimeout(function () {
					n.html("<span class='console-message-connected-item'>" + t + "</span> <span class='console-message-success'>Free Fire Diamonds Generated Successfully</span>"), $("#console-success-confirmation-futpoints").fadeIn(), $(".console-message").addClass("pulse animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
						$(this).removeClass("pulse animated")
					}), a(74, $("#progressBarConsole"))
				}, 23e3), setTimeout(function () {
					n.html("<span class='console-message-success'>Geramos todos os recursos com sucesso</span>"), a(80, $("#progressBarConsole"))
				}, 24900), setTimeout(function () {
					n.html("Otimizando Pacotes Gerados"), a(84, $("#progressBarConsole"))
				}, 25900), setTimeout(function () {
					n.html("Limpeza de traços de injeção"), a(90, $("#progressBarConsole"))
				}, 27e3), setTimeout(function () {
					n.html("Realizando a Verificação Humana"), a(93, $("#progressBarConsole"))
				}, 28e3), setTimeout(function () {
					n.html("<span class='console-message-error'>Falha na verificação humana automática</span>"), a(93, $("#progressBarConsole"))
				}, 3e4), setTimeout(function () {
					n.html("<span class='console-message-connected-item'>Verificação manual humana necessária</span>"), $(".console-message").addClass("pulse animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
						$(this).removeClass("pulse animated")
					}), a(93, $("#progressBarConsole"))
				}, 32500), setTimeout(function () {
					$("#human-verification").fadeIn(), n.html("Seus recursos serão adicionados depois que você concluir a Verificação humana."), $(window).width() < 600 && window.scrollTo(0, $("#human-verification").offset().top)
				}, 33500)
			})
		})
	}

	function t() {
		return u[rng(0, u.length - 1)]
	}
	setTimeout(function () {
		$("body").addClass("loaded")
	}, 100), e(20, $("#progressBar"));
	var n = $("#futcoins-amount-wrapper"),
		s = $("<div id='slider-futcoins'></div>").insertAfter(n).slider({
			min: 2e3,
			max: 5e4,
			value: 2e3,
			range: "min",
			change: function (o, a) {
				var i = $("#slider-futcoins").slider("option", "value");
				$("#futcoins-amount").html(i), "2000" == i ? (e(20, $("#progressBar")), $("#decrease-futcoins").addClass("btn-disabled"), $(".max-amount-Golds").fadeOut()) : "10000" == i ? (e(40, $("#progressBar")), $("#decrease-futcoins").removeClass("btn-disabled")) : "20000" == i ? e(60, $("#progressBar")) : "30000" == i ? (e(80, $("#progressBar")), $("#increase-futcoins").removeClass("btn-disabled"), $(".max-amount-Golds").fadeOut()) : "50000" == i && (e(100, $("#progressBar")), $("#increase-futcoins").addClass("btn-disabled"), $(".max-amount-Golds").fadeIn())
			}
		});
	$("#increase-futcoins").click(function () {
		var e = $("#slider-futcoins").slider("option", "value");
		s.slider("value", e + 2e3)
	}), $("#decrease-futcoins").click(function () {
		var e = $("#slider-futcoins").slider("option", "value");
		s.slider("value", e - 2e3)
	}), o(20, $("#progressBarPoints"));
	var r = $("#futpoints-amount-wrapper"),
		l = $("<div id='slider-futpoints'></div>").insertAfter(r).slider({
			min: 2e3,
			max: 5e4,
			value: 2e3,
			range: "min",
			change: function (e, a) {
				var i = $("#slider-futpoints").slider("option", "value");
				$("#futpoints-amount").html(i), "2000" == i ? (o(20, $("#progressBarPoints")), $("#decrease-futpoints").addClass("btn-disabled"), $(".max-amount-points").fadeOut()) : "10000" == i ? (o(40, $("#progressBarPoints")), $("#decrease-futpoints").removeClass("btn-disabled")) : "20000" == i ? o(60, $("#progressBarPoints")) : "30000" == i ? (o(80, $("#progressBarPoints")), $("#increase-futpoints").removeClass("btn-disabled"), $(".max-amount-points").fadeOut()) : "50000" == i && (o(100, $("#progressBarPoints")), $("#increase-futpoints").addClass("btn-disabled"), $(".max-amount-points").fadeIn())
			}
		});
	$("#increase-futpoints").click(function () {
		var e = $("#slider-futpoints").slider("option", "value");
		l.slider("value", e + 2e3)
	}), $("#decrease-futpoints").click(function () {
		var e = $("#slider-futpoints").slider("option", "value");
		l.slider("value", e - 2e3)
	}), $("#first-step-button").click(function () {
		$("#account-information-wrapper").fadeIn(250), $("#close-account-information-wrapper").click(function () {
			$("#account-information-wrapper").fadeOut(100)
		})
	}), a(1, $("#progressBarConsole")), $("#second-step-button").click(function () {
		"" != $("#account-username").val() ? i() : swal("Error", "Por favor insira seu ID", "error")
	}), $(".popup-tos").magnificPopup({
		type: "inline",
		preloader: !1
	}), $(".popup-contact").magnificPopup({
		type: "inline",
		preloader: !1
	}), $(".popup-pp").magnificPopup({
		type: "inline",
		preloader: !1
	}), $(".f-s").fancySelect();
	var u = ["img/comment-images/user-img-1.png", "img/comment-images/user-img-2.png", "img/comment-images/user-img-3.png", "img/comment-images/user-img-4.png", "img/comment-images/user-img-5.png", "img/comment-images/user-img-6.png", "img/comment-images/user-img-7.png", "img/comment-images/user-img-8.png", "img/comment-images/user-img-9.png", "img/comment-images/user-img-10.png"];
	$(".comment-username-image-wrapper-1").html("<img class='comment-username-image img-responsive' src='" + t() + "'/>"), $(".comment-username-image-wrapper-2").html("<img class='comment-username-image img-responsive' src='" + t() + "'/>"), $(".comment-username-image-wrapper-3").html("<img class='comment-username-image img-responsive' src='" + t() + "'/>")
});
var ee, eenum2 = 334;
dis_num3();
var ChatReplied = !1,
	ChatDate = new Date,
	ChatUserName = "",
	ChatUserNames = ["KidBengala", "TueGayMano?", "TueGayMano?", "EuNãoTuQueDeixa", "Bianca", "José", "Pedro Formagini", "30CM", "XVIDEOS", "Marcelo", "TueGayMano?", "GarenaFDP", "DorGasF_Gostoso", "Putinha", "ArianaBR", "Vagabundo", "171", "BandidoMau", "Traficante", "Silas Malafaia", "Pastor", "Satan666", "Japonês", "EaiNego", "Facebook", "Google", "ZéRuela898", "SuaMãeÉMinha", "SuaMãeÉPuta", "SuaMãeDe4", "SuaMãeMamando", "CaralhoNego", "Brasileiro", "TCP 333", "Comando Vermelho", "Trajado", "EnoisCaralho", "Tudo2", "DeusÉTudo", "Negão444", "BlackN444", "B4K", "Loud Bradock", "Pettiz TV", "Loud Coringa", "Loud Babi", "Loud Mob", "DorGasF", "BR PORRA", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "SouGay", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "Goldsenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "GoldsStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe","CaseOpened","otte","wutroletoplay","Thurtle","Dodo8","Frostalicious","bobqinXD","MrCarter","Hellkey","Chimonaa1","DaBoxII","GVVicious","Jummychu","PAlNLESS","LiLBunnyFuFuu","Lukeeeeeeeeee","Lattman","Daserer","AlliancePatrick","Lionsexual","St1xxay","Kojolika","CSTCris","KojotheCat","StellaLoussier","Gleebglarbu","Altrum","RiotMeyeA","Rule18","mandatorycloud","Tritan","LiquidDominate","cidadedecack","RoA","BillyBoss","xPepastel","TaketheDraw","ST2g","Migipooop","dKiWiKid","NMEflareszx","Gundamu","imp","DDABONG","Daydreamin","Nightlie","MRHIGHLIGHTREEL","Shweeb","JinMori","Tailsz","Bischu","CRBRakin","Chaox","Grigne","LogicalDan","DAKular","DifferentSword","Geranimoo","InnoX","FishingforUrf","FluffyKittens206","ImJinAh","CloudNguyen","moonway","whoishe","TiensiNoAkuma","Ethil","nothinghere","SuperMetroid","hiimgosu","Mammon","BGJessicaJung","coBBz","waitingforu","LearningToPIay","YiOwO","heavenTime","AnDa","WakaWaka","hashinshin","TDKKez","MariaCreveling","Cypress","YahooDotCom","Phanimal","Aror","RFLegendary","BenNguyen","AHHHHHHHHH","Linsanityy","Valkrin","Gate","Allorim","Johnp0t","Superrrman","Laughing","AKAPapaChau","denoshuresK","Anthony","Nightblue3","Aranium","Pallione","BamfDotaPlayer","FakerSama","xiaolan","Sweept","HooManDu","XiaoWeiXiao","HctMike","Revenge","Apauloh","latebloomer","CRBFyre","MongolWarrior","Hiphophammer","CoachLFProTeam","hiimria","Jackoo","Saskio","DadeFakerPawn","GVStvicious","NeonSurge","NMEBodydrop","MatLifeTriHard","PantsareDragon","GinormousNoob","IMbz","miqo","VoyboyCARRY","Hakuho","Hexadecimal","themassacre8","Ayr","SeaHorsee","F0rtissimo","GamerXz","Remie","Soghp","Raimazz","Ultimazero","bigfatlp","NMETrashyy","C9LOD","Popuh","SAGASUPVEIGM","Iamagoodboy","TrollerDog","Descraton","LiquidInoriTV","MiniMe","IlIlIIIlIIIIlIII","Shweebie","KatLissEverdeen","PoppersOP","B1GKr1T","DGB","stephyscute2","TEESEMM","Cyprincess","baohando","urbutts","maplestreeTT","jamee","SawitonReddit","VeryBitter","BenignSentinel","MrJuvel","Denny","LeeGuitarStringa","DKrupt","LAGEhsher","eLLinOiSe","MochiBalls","Sonnynot6","ixou","Taeyawn","Dezx","7hThintoN","BeautifulKorean","VwSTeesum","TLIWDominate","Vsepr","ktSmurf","Vultix","Soredemo","ROBERTxLEE","AnnieBot","aksn1per","IamFearless","FrostyLights","SoYung","Tuoooor","Polx","Agolite","CloudWater","Delta","LAGOrbwalk","sexycan","SimonHawkes","Rohammers","NMEInnoX","ChineseJester","IAmDoughboy","Cytosine","Vanxer","SDiana2","Araya","TheItalianOne","F1Flow","Kazahana","Malajukii","xiaoweiba","JoshMabrey","shinymew","Event","freelancer18","ZnipetheDog","hiitsviper","HappyBirfdizzay","Abou222","Gir1shot2diamond","KiNGNidhogg","PurpleFloyd","Rathul","Kwaku","BeachedWhaIe","14h","Xpecial","CLGThink","Aiciel","oerh","butttpounder","TalkPIayLove","jordank","TwistyJuker","MeganFoxisGG","NiHaoDyLan","TallerACE","Doomtrobo","Wardrium","TwtchTviLoveSezu","Westrice","iMysterious","BennyHung","EnmaDaiO","xTc4","FallenBandit","RumbIeMidGG","deft1","GochuHunter","XxRobvanxX","DuoChiDianShi","coLBubbadub","LeBulbe","TanHat","Dusty","Jibberwackey","Tallwhitebro","llllllllllllIIII","LilBuu","Diamond","cesuna","BigolRon","xSojin","Gh3ttoWatermelon","KingofMemes","111094Jrh","bive","Yammy","FasScriptor","Docxm","GVBunnyFuFuu","Alphabetical","Liquidzig","YouHadNoDream","TINYHUEVOS","Sheepx","GangstaSwerve","LeBulbetier","amandagugu","Rushmore","AnnieCHastur","OverlordForte","Muffintopper66","Kazura","zetsuen","wozhixiangyin","CaptainNuke","alextheman","Seongmin","Working","kyaasenpaix3","gurminder","VwSKhoachitizer","TGZ","KrucifixKricc","Kevnn","Academiic","ArianaLovato","Elemia","CLGDeftsu","XerbeK","CeIestic","RedEyeAkame","Kerpal","xFSNSaber","MakNooN","Hcore","MrGamer","zeralf","Fenixlol","Indivisible","SHOWMETHEMONEY","Adorations","Niqhtmarex","RambointheJungle","Iucid","iOddOrange","Uncover","DD666666","r0b0cop","VictoricaDebloiz","Gleebglarb","EmperorSteeleye","SillyAdam","WWWWWWWWWWWWWWMW","tempname456543","FeedOn","iJesus69","OmegaB","Riftcrawl","Xandertrax","Krymer","TwistedSun","DeTRFShinmori","RiceFox","iKoogar","Mizuji","White","zgerman","FORG1VENliftlift","sakurafIowers","xSaury","PiPiPig","Pyrr","TheCptAmerica","NtzNasty","SlowlyDriftnAway","cre4tive","LAGGoldsenShiv","FSNDLuffy","NintendudeX","duliniul","Cybody","Odete49","TFBlade","Platoon","CopyCat","BarbecueRibs","TitanDweevil","HeroesOfTheStorm","JRT94","RedBerrrys","Rockblood","YoloOno","BalmungLFT","IreliaCarriesU","LikeAMaws","PaulDano","ErzaScarIet","KiritoKamui","ProofOfPayment","DonPorks","BarronZzZ","Pikaboo","aLeo","MikeytheBully","7Qing","BillyBossXD","DragonRaider","Haughty","KMadClowns","ikORY","Nikkone","WeixiaTianshi","QQ346443922","FoxDog","Tahx","Hawk","Haruka","Scrumm","cackgod","iAmNotSorry","coLROBERTO","GladeGleamBright","MonkeyDufle","M1ssBear","theletter3","Sandrew","RongRe","MrGatsby","xBlueMoon","Merryem","ElkWhisperer","Enticed","Draguner","DeliciousMilkGG","Patoy","Lucl3n3Ch4k0","Smoian","Piaget","Xiaomi","zeflife","IsDatLohpally","HatersWantToBeMe","Blackmill","PrinceChumpJohn","NhatNguyen","Nebulite","IAmTheIRS","TedStickles","LOD","CallMeExtremity","kimjeii","Kappasun","JJJackstar","TSMMeNoHaxor","Zealous","Normalize","Topcatz","KimchimanBegins","DrawingPalette","AnarchyofDinh","hiimxiao","MikeHct","Manco","ChumpJohnsTeemo","Heejae","delirous","Iodus","WakaWakaWak","Hawez","ThaOGTschussi","TwistedFox","PureCorruption","HotshotGG","Turdelz","ysohardstylez","Brainfre3z","ilyTaylor","Zaineking","QualityADC","LingTong","DyrudeJstormRMX","AnObesePanda","silvermidget","CornStyle","LafalgarTaw","Zeyzal","Meowwwwwww","Pokemorph","JimmyHong","Hoardedsoviet","Nematic","C9Yusui","BlownbyJanna","Sojs","Cerathe","FairieTail","Xeralis","ichibaNNN","SerenityKitty","Contractz","WWvvWvvWvvwWwvww","BlueHole","SAGANoPause","Mookiez","RiotChun","ValkrinSenpai","HeXrisen","CptJack","Sleepyz","HurricaneJanna","ToxiGood","ItsYourChoice","TaintedDucky","probablycoL","Ina","FreeGaming","Phaxen","tofumanoftruth","xHeroofChaos","Rockllee","Sunohara","Ryzer","SpiritDog","Kazma","Sjvir","Maulface","SombreroGalaxy","Bebhead","ecco","AurionKratos","RoseByrne","Kammgefahr","VwSSandvich","TDKLouisXGeeGee","Picarus","erwinbooze","xrawrgasm","Tangularx","CSauce","Back2Nexus","SepekuAW","Chuuper","Airtom","pro711","Theifz","SirhcEezy","LuckyLone56","AtomicN","Splorchicken","00000000","UpAIlNight","k3soju","MikeyC","s7efen","FENOMENO","XIVJan","Splorgen","djpocketchange","Oasis","Iggypop","BallsInYourFace","dopa7","MasterDragonKing","ssforfail","MissyQing","Endlesss","badeed","SmooshyCake","Karmix","Alestz","svbk","KissMeRDJ","TeaMALaoSong","drallaBnayR","CHRISTHORMANN","KnivesMillions","MahNeega","Sphinx","Impasse","Stefono62","CLGEasy","GankedFromAbove","IslandLager","MrJuneJune","BrianTheis","ShorterACE","morippe","Meatmush","Dusey","Paperkat","Submit","TooPro4u","Porogami","iuzi","Suzikai","TDKNear","LiquidInori","Deleted","NtzLeopard","UnKooL","Desu","Born4this","sickening","AllianceMike","Dinklebergg","YouGotFaker","FusionSin","IMBAYoungGooby","Neverlike","BestGodniviaNA","FFat20GGWP","kMSeunG","AliBracamontes","rua0311desuyo","54Bomb99","jivhust","Penguinpreacher","Yashimasta","Erurikku","ReeferChiefer420","WonderfulTea","Gamely","OberonDark","Imunne","Hoeji","xTearz","NicoleKidman","DonDardanoni","Wonderfuls","HentaiKatness69","Ayai","EREnko","Cruzerthebruzer","Connort","Anoledoran","BiggestNoob","Anangelababy007","TrojanPanda","MasterCoach","Kirmora","wswgou","NMEotterr","DragonxCharl","uJ3lly","Adolf Hitler","Ana","Adriana","Pedro","LegacyofHao","DkBnet","koreas","AxelAxis","NiMaTMSiLe","Preachy","WoahItsJoe","XXRhythmMasterXX","Lemin","Destinedwithin","Afflictive","Nydukon","Herald0fDeath","ChowPingPong","QuanNguyen","interest","Slylittlefox121","VictimOfTalent","chadiansile","iToradorable","BIackWinter","Mazrer","NKSoju","nhocBym","Dreemo","Virus","CowGoesMooooo","Masrer","Michaelcreative","Emanpop","Druiddroid","KevonBurt","Magicians","HiImYolo","LoveSick","kamonika","Chunkyfresh","tongsoojosim","hiimrogue","Zookerz","LiShengShun","DeTFMYumenoti","EddieMasao","AGilletteRazor","andtheknee","Hazedlol","SrsBznsBro","Spreek","Toxil","JustinJoe","Silverblade12345","WalterWhiteOG","SwiftyNyce","Volt","DoctorElo","Connie","DELLZOR","aiopqwe","MidnightBoba","Sikeylol","Warmogger","Melhsa","OmekoMushi","Life","SleepyDinosaur","Leonard","CatVomit","Likang45","PSiloveyou","xtsetse","ClydeBotNA","Cpense","Arakune","shadowshifte","LeeBai","SexualSavant","CornChowder","DeTRFEsteL","Astro","deDeezer","Jayms","v1anddrotate","JGLafter","UhKili","Aceyy","Zik","RiNDiN","Grandederp","KawaiiTheo","Senjogahara","Th3FooL","GusTn","TheTyrant","GoJeonPa","DJJingYun","Egotesticle","IoveLu","OGNEunJungCho","kevybear","ImJas","Agrorenn","Synxia","DouyuTVForgottt","GrimSamurai","6666666666666","RockleeCtrl","Xode","QQ459680082","KittenAnya","Zakard","MARSIRELIA","WallOfText","SireSnoopy","kelppowder","Hxadecimal","onelaugh","MisoMango","PiggyAzalea","MisterDon","VirginEmperor","suzuXIII","P18GEMEINV","Kurumz","kjin","CcLiuShicC","ExileOfTheBlade","Iambbb","Fubguns","Asutarotto","WhatisLove","Niqhtmarea","L0LWal","JannaFKennedy","Steffypoo","KillerHeedonge","AsianSGpotato","whiteclaw","GATOAmyTorin","lovemyRMB","Frostarix","voyyboy","Melo","RiotZALE","ElvishGleeman","givesyouwiings","LoveIy","Packy","Ntzsmgyu","Susice","Dontqqnubz","mikeshiwuer","Chulss","MASTERDING","Scorpionz","KKOBONG","Veeless","NtzMoon","Leesinwiches","RefuseFate","TP101","ozoss0","SeaShell","Baesed","Foolish","jivhust1","KMadKing","CHRlSS","jbraggs","BeefTacos","Xoqe","Naeim","Aerodactyl","Triett","194IQredditor","Pulzar","Windgelu","Suadero","Zulgor","Senks","cAbstracT","SwagersKing","AkameBestGirl","ThePrimaryEdict","arthasqt","Lobstery","MisterOombadu","TheFriendlyDofu","Oryziaslatipes","ugg1","Flandoor","HawkStandard","wimbis","JimmerFredette","VikingKarots","Sorcerawr","Ciscla","Suffix","MrCow","METALCHOCOB0","Dessias","LevelPerfect","midVox","Junha","Hickus","gamepiong","AirscendoSona","HellooKittie","Jesse","Rainaa","ILoveNASoloQ","Colonelk1","DeTRFZerost","Szmao","TacoKat","1tzJustVictor","HomedogPaws","DioDeSol","PeterBrown","FrannyPack","AbsoluteFridges","TheBiddler","ELMdamemitai","Old","Pavle","nathanielbee","MakiIsuzuSento","nweHuang","EvanRL","yorozu","forgivenbow","alexxisss","Cloverblood","Entities","Believe","Chiruno","Xiaobanma","BestJanna","Neko","TheEyeofHorus","IGotSunshine","Shade20","Racker","Imacarebear","Kenleebudouchu","LockDownExec","Chubymonkey","HunterHagen","Applum","DaoKho","MrBlackburn","beatmymeat","BestDota2Sona","chubbiercheeks","KillaKast","Betsujin","TheAmberTeahouse","BellaFlica","ManateeWaffles","Babalew","charmanderu","TooSalty","LotusBoyKiller","Bulgogeeeee","Nerzhu1","Lovelyiris","QuantumFizzics","freakingnoodles","Pdop1","Bakudanx","Martel","DoctorDoom","equalix","CARDCAPTORCARD","Dyad","Papasmuff","TheBroskie","Corno","Princesa","Wingsofdeathx","IamOsiris","ArtThief","LotusEdge","fwii","Kios","Shampu","Nickpappa","Yukari","RayXu","Emeraldancer","TwoPants","EnzoIX","Jacka","Plumber","Skadanton","C9TGleebglarbu","BonQuish","GrimmmmmmmReaper","SmoSmoSmo","MewtMe","Ramzlol","Mruseless","Eitori","S0lipsism","X1337Gm4uLk03rX","lloveOreo","MrChivalry","Oyt","AnVu","RBbabbong","MASTERROSHl","dabestmelon","Potatooooooooooo","KasuganoHaru","C9BalIs","stainzoid","MrArceeSenpaiSir","sweetinnocence","Firehazerd","EpicLynx","2011","PandaCoupIe","Moelon","KingKenneth","Skinathonian","FelixCC","snowmine","Acme","QmoneyAKAQdollas","Fexir","ImbaDreaMeR","ImNovel","ButtercupShawty","touch","penguin","Promitio","DeTRFMoyashi","Hordstyle","Iizard","Jintae","pichumy","Upu","Iemonlimesodas","TwitchTvAuke","Promises","Jintea","OMikasaAckermanO","wompwompwompwomp","Kiyoon","LiquidNyjacky","ATColdblood","SandPaperX","0Sleepless","pr0llylol","AxelsFinalFlame","DrSeussGRINCH","ZENPhooka","oMizu","HamSammiches","Pcboy","RamenWithCheese","Yook","Dafreakz","Winno","XxWarDoomxX","LifelessEyes","UrekMazin0","FrenchLady","Pillowesque","GodOfZed","D3cimat3r","broIy","1stTimeDraven","Exxpression","godofcontrol","nokappazone","Shoopufff","IlIIlIIIlIIIIIII","Fragnat1c","Abidius","irvintaype","YellOwish","japanman","CaristinnQT","LeithaI","Kitzuo","Akatsuki","ROBERTZEBRONZE","aenba","Arcenius","Torgun","Ryden7","Entus","CutestNeo","MonkeyDx","Xerosenkio","JHHoon","DeTFMCeros","Rakinas","MetaRhyperior","MegaMilkGG","EmilyVanCamp","SecretofMana","Snidstrat","SJAero","Mixture","Teaz89","ArizonaGreenTea","AKASIeepingDAWG","sh4pa","Hanjaro","BestFelixNA","Dragles","TummyTuck","sciberbia","KLucid","Isunari","lAtmospherel","Zwag","yuBinstah","ionz","Nove","Nickywu","BlueRainn","lilgrim","Rekeri","Kaichu","Arnold","ArcticPuffin11","UnholyNirvana","IREGlNALD"],ChatContent=["How much stuff can I generate?","Anyone tried this already?","Does it work in NA?","Why this is so easy lol?","This is incredible, never thought it would work.","Eu coloquei 10000 de moeda's, mal posso esperar para começar.","Usando no celular, funcionou só uma vez, funciona sem falhas.","Alguém pode me ajudar com a oferta?","OMG!","LOL!","ROFL!","Real","haha","easy","bro","O que posso fazer aqui?","Cala a boca cara adoro esse site","Oi pessoal","Quanto ouro você fez até agora?","o que acontece com as ofertas no celular?","Isso está funcionando?","Quanto tempo você tem que esperar?","Sim","No","I know","Exactly why this is so good","uhm","adorei","valeu recebi a mensagem no meu whats e antrei aqui pra conferir.","alguem me explica por favor, como é que eu faço pra utilizar esse site?","valeu por ter me ai por ter me mostrado esse sitestema.","Cool =)","<message deleted>","oh god","damn","Eu amei que criou isso aqui hoooo","e serio que isso aqui funciona?","meu amigo me falo que funcionou com ele, vou testar agora.","yo guys dont spam okay?","anyone up for a game?","tudo certo agora vou, finaliza aqui os procedimentos, se os diamantes cherem mesmo na minha conta, eu volto aqui e deixo o meu comentário...","porque aqui na minha conta só funcionou uma vez?","Alguma ideia de quanto tempo leva para o as moedas chegar na minha conta?","tão feliz que eu encontrei este","vocês assistem Game of Thrones?","Obrigado <3","apenas Uau","Isso funciona mesmo no iPad!","um amigo me contou sobre isso","obrigado a quem quer que seja o dono deste gerador lol","onde eu coloquei meu nome de usuário?","até agora eu estou gostando disso","o que vocês tem a dizer sobre esse site pessoal?","adeus pessoal","ok eu apliquei obrigado","quanto você pode gerar com esse sistema?","incrível","no meu demoru 10 minutos ","precisa ir agora","brb","Você deveria tentar","não me arrependo de estar aqui","nossa é real","nossa que impressionante","caras isso é tão fácil, leva menos de um minuto..","Alguém pode fazer isso por mim? Meu nome de usuário é brazilinaronaldo","alguém sabe me dizer como que a garena deixa funcionar um sistema desse?","este jogo suga noobs haha","Unlimited pls","hoje é dia de sorte..","este é o melhor site gerador online porque todos nós temos mais do que uma chance.","Eu acho que todo mundo aqui tem algo","quando posso jogar eu sou novo para isso","Isso realmente funciona no Mobile?","as moedas e os diamantes expiram?","eu digitei o nick da minha namorada e enviei pra ela, moedas e diamantes, quando ela for abrir a conta vai ficar surpresa.","ate que eu gostei, não vou metir.","engraçado como isso funciona, mas faz como sempre","oi novamente estou aqui para mais utilizar mais uma vez esse sistema","como vou usar esse site pessoal?","isso funcionou lol","poxa eu não consigo mais usar o sistema novamente, mais pelo menos eu já conseguir 5 mil diamantes na minha conta do free fire","de onde todos vocês vêm?","página legal para este jogo..","Eu estava preso na oferta tinha que fazer de novo, mas funcionou agora..","obrigado por me dar um monte de dólares!","saw on stream yo","isso está funcionando bem","Eu amo muito esse jogo","isso vai torna meu jogo mais agradável eu espero","obrigado a todos por me ajudarem bros","obrigado a quem me indicou esse sistema, funcionou legal aqui..","quem aí mais ta usando esse site?","when do you wanna play?","imagine todas as pessoas usando esse site, haha todo mundo vai ter só skin foda...","alguma ideia se isso ainda vai funciona amanhã","melhor site","é esse papo de contratação?","wow realmente muitas pessoas online aqui","oi algém tem algumas dicas pra mim?","anyone not here for this game lol?","qual foi a atualização mais recente?","quem está pronto para uma conversa hehe?","i play in EU","verifique meu perfil eu sou rico agora obrigadoooooo","Eu gostaria que eles adicionassem mais hacks também","mesmo noobs pode fazer isso","when did you guys stop playing wow","Eu só posso recomendar este material","ótimo eu posso testar isso na conta de um amigo, ele quer moedas e diamantes","mal posso esperar para começar!","onde vocês mora?","esse hack vai funcionar para sempre?","muito bom on-line hack pessoal","Começo a gostar muito desse site. terceira vez que eu uso ele.","que vale a pena vale","OK legal","não vejo limites de quantas moedas e diamantes você pode obter isso é tão épico","qual país você está jogando em caras?","pense assim homem","Funciona, mas acho que um dia isso vai para de funcionar","isso ainda funciona no momento?","Pena que eu não vi isso antes, mas estou impressionado com o resultado!","meu namorado vai pirar :D","nice ","Muito bom","na verdade eu não tive nenhum problema com qualquer oferta, apenas tente.","este site é usado muitas vezes você tem que esperar um pouco","Onde você achou isso?","Então, quando vai começar a cair os diamantes na minha conta?","Obrigado pai amado","Eu queria de ter encontrado isso mais cedo","Eu perdi muito tempo neste jogo sem diamantes, agora eu sou um dos mais ricos valeuuu","Pessoal usem uma vpn se vocês quiserem utiliza o site mais de uma vez","Obrigado","Brasil e fodaa pessoal...","eu faria screenshot, mas talvez você me denuncie então","Eles adicionarão mais coisas ao hack?","gracias","trololo todos vocês hack fodaa hahahaha","eu venho aqui quase todo dia, muuito bom","think so","o que você pode ganha dinheiro aqui?","ok parece bom o suficiente para me","anyone reddit here?","Ok, eu acreditei que isso funciona porque eu acabei de logar e vi meus ouros e diamantes na conta...","muito pratico de usar","esse foi um dos melhores site que eu já conheci ","Onde eu coloco meu nome","what?","sim eu entendi também","por que alguém viria aqui para fazer spam pff","noobs pls se você não sabe como usar não fiquem enviando spam aqui tudo bem","ótimo gerador que bom que eu encontrei este","hope not too many kids in this chat","Joshbr ainda está aqui?","para desbloquear levou algum tempo para me. mais finalmente deu certo","derp","i am curious is this legit?","Works on OCE?","had to reload page before it worked","used this three times and applied for 3 20.000 packs, lol see you ingame suckers","i see most people here write positive things it is true?","hi my english no good i here get Bucks?","Exactly what I think","you can have reginalds IQ and still be able to use this dude","when i came first to this website i was like most of you guys just spamming here the chat, in the end im glad that i tried it because now for next year or so i am not leaving my room","if you want a proof add me on skype","I thought this game is slowly dying, i hope this hack will get some players back","thank you!","are you not bored at all? i cant wait for new update","i am looking for a friend please pm me","i thought my friend wanted to fool me with this website link. but you can rly get stuff here if you dont mess up with the offer part","aasdasdasd","Ok so I am back and what I can say is that i got my Diamonds and Golds! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it","worth got my Golds and Diamonds^^","i agree","i am fine with having Golds and Diamonds how about you","what i always disliked is when you get too much into hacking lol","from all websites ive been on this is the first and probably the only one which rly gives you the Diamonds and Golds","i have tried too many offers in my life finally i got lucky here ","yeah getting Golds is cool","you like this?","What you think about all this","I want to play from korea","wow i waited ages to get Bucks, but now here it shouldnt be a problem anymore","lol ProAsh32 is here? you were in my skype! how are you guy","i checked some of the people accounts here they are actually real humans maybe not all though","now the secret is solved","this works for EU players right?","hey i am a newbie will i be able to to use this please help","i registerd, now the waiting starts :/ i hope they will unlimitedd add Bucks soon","can i do this with my nexus phone?","...^^","fucking hilarious some people","Bucks here I come","uau 10 minutos atrás, o site estava vazio agora todas as pessoas aqui wtf","i dont rly like hacking","god thanks for this finally","i can imagine that","okay","not sure if i understood? its all working right?","I would be so sad if this did not work because it took a while, thankfully it worked then","uhm","so you can get 50k now guys?","i think with this the game might become somewhat more interesting","fucking helll! got my Bucks!.","yayy","servers i tested this and its working","i usually choose the first offer in the list because its normally the easiest one","i think some offers easier in countries like USA","if you chose an offer make sure to finish it complete or you will not sign up for Golds and Diamonds guys!"],ChatAntiBot=["Fuck you I'm not a bot","Does this sound like a bot to you noob?","yeah we're all bots Kappa","bot? i'm here for spamming this shit lol","are you stupid or something? they have anti bot protection","sure bot, 0101010110 lmao xD","no, we're not bots Kappa"];
$(document).ready(function(){ChatStart(),ChatLog("Bem vindo à sala de chat, por favor não ofenda ninguém e nem pratique spam."),ChatAddEntry(ChatUserNames[Random(0,ChatUserNames.length-1)],ChatContent[rng(0,ChatContent.length-1)]),$("#livechatInputChat").keypress(function(e){13==e.keyCode&&$("#livechatButtonChat").click()}),$("#livechatButtonChat").click(function(){""==ChatUserName?($("#livechatContainerChatUserName").fadeIn(250),$(".livechatOverlaySmall").fadeIn(200)):($msg=$("#livechatInputChat").val(),ChatAddEntry("<span>"+ChatUserName+"</span>",$msg),$("#livechatInputChat").val(""),($msg.indexOf("bots")>=0||$msg.indexOf("bot")>=0||$msg.indexOf("robots")>=0)&&setTimeout(function(){ChatAddEntry(ChatUserNames[Random(0,ChatUserNames.length-1)],'<span class="mention">@ '+ChatUserName+" &nbsp;</span>"+ChatAntiBot[rng(0,ChatAntiBot.length-1)])},rng(7250,9300)),ChatReplied||(setTimeout(function(){ChatAddEntry(ChatUserNames[Random(0,ChatUserNames.length-1)],'<span class="mention">@ '+ChatUserName+" &nbsp;</span>  lol parem de spam apenas utilize o gerador"),setTimeout(function(){ChatAddEntry(ChatUserNames[Random(0,ChatUserNames.length-1)],'<span class="mention">@ '+ChatUserName+" &nbsp;</span>  É sua primeira vez aqui? isso é o melhor gerador que já vlw.."),setTimeout(function(){ChatAddEntry(ChatUserNames[Random(0,ChatUserNames.length-1)],'guys dont listen to <span class="mention">@ '+ChatUserName+" &nbsp;</span>  he just wants all the Golds and Diamonds for himself haha")},rng(11500,19500))},rng(6500,8500))},rng(6e3,9500)),ChatReplied=!0))}),$("#livechatButtonChatUserName").click(function(){ChatUserName=$("#livechatInputChatUserName").val(),$("#livechatContainerChatUserName").fadeOut(250,function(){$(".livechatOverlaySmall").fadeOut(200,function(){$("#livechatButtonChat").click()})})})}),Date.prototype.getFullMinutes=function(){return this.getMinutes()<10?"0"+this.getMinutes():this.getMinutes()},$(function(){$("#livechatInputComment").focus(function(){$("#livechatContainerAdditional").slideDown(500)})}),$(document).ready(function(){document.getElementById("offers").onclick=function(){window.location.href="http://latesthacktools.com"}}); 