const first = { a: 5, b: 2, c: 4, e: 6 };
const second = { a: 5, b: 2, c: 4, e: 6 };

if (compareObject(first, second)) {
    console.log("Matched");
} else {
    console.log("Not Matched");
}

function compareObject(first, second) {
    const firstKey = Object.keys(first);
    const secondKey = Object.keys(second);
    if (firstKey.length === secondKey.length) {
        for (const keys of firstKey) {
            if (first[keys] !== second[keys]) {
                return false;
            }
        }
        return true;
    }
}