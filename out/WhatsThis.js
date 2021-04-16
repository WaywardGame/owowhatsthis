var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "event/EventBuses", "event/EventManager", "language/English", "language/Language", "mod/Mod", "mod/ModRegistry", "utilities/collection/Arrays", "utilities/random/Random"], function (require, exports, EventBuses_1, EventManager_1, English_1, Language_1, Mod_1, ModRegistry_1, Arrays_1, Random_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    const sectionReplacements = [
        Arrays_1.Tuple(/\bthe\b/g, ["twa", "tba", "da"]),
        Arrays_1.Tuple(/\byes\b/g, ["mmhmb"]),
        Arrays_1.Tuple(/\byou\b/g, ["uwu", "uwu", "uwu", "u"]),
        Arrays_1.Tuple(/\byour\b/g, ["uwus", "uwus", "uwus", "ur"]),
        Arrays_1.Tuple(/\band\b/g, ["awnd", "awd"]),
        Arrays_1.Tuple(/\bof\b/g, ["ob", "obf", "owf", "owbf"]),
        Arrays_1.Tuple(/\bbut\b/g, ["bwt", "bwut"]),
        Arrays_1.Tuple(/\bin\b/g, ["ibn", "ib", "iwn", "iwn", "iwn", "iwbn"]),
        Arrays_1.Tuple(/\bas\b/g, ["az", "abs", "aws"]),
        Arrays_1.Tuple(/\bto\b/g, ["two", "twu", "twu", "tu", "tbu"]),
        Arrays_1.Tuple(/on\b/g, ["ob", "own", "own", "own", "own", "owbn"]),
        Arrays_1.Tuple(/ws/g, ["wbs", "ws", "ws"]),
        Arrays_1.Tuple(/ell/g, ["eww"]),
        Arrays_1.Tuple(/ll/g, ["l", "bl"]),
        Arrays_1.Tuple(/off/g, ["awf", "owf", "owf", "owff"]),
        Arrays_1.Tuple(/ng(s?)\b/g, ["nb$1", "nb$1", "nb$1", "inb$1"]),
        Arrays_1.Tuple(/\bc(?=\w)[^h]/g, ["cw"]),
        Arrays_1.Tuple(/(\w)v/g, ["$1bv"]),
        Arrays_1.Tuple(/\bv/g, ["b"]),
        Arrays_1.Tuple(/\bmy/g, ["mwie"]),
        Arrays_1.Tuple(/ight/g, ["ibte"]),
        Arrays_1.Tuple(/igh/g, ["i"]),
        Arrays_1.Tuple(/lt/g, ["wld", "wld", "wld", "wlbd"]),
        Arrays_1.Tuple(/ine/g, ["iwne"]),
        Arrays_1.Tuple(/lf/g, ["lbf"]),
        Arrays_1.Tuple(/(e[ae])(d)/g, ["$1bd"]),
        Arrays_1.Tuple(/e[ae]/g, ["ee", "ii", "ie"]),
        Arrays_1.Tuple(/\bh([aeiouy])/g, ["hw$1"]),
        Arrays_1.Tuple(/uce/g, ["ubs"]),
        Arrays_1.Tuple(/(\w)one\b/g, ["$1own"]),
        Arrays_1.Tuple(/([pbcst])l/g, ["$1w"]),
        Arrays_1.Tuple(/od/g, ["owd"]),
        Arrays_1.Tuple(/\bl|r/g, ["w"]),
        Arrays_1.Tuple(/wh/g, ["w", "wb"]),
        Arrays_1.Tuple(/ch/g, ["cw"]),
        Arrays_1.Tuple(/([aeiou]|\b)l([aeiouy])/g, ["$1l$2"]),
        Arrays_1.Tuple(/sh(\w)/g, ["sw$1"]),
        Arrays_1.Tuple(/(\w)sh/g, ["$1bsh"]),
        Arrays_1.Tuple(/(\w)o/g, ["$1owo", "$1o", "$1o", "$1o"]),
        Arrays_1.Tuple(/ng(\w)/g, ["ngb$1"]),
        Arrays_1.Tuple(/(\w)me\b/g, ["$1mbe"]),
        Arrays_1.Tuple(/qu/g, ["kw"]),
        Arrays_1.Tuple(/([uo])t/g, ["$1bt"]),
        Arrays_1.Tuple(/isc/g, ["ibsk"]),
        Arrays_1.Tuple(/ck/g, ["k"]),
        Arrays_1.Tuple(/us/g, ["uws"]),
        Arrays_1.Tuple(/([aeiouy])st/g, ["$1wst"]),
        Arrays_1.Tuple(/tt/g, ["t", "t", "t", "d"]),
        Arrays_1.Tuple(/\bth/g, ["d"]),
        Arrays_1.Tuple(/th/g, ["tw", "dt"]),
        Arrays_1.Tuple(/(\w)tio(\w)/g, ["$1two$2"]),
        Arrays_1.Tuple(/(\w)m([aeiou])/g, ["$1mb$2"]),
        Arrays_1.Tuple(/no/g, ["noo"]),
        Arrays_1.Tuple(/rs/g, ["s"]),
        Arrays_1.Tuple(/ant/g, ["abnt"]),
        Arrays_1.Tuple(/any/g, ["awny"]),
        Arrays_1.Tuple(/!( |$)/g, [" ! ", "! ", " !! ", "! ! ", "! ", "!!!! ", " !! ! "], true),
        Arrays_1.Tuple(/\?( |$)/g, ["?? ", "??? ", " ?? ? ", "??? ?! ", " ?! ", "!? ", " ??!! ", "!?? ! ", "!?? ", "!???!?!!?? ", " !!? !? "], true),
        Arrays_1.Tuple(/,/g, [",,", ",", "...,,"]),
        Arrays_1.Tuple(/(\w)\.( |$)/g, ["$1, ", "$1,, ", "$1... ", "$1. ", "$1. . ", "$1,. ", "$1! ", "$1! ! "], true),
        Arrays_1.Tuple(/\.\.\.( |$)/g, [",,.. ", "... ", "...... ", ". .... ", ",...... "]),
    ];
    class Engwibsh extends Language_1.default {
        constructor() {
            super("Engwibsh", true);
        }
        getTranslation(dictionaryName, entry) {
            return English_1.default.getTranslation(dictionaryName, entry);
        }
    }
    __decorate([
        Override
    ], Engwibsh.prototype, "getTranslation", null);
    class WhatsThis extends Mod_1.default {
        onInitialize() {
            this.registerEventHandlers("uninitialize");
        }
        onGetTranslation(lm, translation) {
            if (languageManager.language !== this.engwibsh.language) {
                return translation;
            }
            return translation.map(section => ({
                ...section,
                content: section.owoified ? section.content : this.owoifySection(section.content),
                owoified: true,
            }));
        }
        owoifySection(section) {
            section = section.toLowerCase();
            for (const [regex, replacements, includeFace] of sectionReplacements) {
                const replacement = Random_1.generalRandom.choice(...replacements);
                if (includeFace && Random_1.generalRandom.chance(0.6)) {
                    section = section.replace(regex, match => match.replace(regex, `${replacement}${Random_1.generalRandom.choice(...kawaiiFaces)} `));
                }
                else {
                    section = section.replace(regex, replacement);
                }
            }
            return section;
        }
    }
    __decorate([
        ModRegistry_1.default.language(new Engwibsh())
    ], WhatsThis.prototype, "engwibsh", void 0);
    __decorate([
        Override
    ], WhatsThis.prototype, "onInitialize", null);
    __decorate([
        EventManager_1.EventHandler(EventBuses_1.EventBus.Language, "postGetTranslation")
    ], WhatsThis.prototype, "onGetTranslation", null);
    __decorate([
        Bound
    ], WhatsThis.prototype, "owoifySection", null);
    exports.default = WhatsThis;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNUaGlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1doYXRzVGhpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFXQSxNQUFNLFdBQVcsR0FBRztRQUNuQixTQUFTO1FBQ1QsVUFBVTtRQUNWLE9BQU87UUFDUCxRQUFRO1FBQ1IsT0FBTztRQUNQLE9BQU87UUFDUCxXQUFXO1FBQ1gsU0FBUztRQUNULE9BQU87UUFDUCxPQUFPO1FBQ1AsU0FBUztRQUNULFFBQVE7UUFDUixPQUFPO1FBQ1AsS0FBSztRQUNMLFFBQVE7UUFDUixPQUFPO1FBQ1AsVUFBVTtLQUNWLENBQUM7SUFFRixNQUFNLG1CQUFtQixHQUFtQztRQUUzRCxjQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxjQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsY0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLGNBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxjQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLGNBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxjQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLGNBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVELGNBQUss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