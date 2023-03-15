// full list of companies, using JS loop, no duplicates

const employee1 = {
    name: "Harrison",
    lastName: "Ford",
    age: 47,
    companies: ["Samsung", "LG", "Sony", "Twitter"]
}

const employee2 = {
    name: "Tom",
    lastName: "Cruz",
    age: 55,
    companies: ["Dell", "Accer", "HP", "Sony"]
}

function compareEmployees(employee1, employee2) {

    if (employee1.companies.length > employee2.companies.length) {
        console.log(employee1.name, employee1.lastName)
    }
    else if (employee1.companies.length < employee2.companies.length) {
        console.log(employee2.name, employee2.lastName)
    }
    else {
        console.log(employee1.name, employee1.lastName, ", ", employee2.name, employee2.lastName);
    }
}
compareEmployees(employee1, employee2);

for (let index = 0; index < employee1.companies.length; index++) {
    console.log(employee1.companies[index]);

}
for (let x in employee2.companies) {
    if (employee1.companies.includes(employee2.companies[x]) === false)
        console.log(employee2.companies[x]);
}
