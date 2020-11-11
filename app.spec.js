const app = require("./app");
const dataTest = require("./data").data;

// -------------------------------------------------------------
// Testing filter on animals by name

test("Filter animals on 'ry' with undefined data.", () => {
  expect(() => {
    app.filterAnimalsByName(undefined, "ry");
  }).toThrow(Error);
});

test("Filter animals on 'ry' with empty data.", () => {
  expect(app.filterAnimalsByName([], "ry")).toStrictEqual([]);
});

test("Filter animals with undefined searching value.", () => {
  expect(() => {
    app.filterAnimalsByName(dataTest);
  }).toThrow(Error);
});

test("Filter animals with an array of searching values.", () => {
  expect(() => {
    app.filterAnimalsByName(dataTest, ["ry", "og", "iz"]);
  }).toThrow(Error);
});

test("Filter animals with empty searching value.", () => {
  expect(app.filterAnimalsByName(dataTest, "")).toStrictEqual(dataTest);
});

test("Filter animals with impossible searching value : 'yuzoqksolq'.", () => {
  expect(app.filterAnimalsByName(dataTest, "yuzoqksolq")).toStrictEqual([]);
});

test("Filter animals on 'ry'.", () => {
  expect(app.filterAnimalsByName(dataTest, "ry")).toStrictEqual([
    {
      name: "Uzuzozne",
      people: [
        {
          name: "Lillie Abbott",
          animals: [
            {
              name: "John Dory",
            },
          ],
        },
      ],
    },
    {
      name: "Satanwi",
      people: [
        {
          name: "Anthony Bruno",
          animals: [
            {
              name: "Oryx",
            },
          ],
        },
      ],
    },
  ]);
});

// -------------------------------------------------------------
// Testing animals and people couting

test("Count animals and people with undefined data.", () => {
  expect(() => {
    app.countAnimalsAndPeople();
  }).toThrow(Error);
});

test("Count animals and people with empty array of data.", () => {
  expect(app.countAnimalsAndPeople([])).toStrictEqual([]);
});

test("Count animals and people with some data.", () => {
  expect(
    app.countAnimalsAndPeople([
      {
        name: "Dillauti",
        people: [
          {
            name: "Winifred Graham",
            animals: [
              { name: "Anoa" },
              { name: "Duck" },
              { name: "Narwhal" },
              { name: "Badger" },
              { name: "Cobra" },
              { name: "Crow" },
            ],
          },
          {
            name: "Blanche Viciani",
            animals: [
              { name: "Barbet" },
              { name: "Rhea" },
              { name: "Snakes" },
              { name: "Antelope" },
              { name: "Echidna" },
              { name: "Crow" },
              { name: "Guinea Fowl" },
              { name: "Deer Mouse" },
            ],
          },
        ],
      },
    ])
  ).toStrictEqual([
    {
      name: "Dillauti [2]",
      people: [
        {
          name: "Winifred Graham [6]",
          animals: [
            { name: "Anoa" },
            { name: "Duck" },
            { name: "Narwhal" },
            { name: "Badger" },
            { name: "Cobra" },
            { name: "Crow" },
          ],
        },
        {
          name: "Blanche Viciani [8]",
          animals: [
            { name: "Barbet" },
            { name: "Rhea" },
            { name: "Snakes" },
            { name: "Antelope" },
            { name: "Echidna" },
            { name: "Crow" },
            { name: "Guinea Fowl" },
            { name: "Deer Mouse" },
          ],
        },
      ],
    },
  ]);
});
