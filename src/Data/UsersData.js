export const users = [
  {
    id: 1,
    name: "Maja",
    sex: "Female",
    age: 34,
    weight: 75,
    weightUnit: "kg",
    height: 160,
    heightUnit: "cm",
    avatarUrl: `${process.env.PUBLIC_URL}/images/girl.svg`,
    firstTraining: "2020 - 02 - 29",
    myTraining: "Slimmer"
  },
  {
    id: 2,
    name: "Xawier",
    sex: "Male",
    age: 23,
    weight: 65,
    weightUnit: "kg",
    height: 180,
    heightUnit: "cm",
    avatarUrl: `${process.env.PUBLIC_URL}/images/man.svg`,
    firstTraining: "2020 - 03 - 15",
    myTraining: "Stronger"
  },
  {
    id: 3,
    name: "Seba",
    sex: "Male",
    age: 45,
    weight: 85,
    weightUnit: "kg",
    height: 190,
    heightUnit: "cm",
    avatarUrl: `${process.env.PUBLIC_URL}/images/boy.svg`,
    firstTraining: "2020 - 03 - 20",
    myTraining: "Harder"
  }
];

export default users;
