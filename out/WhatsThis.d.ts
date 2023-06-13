/*!
 * Copyright 2011-2023 Unlok
 * https://www.unlok.ca
 *
 * Credits & Thanks:
 * https://www.unlok.ca/credits-thanks/
 *
 * Wayward is a copyrighted and licensed work. Modification and/or distribution of any source files is prohibited. If you wish to modify the game in any way, please refer to the modding guide:
 * https://github.com/WaywardGame/types/wiki
 */
import Language from "language/Language";
import LanguageManager from "language/LanguageManager";
import Mod from "mod/Mod";
import { IStringSection } from "utilities/string/Interpolator";
declare class Engwibsh extends Language {
    constructor();
    getTranslation(dictionaryName: string, entry: string): string[] | undefined;
}
export default class WhatsThis extends Mod {
    readonly engwibsh: Engwibsh;
    onInitialize(): void;
    onGetTranslation(lm: LanguageManager, translation: IStringSection[]): IStringSection[];
    private owoifySection;
}
export {};
