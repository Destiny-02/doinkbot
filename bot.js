// Author: Destiny 
// Code modified from https://www.youtube.com/watch?v=BmKXBVdEV0g
// Created 9 February 2021
// Last updated 11 February 2021

require('dotenv').config();
const keep_alive = require('./keep_alive.js')

console.log(process.env.DISCORDJS_BOT_TOKEN);

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = 'd!';
let Discord = require("discord.js");

// doink dictionary
const dictionary = [["destiny", "destiny", "destiny", "destiny", "destiny", "destiny", "dabbler", "dad", "daddy", "daggerman", "dairy", "dam", "damage", "dame", "damn", "damnation", "damsel", "dance", "dancer", "dancing", "dandelion", "danger", "danseur", "darbuka", "daring", "dark", "darling", "darn", "dash", "dashboard", "data", "date", "datum", "daughter", "dauphin", "davenport", "dawn", "day", "daybed", "daybreak", "daydreaming", "daylight", "daytime", "dazzler", "deacon", "deactivation", "dead", "deadline", "deadlock", "deadweight", "deae", "deal", "dealer", "dean", "dear", "dearth", "death", "deathbed", "debacle", "debate", "debating", "debauchery", "debility", "debt", "debunking", "debut", "debutante", "decade", "decadence", "decay", "deceased", "decedent", "deceit", "deceleration", "decency", "decentralization", "deception", "decimal", "decision", "deck", "decking", "declaration", "declarative", "decline", "declivity", "decolletage", "decomposition", "decompression", "decor", "decoration", "decorator", "decorum", "decrease", "decree", "decrement", "dedication", "deductibility", "deduction", "deed", "deepening", "deer", "defacing", "default", "defeat", "defeatism", "defect", "defection", "defence", "defendant", "defender", "defense", "deference", "deferent", "deferment", "defiance", "deficiency", "deficit", "definition", "deformation", "deformity", "degeneration", "degradation", "degree", "dehydration", "deification", "deity", "dejection", "delay", "delectation", "delegate", "delegation", "deliberation", "delicacy", "delight", "delineation", "delinquency", "delinquent", "delirium", "deliverance", "delivery", "dell", "deltoid", "deluge", "delusion", "deluxer", "demage", "demagnification", "demand", "demander", "demanding", "demarcation", "demeanor", "demineralization", "demise", "democracy", "democratization", "demography", "demolition", "demon", "demonstration", "demoralization", "demurrer", "demythologization", "den", "denial", "denomination", "denouement", "densitometry", "density", "dent", "dentist", "dentistry", "denunciation", "denying", "department", "departure", "dependence", "dependency", "dependent", "depersonalization", "depiction", "depletion", "deployment", "deposit", "deposition", "depot", "depravity", "depreciation", "depression", "deprivation", "depth", "deputy", "derangement", "derby", "derelict", "dereliction", "derision", "derivation", "derivative", "derrick", "derriere", "descendant", "descent", "description", "desecration", "desegregation", "desert", "desertion", "design", "designate", "designation", "designer", "designing", "desirability", "desire", "desk", "desolation", "despair", "despairing", "desperation", "despondency", "despot", "despotism", "dessert", "destination", "destiny", "destroyer", "destruction", "desuetude", "detachment", "detail", "detection", "detective", "detector", "detente", "detention", "detergency", "detergent", "deterioration", "determinability", "determinant", "determination", "determinism", "deterrence", "deterrent", "detestation", "detonation", "detractor", "detriment", "devastation", "developer", "development", "deviance", "deviation", "device", "devil", "devisee", "devotion", "dew", "dexamethasone", "dexterity", "diagnometer", "diagnosing", "diagnostic", "diagram", "dial", "dialect", "dialectic", "dialogue", "diam", "diameter", "diamond", "diaphragm", "diarrhea", "diarrhoea", "diary", "diathermy", "dice", "dichondra", "dichotomy", "dictator", "dictatorship", "diction", "dictionary", "dictum", "die", "diem", "diesel", "diet", "diethylaminoethyl", "diethylstilbestrol", "diety", "difference", "differentiability", "differential", "differentiation", "difficulty", "diffidence", "diffraction", "diffrunce", "diffusion", "dig", "digest", "digit", "digitalization", "dignity", "diisocyanate", "dilatation", "dilation", "dilemma", "dilettante", "diligence", "dill", "dilution", "dime", "dimension", "dimensioning", "dimethylglyoxime", "diminution", "din", "dinghy", "dingo", "dining", "dinner", "dinnertime", "dinnerware", "dinosaur", "diocese", "diorah", "dioxalate", "dioxide", "dip", "diphosphopyridine", "diplomacy", "diplomat", "dipper", "direction", "directionality", "directive", "directivity", "director", "directorate", "directorship", "directory", "dirge", "dirt", "disability", "disadvantage", "disaffection", "disagreement", "disappearance", "disappointment", "disapprobation", "disapproval", "disarmament", "disarray", "disassembly", "disaster", "disbelief", "disbursement", "disc", "discernment", "discharge", "disciple", "discipleship", "discipline", "disclaimer", "disclosure", "discomfort", "discontent", "discontinuance", "discontinuity", "discord", "discount", "discouragement", "discourse", "discoverer", "discovery", "discredit", "discrepancy", "discretion", "discrimination", "discussant", "discussion", "disdain", "disease", "disenfranchisement", "disengagement", "disfavor", "disgrace", "disguise", "disgust", "dish", "disharmony", "dishonesty", "dishonor", "dishwater", "disillusionment", "disinclination", "disintegration", "disinterest", "disk", "dislike", "dislocation", "disloyalty", "dismay", "dismemberment", "dismissal", "disobedience", "disorder", "disorganization", "disparagement", "disparity", "dispatch", "dispensary", "dispensation", "dispenser", "dispersal", "dispersement", "dispersion", "displacement", "display", "displeasure", "disposal", "disposition", "dispossession", "dispute", "disquiet", "disquietude", "disregard", "disrepair", "disrepute", "disrespect", "disruption", "dissatisfaction", "dissection", "dissemination", "dissension", "dissent", "dissenter", "disservice", "dissimulation", "dissociation", "dissolution", "dissolve", "distance", "distaste", "distension", "distillation", "distiller", "distinction", "distortion", "distraction", "distribution", "distributor", "distributorship", "district", "distrust", "disturbance", "disturber", "disunion", "disunity", "ditch", "ditcher", "ditty", "diva", "divan", "dive", "diver", "divergence", "diversification", "diversion", "diversity", "divertimento", "divestiture", "dividend", "divider", "divination", "divine", "diving", "divinity", "division", "divorce", "divorcee", "dline", "dock", "dockside", "doctor", "doctorate", "doctrinaire", "doctrine", "document", "documentary", "documentation", "dodge", "dog", "doghouse", "dogleg", "dogma", "dogmatism", "dogtrot", "dogwood", "doing", "doll", "dollar", "dollarette", "dolphin", "domain", "dome", "domestic", "domesticity", "domicile", "dominance", "domination", "dominion", "don", "donation", "donkey", "donor", "doom", "doomsday", "door", "doorbell", "doorkeeper", "doorknob", "doorman", "doormen", "doorstep", "doorway", "dope", "dormitory", "dosage", "dose", "dot", "dotting", "double", "doubleheader", "doubloon", "doubt", "doubte", "dough", "dove", "dowel", "dower", "down", "downfall", "downpayment", "downpour", "downtrend", "downturn", "dowry", "dozen", "draft", "draftee", "drafting", "drag", "dragger", "dragnet", "dragon", "drain", "drainage", "draining", "dram", "drama", "dramatist", "dramatization", "draper", "drapery", "draught", "draw", "drawback", "drawbridge", "drawer", "drawing", "drawl", "dread", "dream", "dreamer", "dresser", "dressing", "drier", "drift", "drill", "drilling", "drink", "drinker", "drinking", "drip", "drive", "driver", "driveway", "driving", "drizzle", "dromozoa", "drone", "drop", "drought", "drouth", "drove", "drudgery", "drug", "drugstore", "drum", "drumlin", "drummer", "drunk", "drunkard", "dryer", "drying", "drywall", "dualism", "duck", "duct", "ductwork", "dud", "due", "duel", "duet", "duf", "duffel", "duffer", "dugout", "duke", "dumbbell", "dump", "dumping", "dun", "dune", "dung", "dungeon", "duplicate", "duplication", "durability", "duration", "dusk", "dust", "dustbin", "dusting", "duty", "dwarf", "dweller", "dwelling", "dyerear", "dying", "dynamic", "dynamite", "dynamo", "dynasty", "dysentery", "dysplasia", "dystopia", "dystrophy"], 
					["oak", "oath", "oathe", "oatmeal", "obedience", "obelisk", "obesity", "object", "objectification", "objection", "objective", "objectivity", "objector", "obligation", "oblige", "obliteration", "oblivion", "oboist", "obscenity", "obscurity", "observance", "observation", "observer", "obsession", "obsidian", "obstacle", "obstructionist", "obverse", "ocarina", "occasion", "occlusion", "occupancy", "occupant", "occupation", "occurrence", "ocean", "oceanography", "ocelot", "ocher", "ochre", "octahedron", "octoroon", "odor", "odyssey", "oep", "offal", "offender", "offense", "offer", "offering", "offersey", "office", "officer", "official", "officialdom", "offing", "offspring", "oil", "oilcloth", "oilheating", "oilseed", "ointment", "oiticica", "oleomargarine", "olive", "ome", "omelet", "omen", "omission", "ommission", "omnipotence", "oneupmanship", "onion", "onlooker", "onrush", "onset", "onslaught", "ooh", "ooze", "open", "opener", "opening", "opera", "operand", "operation", "operator", "operetta", "opinion", "opium", "opponent", "opportunism", "opportunity", "opposite", "opposition", "oppression", "opprobrium", "optimality", "optimism", "optimization", "optimum", "option", "oracle", "oration", "orator", "oratorio", "oratory", "orb", "orbit", "orchard", "orchestra", "orchestration", "ordeal", "order", "ordering", "orderly", "ordinance", "ordinary", "ordnance", "organ", "organdy", "organification", "organism", "organist", "organization", "orgasm", "orgone", "orgy", "orientation", "origin", "original", "originality", "origination", "ornament", "ornamentation", "orphan", "orphanage", "orthicon", "orthodontist", "orthography", "orthophosphate", "oscillation", "oscillator", "osmium", "ossification", "ostracism", "otter", "ounce", "ouster", "outback", "outbreak", "outburst", "outcast", "outcome", "outcry", "outfield", "outfielder", "outfit", "outflow", "outgrowth", "outhouse", "outing", "outlaw", "outlawry", "outlay", "outlet", "outline", "outlook", "outpatient", "outpost", "outpouring", "output", "outrage", "outreach", "outset", "outside", "outsider", "oval", "ovation", "oven", "overall", "overcast", "overcoat", "overcrowding", "overestimation", "overexploitation", "overflow", "overhang", "overhaul", "overhauling", "overhead", "overheating", "overlay", "overload", "overnight", "overpayment", "overpopulation", "overpressure", "overprotection", "overriding", "overrun", "overseer", "oversight", "oversimplification", "overthrow", "overtime", "overture", "overweight", "owi", "owl", "owner", "ownership", "owning", "oxalate", "oxcart", "oxen", "oxidation", "oxide", "oxygen", "oxytetracycline", "oyster", "ozone"], 
					["ice", "icebox", "icicle", "icing", "iconoclasm", "idea", "ideal", "idealism", "idealist", "idealization", "identification", "identity", "ideologist", "ideology", "idiom", "idiot", "idler", "idol", "idolatry", "idyll", "ignition", "ileum", "ill", "illegitimacy", "illumination", "illusion", "illustration", "illustrator", "image", "imagery", "imagination", "imaging", "imagnation", "imbalance", "imbecile", "imbroglio", "imitation", "immaturity", "immediacy", "immensity", "immersion", "immigrant", "immigration", "imminence", "immobility", "immodesty", "immorality", "immortality", "immunity", "immunization", "impact", "impairment", "impartiality", "impasse", "impatience", "impediment", "imperative", "imperfectability", "imperfection", "imperialism", "imperialist", "impersonation", "impiety", "implant", "implement", "implementation", "implication", "import", "importance", "importation", "imposition", "impossibility", "impotence", "impotency", "impresario", "impresser", "impression", "impressionist", "imprimatur", "imprisonment", "impromptu", "impropriety", "improvement", "improvisation", "improviser", "improvising", "impudence", "impulse", "impunity", "impurity", "imputation", "inability", "inaccuracy", "inaction", "inactivation", "inactivity", "inadequacy", "inadvertence", "inaugural", "inauguration", "incantation", "incapacity", "incarnation", "incense", "incentive", "inception", "inceptor", "inch", "incidence", "incident", "incinerator", "incipience", "incipiency", "incitement", "inclination", "incline", "inclusion", "income", "incompatibility", "incompetence", "incomprehension", "incongruity", "inconsistency", "inconvenience", "incorporation", "incorruptibility", "increase", "incredulity", "incubation", "incubi", "inculcation", "incursion", "ind", "indecision", "indefinite", "indefinity", "indemnity", "indenture", "independence", "index", "indexing", "indication", "indicator", "indictment", "indifference", "indigation", "indigestion", "indignation", "indirection", "indisposition", "indium", "individual", "individualism", "individualist", "individuality", "individuation", "indivisibility", "indoctrinating", "indoctrination", "indolence", "inducement", "induction", "indulgence", "industralization", "industrialism", "industrialist", "industrialization", "industry", "inefficiency", "inequality", "inertia", "inevitability", "inexperience", "infamy", "infancy", "infant", "infantry", "infantryman", "infantrymen", "infarct", "infarction", "infatuation", "infection", "inference", "inferiority", "inferno", "infestation", "infidelity", "infield", "infighting", "infiltration", "infinite", "infinitive", "infinity", "infirmary", "infirmity", "inflammation", "inflation", "inflection", "infliction", "inflow", "influence", "influent", "influenza", "influx", "informality", "informant", "information", "infraction", "infrared", "infringement", "infuriation", "infusion", "ingenuity", "ingestion", "ingratitoode", "ingratitude", "ingredient", "inhabitation", "inhalation", "inheritance", "inhibition", "inhibitor", "initiation", "initiative", "initiator", "injection", "injunction", "injury", "injustice", "ink", "inkling", "inlet", "inmate", "inn", "inning", "innocence", "innovation", "innuendo", "inoculation", "inpost", "input", "inquest", "inquiry", "inquisitor", "insanity", "inscription", "inscrutability", "insect", "insecticide", "insecurity", "insemination", "insert", "insertion", "inset", "inside", "insight", "insignificance", "insinuation", "insistence", "insolence", "insomnia", "insouciance", "inspection", "inspector", "inspiration", "instability", "installation", "installment", "instance", "instancy", "instant", "instigation", "instigator", "instillation", "instinct", "institute", "institution", "institutionalization", "instruction", "instructor", "instrument", "instrumentation", "insubordination", "insularity", "insulation", "insulator", "insulin", "insult", "insurance", "insurgence", "insurrection", "intake", "integer", "integration", "integrity", "intellect", "intellectual", "intellectuality", "intelligence", "intelligentsia", "intemperance", "intendant", "intensification", "intensifier", "intensity", "intent", "intention", "interaction", "intercept", "interceptor", "interchange", "intercourse", "interdependence", "intereference", "interest", "interface", "interference", "interferometer", "interim", "interior", "interlining", "interlocutor", "interlude", "intermarriage", "interment", "intermission", "intern", "international", "interne", "interplay", "interpolation", "interposition", "interpretation", "interpreter", "interpretor", "interregnum", "interrelation", "interrelationship", "interrogation", "interrogator", "interruption", "intersection", "interval", "intervention", "interview", "interviewee", "interviewer", "interviewing", "intestine", "intima", "intimacy", "intimate", "intimidation", "intolerance", "intonation", "intransigence", "intrigue", "introduction", "introject", "introspection", "intruder", "intrusion", "intuition", "invader", "invalid", "invalidism", "invasion", "invention", "inventor", "inventory", "inverse", "inversion", "investigation", "investigator", "investment", "investor", "invigoration", "inviolability", "invitation", "invite", "invocation", "involution", "involvement", "invulnerability", "iodide", "iodination", "iodine", "iodoamino", "iodoprotein", "ion", "ionosphere", "iota", "ire", "iridium", "iron", "irony", "irradiation", "irrationality", "irredentism", "irregularity", "irreproducibility", "irresolution", "irresponsibility", "irreverence", "irrigation", "irritability", "irritant", "irritation", "irsac", "island", "isle", "isocyanate", "isolation", "isolationism", "issuance", "issue", "itch", "item", "itemization", "itinerary", "ity", "ivory", "ivy"], 
					["no", "nab", "nadir", "naebm", "nagging", "nahb", "nail", "nair", "nairo", "naivete", "name", "namesake", "naming", "nap", "napkin", "narcotic", "nareb", "narration", "narrative", "narrator", "narrowing", "nation", "national", "nationalism", "nationalist", "nationality", "nationhood", "native", "nato", "naturalism", "naturalist", "nature", "naturopath", "nausea", "navel", "navigation", "navigator", "navy", "nebula", "necessity", "neck", "necklace", "neckline", "necktie", "necropsy", "nectar", "need", "needle", "negation", "negative", "negativism", "neglect", "negligence", "negotiation", "neighbor", "neighborhood", "neighbourhood", "neocortex", "neon", "nephew", "nerve", "nest", "nester", "nestling", "net", "network", "neuralgia", "neurasthenic", "neurologist", "neuron", "neuropathology", "neurotic", "neutralism", "neutralist", "neutrality", "neutralization", "neutron", "newcomer", "newel", "newlywed", "newsboy", "newsletter", "newsman", "newsmen", "newspaper", "newspaperman", "newspapermen", "newsreel", "newsstand", "newt", "niche", "nickel", "nickname", "niece", "night", "nightclub", "nightfall", "nightingale", "nightmare", "nightshirt", "nihilism", "nihilist", "nil", "nip", "nirvana", "nitrate", "nitrogen", "nitroglycerine", "nobility", "nobleman", "noblesse", "nod", "noise", "nomenclature", "nomination", "nominee", "nonce", "noncompliance", "nonconformist", "nondefeatist", "nondriver", "nonequivalence", "nonfiction", "nonfood", "nonism", "nonoccurrence", "nonogenarian", "nonpayment", "nonreactivity", "nonsense", "nonstop", "noon", "noontime", "noose", "nop", "norad", "noradrenalin", "norethandrolone", "norm", "normalcy", "north", "northerner", "nose", "nosebag", "nosebleed", "nostalgia", "nostril", "notation", "notch", "note", "notebook", "notice", "notification", "notion", "notoriety", "noun", "nourishment", "novel", "novelist", "novelty", "novice", "novitiate", "nowhere", "nozzle", "nuance", "nuclei", "nucleoli", "nucleotide", "nuclide", "nudge", "nudism", "nudist", "nudity", "nugget", "nuisance", "null", "nullity", "number", "numbering", "numerology", "nun", "nurse", "nursery", "nurture", "nut", "nutmeg", "nutrition", "nutshell", "nux", "nylon", "nymph", "nymphomaniac"], 
					["kids", "kale", "kangaroo", "koala", "kaleidescope", "kaleidoscope", "karl", "kava", "kazoo", "kebob", "kedgeree", "keel", "keelson", "keening", "keep", "keeper", "keeping", "keg", "kegful", "kelp", "ken", "kenning", "keno", "kerchief", "kernel", "kerosene", "kerygma", "ketchup", "kettle", "key", "keyboard", "keyboarding", "keyhole", "keynote", "khan", "kibbutzim", "kick", "kicking", "kickoff", "kid", "kidding", "kidnaper", "kidnapper", "kidney", "kill", "killer", "killing", "kilometer", "kiloton", "kilowatt", "kimono", "kin", "kind", "kindergarten", "kindred", "king", "kingdom", "kingpin", "kinship", "kiosk", "kit", "kitchen", "kitchenette", "kite", "kitten", "klaxon", "knack", "knackwurst", "knee", "kneecap", "knife", "knight", "knob", "knock", "knockdown", "knocking", "knoll", "knot", "knott", "know", "knowledge", "knuckle", "knuckleball", "kob", "kola", "konga", "kqed", "kraft", "kraut"]];

