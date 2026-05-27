import { assertEquals } from "@std/assert";
import { roll } from "./knobelscheit.ts";

Deno.test("roll_minOne", function addTest(){
    assertEquals(roll() >= 1, true);
});

Deno.test("roll_maxSix", function addTest(){
    const rollResults: number[] = Array.from({length: 100}, roll);

    assertEquals(rollResults.every(result => result >= 1 && result <= 6), true);
    assertEquals(new Set(rollResults).size > 1, true);
});




