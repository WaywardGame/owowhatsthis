var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "event/EventBuses", "event/EventManager", "language/English", "language/Language", "mod/Mod", "mod/ModRegistry", "utilities/collection/Tuple", "utilities/random/RandomUtilities", "utilities/Decorators"], function (require, exports, EventBuses_1, EventManager_1, English_1, Language_1, Mod_1, ModRegistry_1, Tuple_1, RandomUtilities_1, Decorators_1) {
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
        (0, Tuple_1.Tuple)(/\bthe\b/g, ["twa", "tba", "da"]),
        (0, Tuple_1.Tuple)(/\byes\b/g, ["mmhmb"]),
        (0, Tuple_1.Tuple)(/\byou\b/g, ["uwu", "uwu", "uwu", "u"]),
        (0, Tuple_1.Tuple)(/\byour\b/g, ["uwus", "uwus", "uwus", "ur"]),
        (0, Tuple_1.Tuple)(/\band\b/g, ["awnd", "awd"]),
        (0, Tuple_1.Tuple)(/\bof\b/g, ["ob", "obf", "owf", "owbf"]),
        (0, Tuple_1.Tuple)(/\bbut\b/g, ["bwt", "bwut"]),
        (0, Tuple_1.Tuple)(/\bin\b/g, ["ibn", "ib", "iwn", "iwn", "iwn", "iwbn"]),
        (0, Tuple_1.Tuple)(/\bas\b/g, ["az", "abs", "aws"]),
        (0, Tuple_1.Tuple)(/\bto\b/g, ["two", "twu", "twu", "tu", "tbu"]),
        (0, Tuple_1.Tuple)(/on\b/g, ["ob", "own", "own", "own", "own", "owbn"]),
        (0, Tuple_1.Tuple)(/ws/g, ["wbs", "ws", "ws"]),
        (0, Tuple_1.Tuple)(/ell/g, ["eww"]),
        (0, Tuple_1.Tuple)(/ll/g, ["l", "bl"]),
        (0, Tuple_1.Tuple)(/off/g, ["awf", "owf", "owf", "owff"]),
        (0, Tuple_1.Tuple)(/ng(s?)\b/g, ["nb$1", "nb$1", "nb$1", "inb$1"]),
        (0, Tuple_1.Tuple)(/\bc(?=\w)[^h]/g, ["cw"]),
        (0, Tuple_1.Tuple)(/(\w)v/g, ["$1bv"]),
        (0, Tuple_1.Tuple)(/\bv/g, ["b"]),
        (0, Tuple_1.Tuple)(/\bmy/g, ["mwie"]),
        (0, Tuple_1.Tuple)(/ight/g, ["ibte"]),
        (0, Tuple_1.Tuple)(/igh/g, ["i"]),
        (0, Tuple_1.Tuple)(/lt/g, ["wld", "wld", "wld", "wlbd"]),
        (0, Tuple_1.Tuple)(/ine/g, ["iwne"]),
        (0, Tuple_1.Tuple)(/lf/g, ["lbf"]),
        (0, Tuple_1.Tuple)(/(e[ae])(d)/g, ["$1bd"]),
        (0, Tuple_1.Tuple)(/e[ae]/g, ["ee", "ii", "ie"]),
        (0, Tuple_1.Tuple)(/\bh([aeiouy])/g, ["hw$1"]),
        (0, Tuple_1.Tuple)(/uce/g, ["ubs"]),
        (0, Tuple_1.Tuple)(/(\w)one\b/g, ["$1own"]),
        (0, Tuple_1.Tuple)(/([pbcst])l/g, ["$1w"]),
        (0, Tuple_1.Tuple)(/od/g, ["owd"]),
        (0, Tuple_1.Tuple)(/\bl|r/g, ["w"]),
        (0, Tuple_1.Tuple)(/wh/g, ["w", "wb"]),
        (0, Tuple_1.Tuple)(/ch/g, ["cw"]),
        (0, Tuple_1.Tuple)(/([aeiou]|\b)l([aeiouy])/g, ["$1l$2"]),
        (0, Tuple_1.Tuple)(/sh(\w)/g, ["sw$1"]),
        (0, Tuple_1.Tuple)(/(\w)sh/g, ["$1bsh"]),
        (0, Tuple_1.Tuple)(/(\w)o/g, ["$1owo", "$1o", "$1o", "$1o"]),
        (0, Tuple_1.Tuple)(/ng(\w)/g, ["ngb$1"]),
        (0, Tuple_1.Tuple)(/(\w)me\b/g, ["$1mbe"]),
        (0, Tuple_1.Tuple)(/qu/g, ["kw"]),
        (0, Tuple_1.Tuple)(/([uo])t/g, ["$1bt"]),
        (0, Tuple_1.Tuple)(/isc/g, ["ibsk"]),
        (0, Tuple_1.Tuple)(/ck/g, ["k"]),
        (0, Tuple_1.Tuple)(/us/g, ["uws"]),
        (0, Tuple_1.Tuple)(/([aeiouy])st/g, ["$1wst"]),
        (0, Tuple_1.Tuple)(/tt/g, ["t", "t", "t", "d"]),
        (0, Tuple_1.Tuple)(/\bth/g, ["d"]),
        (0, Tuple_1.Tuple)(/th/g, ["tw", "dt"]),
        (0, Tuple_1.Tuple)(/(\w)tio(\w)/g, ["$1two$2"]),
        (0, Tuple_1.Tuple)(/(\w)m([aeiou])/g, ["$1mb$2"]),
        (0, Tuple_1.Tuple)(/no/g, ["noo"]),
        (0, Tuple_1.Tuple)(/rs/g, ["s"]),
        (0, Tuple_1.Tuple)(/ant/g, ["abnt"]),
        (0, Tuple_1.Tuple)(/any/g, ["awny"]),
        (0, Tuple_1.Tuple)(/!( |$)/g, [" ! ", "! ", " !! ", "! ! ", "! ", "!!!! ", " !! ! "], true),
        (0, Tuple_1.Tuple)(/\?( |$)/g, ["?? ", "??? ", " ?? ? ", "??? ?! ", " ?! ", "!? ", " ??!! ", "!?? ! ", "!?? ", "!???!?!!?? ", " !!? !? "], true),
        (0, Tuple_1.Tuple)(/,/g, [",,", ",", "...,,"]),
        (0, Tuple_1.Tuple)(/(\w)\.( |$)/g, ["$1, ", "$1,, ", "$1... ", "$1. ", "$1. . ", "$1,. ", "$1! ", "$1! ! "], true),
        (0, Tuple_1.Tuple)(/\.\.\.( |$)/g, [",,.. ", "... ", "...... ", ". .... ", ",...... "]),
    ];
    class Engwibsh extends Language_1.default {
        constructor() {
            super("Engwibsh", true);
        }
        getTranslation(dictionaryName, entry) {
            return English_1.default.getTranslation(dictionaryName, entry);
        }
    }
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
                const replacement = RandomUtilities_1.generalRandom.choice(...replacements);
                if (includeFace && RandomUtilities_1.generalRandom.chance(0.6)) {
                    section = section.replace(regex, match => match.replace(regex, `${replacement}${RandomUtilities_1.generalRandom.choice(...kawaiiFaces)} `));
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
        (0, EventManager_1.EventHandler)(EventBuses_1.EventBus.Language, "postGetTranslation")
    ], WhatsThis.prototype, "onGetTranslation", null);
    __decorate([
        Decorators_1.Bound
    ], WhatsThis.prototype, "owoifySection", null);
    exports.default = WhatsThis;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNUaGlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1doYXRzVGhpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFZQSxNQUFNLFdBQVcsR0FBRztRQUNuQixTQUFTO1FBQ1QsVUFBVTtRQUNWLE9BQU87UUFDUCxRQUFRO1FBQ1IsT0FBTztRQUNQLE9BQU87UUFDUCxXQUFXO1FBQ1gsU0FBUztRQUNULE9BQU87UUFDUCxPQUFPO1FBQ1AsU0FBUztRQUNULFFBQVE7UUFDUixPQUFPO1FBQ1AsS0FBSztRQUNMLFFBQVE7UUFDUixPQUFPO1FBQ1AsVUFBVTtLQUNWLENBQUM7SUFFRixNQUFNLG1CQUFtQixHQUFtQztRQUUzRCxJQUFBLGFBQUssRUFBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUEsYUFBSyxFQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUEsYUFBSyxFQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUEsYUFBSyxFQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUEsYUFBSyxFQUFDLFVBQVUsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFBLGFBQUssRUFBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFBLGFBQUssRUFBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBQSxhQUFLLEVBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxF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