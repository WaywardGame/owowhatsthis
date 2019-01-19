import ENGLISH from "language/English";
import Language from "language/Language";
import { HookMethod } from "mod/IHookHost";
import Mod from "mod/Mod";
import Register from "mod/ModRegistry";
import { tuple } from "utilities/iterable/Generators";
import { Bound } from "utilities/Objects";
import { generalRandom } from "utilities/Random";
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
	tuple(/\bthe\b/g, ["twa", "tba", "da"]),
	tuple(/\byes\b/g, ["mmhmb"]),
	tuple(/\byou\b/g, ["uwu", "uwu", "uwu", "u"]),
	tuple(/\byour\b/g, ["uwus", "uwus", "uwus", "ur"]),
	tuple(/\band\b/g, ["awnd", "awd"]),
	tuple(/\bof\b/g, ["ob", "obf", "owf", "owbf"]),
	tuple(/\bbut\b/g, ["bwt", "bwut"]),
	tuple(/\bin\b/g, ["ibn", "ib", "iwn", "iwn", "iwn", "iwbn"]),
	tuple(/\bas\b/g, ["az", "abs", "aws"]),
	tuple(/\bto\b/g, ["two", "twu", "twu", "tu", "tbu"]),
	// parts
	tuple(/on\b/g, ["ob", "own", "own", "own", "own", "owbn"]),
	tuple(/ws/g, ["wbs", "ws", "ws"]),
	tuple(/ell/g, ["eww"]),
	tuple(/ll/g, ["l", "bl"]),
	tuple(/off/g, ["awf", "owf", "owf", "owff"]),
	tuple(/ng(s?)\b/g, ["nb$1", "nb$1", "nb$1", "inb$1"]),
	tuple(/\bc(?=\w)[^h]/g, ["cw"]),
	// tuple(/(\w)f(\w)/g, ["$1b$2"]),
	tuple(/(\w)v/g, ["$1bv"]),
	tuple(/\bv/g, ["b"]),
	tuple(/\bmy/g, ["mwie"]),
	tuple(/ight/g, ["ibte"]),
	tuple(/igh/g, ["i"]),
	tuple(/lt/g, ["wld", "wld", "wld", "wlbd"]),
	tuple(/ine/g, ["iwne"]),
	tuple(/lf/g, ["lbf"]),
	tuple(/(e[ae])(d)/g, ["$1bd"]),
	tuple(/e[ae]/g, ["ee", "ii", "ie"]),
	tuple(/\bh([aeiouy])/g, ["hw$1"]),
	tuple(/uce/g, ["ubs"]),
	tuple(/(\w)one\b/g, ["$1own"]),
	tuple(/([pbcst])l/g, ["$1w"]),
	tuple(/od/g, ["owd"]),
	tuple(/\bl|r/g, ["w"]),
	tuple(/wh/g, ["w", "wb"]),
	tuple(/ch/g, ["cw"]),
	tuple(/([aeiou]|\b)l([aeiouy])/g, ["$1l$2"]),
	tuple(/sh(\w)/g, ["sw$1"]),
	tuple(/(\w)sh/g, ["$1bsh"]),
	tuple(/(\w)o/g, ["$1owo", "$1o", "$1o", "$1o"]),
	tuple(/ng(\w)/g, ["ngb$1"]),
	tuple(/(\w)me\b/g, ["$1mbe"]),
	tuple(/qu/g, ["kw"]),
	tuple(/([uo])t/g, ["$1bt"]),
	tuple(/isc/g, ["ibsk"]),
	tuple(/ck/g, ["k"]),
	tuple(/us/g, ["uws"]),
	tuple(/([aeiouy])st/g, ["$1wst"]),
	tuple(/tt/g, ["t", "t", "t", "d"]),
	tuple(/\bth/g, ["d"]),
	tuple(/th/g, ["tw", "dt"]),
	tuple(/(\w)tio(\w)/g, ["$1two$2"]),
	tuple(/(\w)m([aeiou])/g, ["$1mb$2"]),
	tuple(/no/g, ["noo"]),
	tuple(/rs/g, ["s"]),
	tuple(/ant/g, ["abnt"]),
	tuple(/any/g, ["awny"]),
	tuple(/!( |$)/g, [" ! ", "! ", " !! ", "! ! ", "! ", "!!!! ", " !! ! "], true),
	tuple(/\?( |$)/g, ["?? ", "??? ", " ?? ? ", "??? ?! ", " ?! ", "!? ", " ??!! ", "!?? ! ", "!?? ", "!???!?!!?? ", " !!? !? "], true),
	tuple(/,/g, [",,", ",", "...,,"]),
	tuple(/(\w)\.( |$)/g, ["$1, ", "$1,, ", "$1... ", "$1. ", "$1. . ", "$1,. ", "$1! ", "$1! ! "], true),
	tuple(/\.\.\.( |$)/g, [",,.. ", "... ", "...... ", ". .... ", ",...... "]),
];

class Engwibsh extends Language {
	public constructor() {
		super("Engwibsh", true);
	}

	public getTranslation(dictionaryName: string, entry: string) {
		return ENGLISH.getTranslation(dictionaryName, entry);
	}
}

export default class WhatsThis extends Mod {

	@Register.language(new Engwibsh())
	public readonly engwibsh: Engwibsh;

	@HookMethod
	public onGetTranslation(translation: IStringSection[]) {
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

		return section;
	}
}
