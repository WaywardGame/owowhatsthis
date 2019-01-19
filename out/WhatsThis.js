var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "language/English", "language/Language", "mod/IHookHost", "mod/Mod", "mod/ModRegistry", "utilities/Iterable/Generators", "utilities/Objects", "utilities/Random"], function (require, exports, English_1, Language_1, IHookHost_1, Mod_1, ModRegistry_1, Generators_1, Objects_1, Random_1) {
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
        Generators_1.tuple(/\bthe\b/g, ["twa", "tba", "da"]),
        Generators_1.tuple(/\byes\b/g, ["mmhmb"]),
        Generators_1.tuple(/\byou\b/g, ["uwu", "uwu", "uwu", "u"]),
        Generators_1.tuple(/\byour\b/g, ["uwus", "uwus", "uwus", "ur"]),
        Generators_1.tuple(/\band\b/g, ["awnd", "awd"]),
        Generators_1.tuple(/\bof\b/g, ["ob", "obf", "owf", "owbf"]),
        Generators_1.tuple(/\bbut\b/g, ["bwt", "bwut"]),
        Generators_1.tuple(/\bin\b/g, ["ibn", "ib", "iwn", "iwn", "iwn", "iwbn"]),
        Generators_1.tuple(/\bas\b/g, ["az", "abs", "aws"]),
        Generators_1.tuple(/\bto\b/g, ["two", "twu", "twu", "tu", "tbu"]),
        Generators_1.tuple(/on\b/g, ["ob", "own", "own", "own", "own", "owbn"]),
        Generators_1.tuple(/ws/g, ["wbs", "ws", "ws"]),
        Generators_1.tuple(/ell/g, ["eww"]),
        Generators_1.tuple(/ll/g, ["l", "bl"]),
        Generators_1.tuple(/off/g, ["awf", "owf", "owf", "owff"]),
        Generators_1.tuple(/ng(s?)\b/g, ["nb$1", "nb$1", "nb$1", "inb$1"]),
        Generators_1.tuple(/\bc(?=\w)[^h]/g, ["cw"]),
        Generators_1.tuple(/(\w)v/g, ["$1bv"]),
        Generators_1.tuple(/\bv/g, ["b"]),
        Generators_1.tuple(/\bmy/g, ["mwie"]),
        Generators_1.tuple(/ight/g, ["ibte"]),
        Generators_1.tuple(/igh/g, ["i"]),
        Generators_1.tuple(/lt/g, ["wld", "wld", "wld", "wlbd"]),
        Generators_1.tuple(/ine/g, ["iwne"]),
        Generators_1.tuple(/lf/g, ["lbf"]),
        Generators_1.tuple(/(e[ae])(d)/g, ["$1bd"]),
        Generators_1.tuple(/e[ae]/g, ["ee", "ii", "ie"]),
        Generators_1.tuple(/\bh([aeiouy])/g, ["hw$1"]),
        Generators_1.tuple(/uce/g, ["ubs"]),
        Generators_1.tuple(/(\w)one\b/g, ["$1own"]),
        Generators_1.tuple(/([pbcst])l/g, ["$1w"]),
        Generators_1.tuple(/od/g, ["owd"]),
        Generators_1.tuple(/\bl|r/g, ["w"]),
        Generators_1.tuple(/wh/g, ["w", "wb"]),
        Generators_1.tuple(/ch/g, ["cw"]),
        Generators_1.tuple(/([aeiou]|\b)l([aeiouy])/g, ["$1l$2"]),
        Generators_1.tuple(/sh(\w)/g, ["sw$1"]),
        Generators_1.tuple(/(\w)sh/g, ["$1bsh"]),
        Generators_1.tuple(/(\w)o/g, ["$1owo", "$1o", "$1o", "$1o"]),
        Generators_1.tuple(/ng(\w)/g, ["ngb$1"]),
        Generators_1.tuple(/(\w)me\b/g, ["$1mbe"]),
        Generators_1.tuple(/qu/g, ["kw"]),
        Generators_1.tuple(/([uo])t/g, ["$1bt"]),
        Generators_1.tuple(/isc/g, ["ibsk"]),
        Generators_1.tuple(/ck/g, ["k"]),
        Generators_1.tuple(/us/g, ["uws"]),
        Generators_1.tuple(/([aeiouy])st/g, ["$1wst"]),
        Generators_1.tuple(/tt/g, ["t", "t", "t", "d"]),
        Generators_1.tuple(/\bth/g, ["d"]),
        Generators_1.tuple(/th/g, ["tw", "dt"]),
        Generators_1.tuple(/(\w)tio(\w)/g, ["$1two$2"]),
        Generators_1.tuple(/(\w)m([aeiou])/g, ["$1mb$2"]),
        Generators_1.tuple(/no/g, ["noo"]),
        Generators_1.tuple(/rs/g, ["s"]),
        Generators_1.tuple(/ant/g, ["abnt"]),
        Generators_1.tuple(/any/g, ["awny"]),
        Generators_1.tuple(/!( |$)/g, [" ! ", "! ", " !! ", "! ! ", "! ", "!!!! ", " !! ! "], true),
        Generators_1.tuple(/\?( |$)/g, ["?? ", "??? ", " ?? ? ", "??? ?! ", " ?! ", "!? ", " ??!! ", "!?? ! ", "!?? ", "!???!?!!?? ", " !!? !? "], true),
        Generators_1.tuple(/,/g, [",,", ",", "...,,"]),
        Generators_1.tuple(/(\w)\.( |$)/g, ["$1, ", "$1,, ", "$1... ", "$1. ", "$1. . ", "$1,. ", "$1! ", "$1! ! "], true),
        Generators_1.tuple(/\.\.\.( |$)/g, [",,.. ", "... ", "...... ", ". .... ", ",...... "]),
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
        onGetTranslation(translation) {
            if (languageManager.language !== this.engwibsh.language) {
                return translation;
            }
            return translation.map(section => (Object.assign({}, section, { content: section.owoified ? section.content : this.owoifySection(section.content), owoified: true })));
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
        IHookHost_1.HookMethod
    ], WhatsThis.prototype, "onGetTranslation", null);
    __decorate([
        Objects_1.Bound
    ], WhatsThis.prototype, "owoifySection", null);
    exports.default = WhatsThis;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNUaGlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1doYXRzVGhpcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFVQSxNQUFNLFdBQVcsR0FBRztRQUNuQixTQUFTO1FBQ1QsVUFBVTtRQUNWLE9BQU87UUFDUCxRQUFRO1FBQ1IsT0FBTztRQUNQLE9BQU87UUFDUCxXQUFXO1FBQ1gsU0FBUztRQUNULE9BQU87UUFDUCxPQUFPO1FBQ1AsU0FBUztRQUNULFFBQVE7UUFDUixPQUFPO1FBQ1AsS0FBSztRQUNMLFFBQVE7UUFDUixPQUFPO1FBQ1AsVUFBVTtLQUNWLENBQUM7SUFFRixNQUFNLG1CQUFtQixHQUFtQztRQUUzRCxrQkFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsa0JBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixrQkFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLGtCQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsa0JBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsa0JBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxrQkFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsQyxrQkFBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFD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