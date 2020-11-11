const data = require("./data").data;
const args = process.argv.slice(2);

// Inspect the different args
args.map(function (a) {
  // Seperate the value from the arg's name
  a = a.split("=");

  switch (a[0]) {
    // if arg's name is --filter
    case "--filter":
      const filteredData = data
        .map((country) => {
          return {
            ...country,
            people: country.people
              .map((people) => {
                return {
                  ...people,
                  animals: people.animals.filter(
                    // we search for the value in every animal's name
                    (animal) => animal.name.search(a[1]) > -1
                  ),
                };
              })
              // removing people if empty animals
              .filter((people) => people.animals.length > 0),
          };
        })
        // removing country if empty people
        .filter((country) => country.people.length > 0);

      console.log(JSON.stringify(filteredData, null, 2));
      break;

    // if arg's name is --count
    case "--count":
      const countedData = data.map((country) => {
        return {
          ...country,
          // changing country's name to add the number of people
          name: `${country.name} [${country.people.length}]`,
          people: country.people.map((people) => {
            return {
              ...people,
              // changing people's to add the number of animals
              name: `${people.name} [${people.animals.length}]`,
            };
          }),
        };
      });

      console.log(JSON.stringify(countedData, null, 2));
      break;
  }
});
