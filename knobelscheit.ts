export function roll() {
    return Math.floor(Math.random() * 6) + 1;;
}

export function getCombinations(target: number, availableNumbers: number[]): number[][] {
    const results: number[][] = [];

    function backtrack(startIndex: number, currentCombination: number[], remainingNumbers: number): void {
        if (remainingNumbers === 0) {
            results.push([...currentCombination]);
            return;
        }
        for (let index = startIndex; index < availableNumbers.length; index++) {
            if (availableNumbers[index] <= remainingNumbers) {
                currentCombination.push(availableNumbers[index]);
                backtrack(index + 1, currentCombination, remainingNumbers - availableNumbers[index]);
                currentCombination.pop();
            }
        }
    }
    backtrack(0, [], target)
    return results;
}