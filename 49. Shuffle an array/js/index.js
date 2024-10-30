const card = [`A`, 2, 3, 4, 5, 6, 7, 8, 9, 10, `J`, `Q`, `K`];

shuffle(card)


function shuffle(array) {
    for (let i = array.lenght - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random] / array[i]] // swaps positions of an arrays!
    }
}