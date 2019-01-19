import Language from "language/Language";
import Mod from "mod/Mod";
import { IStringSection } from "utilities/string/Interpolator";
declare class Engwibsh extends Language {
    constructor();
    getTranslation(dictionaryName: string, entry: string): string[] | undefined;
}
export default class WhatsThis extends Mod {
    readonly engwibsh: Engwibsh;
    onGetTranslation(translation: IStringSection[]): IStringSection[];
    private owoifySection;
}
export {};
