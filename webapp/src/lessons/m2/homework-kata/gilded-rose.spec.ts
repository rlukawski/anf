import { Item, GildedRose } from "./gilded-rose";

describe("GIVEN Gilded Rose is initialized", function () {
  let glideRose: GildedRose;
  beforeAll(() => {
    glideRose = new GildedRose([
      new Item("Magic", 10, 10),
      new Item("Aged Brie", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
    ]);
  });
  describe("WHEN items are updated", function () {
    let items: Array<Item>;
    beforeAll(() => {
      items = glideRose.updateQuality();
    });

    test('to match first snapshot', () => {
      expect(items).toMatchSnapshot();
    })   
  });

  describe("WHEN items are updated second time ", function () {
    let items: Array<Item>;
    beforeAll(() => {
      items = glideRose.updateQuality();
    });

    test('to match second snapshot', () => {
      expect(items).toMatchSnapshot();
    })   
  });  
});
