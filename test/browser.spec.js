/**
 * @jest-environment jsdom
 */

import Analyzer from "kuroshiro-analyzer-kuromoji";
import Kuroshiro from "../src";

describe("Kuroshiro Browser Test", () => {
    const EXAMPLE_TEXT = "感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！";

    let kuroshiro;

    beforeAll(async () => {
        kuroshiro = new Kuroshiro();
        await kuroshiro.init(new Analyzer());
    });
    it("Util Test", () => {
        const ori = "公";
        const result = Kuroshiro.Util.isKanji(ori);
        expect(result).toBeTruthy();
    });
    it("Convert Test", () => {
        const result = kuroshiro.convert(EXAMPLE_TEXT, { to: "hiragana" });
        expect(result).toEqual("かんじとれたらてをつなごう、かさなるのはじんせいのライン and レミリアさいこう！");
    });
});
