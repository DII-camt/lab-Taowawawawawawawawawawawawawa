const students = [
    662110182, 662110183, 662110184, 662110185, 662110186, 662110187,
    662110188, 662110189, 662110190, 662110191, 662110192, 662110193,
    662110194, 662110195, 662110196, 662110197, 662110198, 662110199,
    662110200, 662110201, 662110202, 662110203, 662110204, 662110205,
    662110265
];




const GroupRandom = (student, n) => {
    for (let i = student.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [student[i], student[j]] = [student[j], student[i]];
    }

    const groups = [];
    let i = 0;

    while (i < student.length) {
        const groupSize = Math.min(n, student.length - i);
        groups.push(student.slice(i, i + groupSize));
        i += groupSize;
    }

    let index = 0;
    while (groups.some(group => group.length < n + 1) && groups.flat().length < student.length) {


        if (groups[index].length < n + 1) {
            groups[index].push(student[i++]);
        }

        index = (index + 1) % groups.length;
    }


    return groups;
};

const output = (n) =>{
const a = GroupRandom(students, n);
console.log(a);
};

