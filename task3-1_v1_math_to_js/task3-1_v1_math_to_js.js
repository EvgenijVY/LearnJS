'use strict';

let m = prompt('Input M');
let confirmed = '';

for (let x = 0; x <= m ** (1 / 3); x++) {
    for (let y = 0; y <= (m - x ** 3) ** (1 / 3); y++) {
        for (let z = 0; z <= (m - x ** 3 - y ** 3) ** (1 / 3); z++) {
            if (x ** 3 + y ** 3 + z ** 3 == m) {
                confirmed += '(' + x + ', ' + y + ', ' + z + ')' + '\n';
            }
        }
    }
}
alert(confirmed);