const letter_emojis = [":regional_indicator_d:", ":regional_indicator_o:", ":regional_indicator_i:", ":regional_indicator_n:", ":regional_indicator_k:"];

//generates doink string
const find_doink = (dictionary, letter_emojis) => { 
	
	let doink_string = "";
	for (let i = 0; i < letter_emojis.length; i++) {
		let line = letter_emojis[i];
		// finds random word in dictionary
		line += dictionary[i][Math.floor(Math.random() * dictionary[i].length)];
		line += "\n";
		doink_string += line; 
	}
	return doink_string;

}

client.on('ready', () => {
	console.log(`${client.user.tag} has logged in`);
	client.user.setActivity("d!info");

});

client.on('message', (message) => {
	// bot doesn't reply to itself 
	if (message.author.bot) return;
	// set up command detection
	if (message.content.startsWith(PREFIX)) {
		const [CMD_NAME, ...args] = message.content
		.trim()
		.substring(PREFIX.length)
		.split(/\s+/);
		
		if (CMD_NAME === 'help' || CMD_NAME === 'info' || CMD_NAME === 'commands'){
			let help_text = 'd!hello \nd!info \nd!random \nd!dink <user> (use exact discord name, not nickname)\nd!doink <user>\nd!special <user>\nd!big \nd!face\nd!face2\nd!nsfw\n\n made by Destiny \nhttps://destiny-02.github.io/index.html';
			let help_embed = new Discord.MessageEmbed()
				.setTitle('List of commands')
				.setDescription(help_text)
				.setColor('#0x852d49')
			message.channel.send(help_embed);
		
		} 
		
		if (CMD_NAME === 'random'){
			message.channel.send();
			let random_text = find_doink(dictionary, letter_emojis);
			let random_embed = new Discord.MessageEmbed()
				.setTitle('doink stands for...')
				.setDescription(random_text)
				.setColor('#0x852d49')
			message.channel.send(random_embed);
		
		}
		
		if (CMD_NAME === 'big'){
			message.channel.send(':regional_indicator_d::regional_indicator_i::regional_indicator_n::regional_indicator_k:');
		}
		
		if (CMD_NAME === 'face'){
			message.channel.send(':eyes:').then(function(sentMessage) {
			sentMessage.react('👅')});
		}
		
		if (CMD_NAME === 'face2'){
			message.channel.send(':eyes:').then(function(sentMessage) {
			sentMessage.react('👄')});
		}
		
		if (CMD_NAME === 'nsfw'){
			message.channel.send(':eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n:eyes:\n:tongue:\n');
		}
		
		if (CMD_NAME === 'hello'){
			message.channel.send(`Hello <@${message.author.id}>`)
		}
		
		if (CMD_NAME === 'dink') {
			try {
				user_id = client.users.cache.find(u => u.username === args[0]).id;
				message.channel.send(`You dinked <@${user_id}>`);
			}
			catch(err) {}
			finally {
				return;
			}
			
		}
		
		if (CMD_NAME === 'doink') {
			try {
				user_id = client.users.cache.find(u => u.username === args[0]).id;
				message.channel.send(`You doinked <@${user_id}>`);
			}
			catch(err) {}
			finally {
				return;
			}
			
		}
		
		if (CMD_NAME === 'special') {
			try {
				user_id = client.users.cache.find(u => u.username === args[0]).id;
				message.channel.send(`You :sparkles: special dinked :sparkles: <@${user_id}>`);
			}
			catch(err) {}
			finally {
				return;
			}
			
		}
		
	}
	
	if (message.content.startsWith('👀')) {
		message.react('👅');
	}
	
	if (message.content === 'hello'){
			message.channel.send('hello');
		}
	
	if (message.content === 'hi'){
			message.channel.send('hi');
		}
		
	if (message.content.toLowerCase().startsWith('im ') || message.content.toLowerCase().startsWith('i\'m ')){
		// finds message after the "i am" part
		message.channel.send(`Hi ${message.content.substring( message.content.indexOf(" ") + 1, message.content.length )} I'm dinkbot!`);
	}
	
	if (message.content.toLowerCase().startsWith('i am ')){
		message.channel.send(`Hi ${message.content.substring(5, message.content.length)} I'm dinkbot!`);
	}
	
	if (message.content === 'doink'){
			message.channel.send(':tongue:***__DOINK__***:tongue:');
		}
	 
}); 
client.login(process.env.DISCORDJS_BOT_TOKEN); 