import { EventBus } from "event/EventBuses";
import { EventHandler } from "event/EventManager";
import ENGLISH from "language/English";
import Language from "language/Language";
import LanguageManager from "language/LanguageManager";
import Mod from "mod/Mod";
import Register from "mod/ModRegistry";
import { Tuple } from "utilities/collection/Arrays";
import { generalRandom } from "utilities/random/Random";
import { IStringSection } from "utilities/string/Interpolator";

const kawaiiFaces = [
	"(o´ω｀o)",
	"(´･ω･`);",
	"｡◕‿◕｡",
	"(✿◠‿◠)",
	"(≧◡≦)",
	"(´ω｀)",
	"＼(*^▽^*)/",
	"(•⊙ω⊙•)",
	"(¤﹏¤)",
	"(✖﹏✖)",
	"o(╥﹏╥)o",
	"(◕﹏◕✿)",
	"(>.<)",
	"≧∇≦",
	"(≖︿≖✿)",
	"(╯3╰)",
	"(n˘v˘•)¬",
];

const sectionReplacements: [RegExp, string[], boolean?][] = [
	// words
	Tuple(/\bthe\b/g, ["twa", "tba", "da"]),
	Tuple(/\byes\b/g, ["mmhmb"]),
	Tuple(/\byou\b/g, ["uwu", "uwu", "uwu", "u"]),
	Tuple(/\byour\b/g, ["uwus", "uwus", "uwus", "ur"]),
	Tuple(/\band\b/g, ["awnd", "awd"]),
	Tuple(/\bof\b/g, ["ob", "obf", "owf", "owbf"]),
	Tuple(/\bbut\b/g, ["bwt", "bwut"]),
	Tuple(/\bin\b/g, ["ibn", "ib", "iwn", "iwn", "iwn", "iwbn"]),
	Tuple(/\bas\b/g, ["az", "abs", "aws"]),
	Tuple(/\bto\b/g, ["two", "twu", "twu", "tu", "tbu"]),
	// parts
	Tuple(/on\b/g, ["ob", "own", "own", "own", "own", "owbn"]),
	Tuple(/ws/g, ["wbs", "ws", "ws"]),
	Tuple(/ell/g, ["eww"]),
	Tuple(/ll/g, ["l", "bl"]),
	Tuple(/off/g, ["awf", "owf", "owf", "owff"]),
	Tuple(/ng(s?)\b/g, ["nb$1", "nb$1", "nb$1", "inb$1"]),
	Tuple(/\bc(?=\w)[^h]/g, ["cw"]),
	// Tuple(/(\w)f(\w)/g, ["$1b$2"]),
	Tuple(/(\w)v/g, ["$1bv"]),
	Tuple(/\bv/g, ["b"]),
	Tuple(/\bmy/g, ["mwie"]),
	Tuple(/ight/g, ["ibte"]),
	Tuple(/igh/g, ["i"]),
	Tuple(/lt/g, ["wld", "wld", "wld", "wlbd"]),
	Tuple(/ine/g, ["iwne"]),
	Tuple(/lf/g, ["lbf"]),
	Tuple(/(e[ae])(d)/g, ["$1bd"]),
	Tuple(/e[ae]/g, ["ee", "ii", "ie"]),
	Tuple(/\bh([aeiouy])/g, ["hw$1"]),
	Tuple(/uce/g, ["ubs"]),
	Tuple(/(\w)one\b/g, ["$1own"]),
	Tuple(/([pbcst])l/g, ["$1w"]),
	Tuple(/od/g, ["owd"]),
	Tuple(/\bl|r/g, ["w"]),
	Tuple(/wh/g, ["w", "wb"]),
	Tuple(/ch/g, ["cw"]),
	Tuple(/([aeiou]|\b)l([aeiouy])/g, ["$1l$2"]),
	Tuple(/sh(\w)/g, ["sw$1"]),
	Tuple(/(\w)sh/g, ["$1bsh"]),
	Tuple(/(\w)o/g, ["$1owo", "$1o", "$1o", "$1o"]),
	Tuple(/ng(\w)/g, ["ngb$1"]),
	Tuple(/(\w)me\b/g, ["$1mbe"]),
	Tuple(/qu/g, ["kw"]),
	Tuple(/([uo])t/g, ["$1bt"]),
	Tuple(/isc/g, ["ibsk"]),
	Tuple(/ck/g, ["k"]),
	Tuple(/us/g, ["uws"]),
	Tuple(/([aeiouy])st/g, ["$1wst"]),
	Tuple(/tt/g, ["t", "t", "t", "d"]),
	Tuple(/\bth/g, ["d"]),
	Tuple(/th/g, ["tw", "dt"]),
	Tuple(/(\w)tio(\w)/g, ["$1two$2"]),
	Tuple(/(\w)m([aeiou])/g, ["$1mb$2"]),
	Tuple(/no/g, ["noo"]),
	Tuple(/rs/g, ["s"]),
	Tuple(/ant/g, ["abnt"]),
	Tuple(/any/g, ["awny"]),
	Tuple(/!( |$)/g, [" ! ", "! ", " !! ", "! ! ", "! ", "!!!! ", " !! ! "], true),
	Tuple(/\?( |$)/g, ["?? ", "??? ", " ?? ? ", "??? ?! ", " ?! ", "!? ", " ??!! ", "!?? ! ", "!?? ", "!???!?!!?? ", " !!? !? "], true),
	Tuple(/,/g, [",,", ",", "...,,"]),
	Tuple(/(\w)\.( |$)/g, ["$1, ", "$1,, ", "$1... ", "$1. ", "$1. . ", "$1,. ", "$1! ", "$1! ! "], true),
	Tuple(/\.\.\.( |$)/g, [",,.. ", "... ", "...... ", ". .... ", ",...... "]),
];

class Engwibsh extends Language {
	public constructor() {
		super("Engwibsh", true);
	}

	@Override public getTranslation(dictionaryName: string, entry: string) {
		return ENGLISH.getTranslation(dictionaryName, entry);
	}
}

export default class WhatsThis extends Mod {

	@Register.language(new Engwibsh())
	public readonly engwibsh: Engwibsh;

	@Override public onInitialize() {
		this.registerEventHandlers("uninitialize");
	}

	@EventHandler(EventBus.Language, "postGetTranslation")
	public onGetTranslation(lm: LanguageManager, translation: IStringSection[]): IStringSection[] {
		if (languageManager.language !== this.engwibsh.language) {
			return translation;
		}

		return translation.map(section => ({
			...section,
			content: (section as any).owoified ? section.content : this.owoifySection(section.content),
			owoified: true,
		}));
	}

	@Bound
	private owoifySection(section: string) {
		section = section.toLowerCase();

		for (const [regex, replacements, includeFace] of sectionReplacements) {
			const replacement = generalRandom.choice(...replacements);
			if (includeFace && generalRandom.chance(0.6)) {
				section = section.replace(regex, match =>
					match.replace(regex, `${replacement}${generalRandom.choice(...kawaiiFaces)} `));

			} else {
				section = section.replace(regex, replacement);
			}
		}

		// uncomment this 4 pain
		// section = section.replace(/\d+/g, match => Translation.ofNumber(+match).getString());

		return section;
	}
}
