import { Item, GildedRose } from "./gilded-rose";

describe("GIVEN Gilded Rose is initialized", function () {
  let glideRose: GildedRose;
  beforeEach(() => {
    glideRose = new GildedRose([
      new Item("foo", 10, 10),
      new Item("Aged Brie", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
      new Item("Sulfuras, Hand of Ragnaros", 10, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50),
    ]);
  });
  describe("WHEN items are updated", function () {
    let items: Array<Item>;
    beforeEach(() => {
      items = glideRose.updateQuality();
    });

    test("THEN item 'foo' should have quality equals to 9", () => {
      expect(items[0].quality).toEqual(9);
    });

    test("THEN item 'Aged Brie' should have quality equals to 11", () => {
      expect(items[1].quality).toEqual(11);
    });

    test("THEN item 'Backstage passes to a TAFKAL80ETC concert' should have quality equals to 12", () => {
      expect(items[2].quality).toEqual(12);
    });

    test("THEN item 'Sulfuras, Hand of Ragnaros' should have quality equals to 10", () => {
      expect(items[3].quality).toEqual(10);
    });

    test("THEN item 'Backstage passes to a TAFKAL80ETC' with sellIn=5 should have quality increased by 3", () => {
      expect(items[4].quality).toEqual(13);
    });    

    test("THEN item 'Backstage passes to a TAFKAL80ETC' with quality 50 should have not changed quality", () => {
      expect(items[5].quality).toEqual(50);
    });      
  });
});
