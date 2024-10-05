//.map() = accepts a callback and pplies that function
//         to each element of an array, then return a new array

const number = [1, 2, 3, 4, 5];

const squares = number.map(square);

console.log(squares);

function square(element) {
    return Math.pow(element, 2)
}


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(FormatDates);

function FormatDates(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]} / ${parts[0]}`;
}
