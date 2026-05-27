import { assertEquals } from "@std/assert";
import { roll, getCombinations } from "./knobelscheit.ts";

Deno.test("roll_minOne", function addTest() {
    assertEquals(roll() >= 1, true);
});

Deno.test("roll_maxSix", function addTest() {
    const rollResults: number[] = Array.from({ length: 100 }, roll);

    assertEquals(rollResults.every(result => result >= 1 && result <= 6), true);
    assertEquals(new Set(rollResults).size > 1, true);
});

Deno.test("getCombinations_target7_containsSeven", function addTest() {
    const combinations = getCombinations(7, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assertEquals(combinations.some(combination => combination.length === 1 && combination[0] === 7), true)
});

Deno.test("getCombinations_target7_containsThreeAndFour", function addTest() {
    const combinations = getCombinations(7, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assertEquals(combinations.some(combination => combination.includes(3) && combination.includes(4)), true)
});

Deno.test("getCombinations_target7_excludesUnavailableNumbers", function addTest() {
    const combinations = getCombinations(7, [1, 2, 5, 6, 7, 8, 9]);
    assertEquals(combinations.some(combination => combination.includes(3) && combination.includes(4)), false)
});



