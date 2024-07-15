const json_menu = [
    {
        "name": "1. Home",
        "menu": [
            {
                "name": "1.1. history",
                "menu": [
                    {
                        "name": "1.2. history"
                    }
                ]
            }
        ]
    },
    {
        "name": "2. Our product",
        "menu": [
            {
                "name": "2.1. sport car",
                "menu": [
                    {
                        "name": "2.1.1. Lamborghini"
                    },
                    {
                        "name": "2.1.2. mustang"
                    }
                ]
            }
        ]
    },
    {
        "name": "3. contact us"
    }
]

const extractNames = (menu) => {
    let result = [];
    const traverse = (items) => {
        items.forEach(item => {
            if (item.name === "1.1. history" || item.name === "2.1.2. mustang") {
                result.push(item.name);
            }
            if (item.menu) {
                traverse(item.menu);
            }
        });
    };

    traverse(menu);
    return result;
};

const output = extractNames(json_menu);
console.log(output.join('\n'));

/*****************************************************************************************************/
//4
const letters = ["A", "B", "C", "D"];

const printLetter = (arr) => {
    let result = [];
    const print = (items) => {
        items.forEach(item => {
            result.push(item);
            if (item != "D") {
                result.push(" and ");
            }
        }
        )
    };
    print(arr);
    return result;
};

const output2 = printLetter(letters);
console.log(output2.join(''));
/*****************************************************************************************************/
//5
const letter1 = ["A", "B", "C", "D"];
const letter2 = ["A", "B", "C", "D"];
console.log(letter1.concat(letter2));
/*****************************************************************************************************/
//6
letter1.push("E");
console.log(letter1);
