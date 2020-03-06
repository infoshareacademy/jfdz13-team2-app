const TrainingPlans = [
  {
    id: 1,
    name: "Slimmer",
    goal: "Weight loss",
    content:
      "Give us three weeks. We will change your body. Your habbits and your life.",
    image: `${process.env.PUBLIC_URL}/images/slimmer.jpg`
  },
  {
    id: 2,
    name: "Stronger",
    goal: "Gain strength",
    content:
      "Over the next 3 weeks you will chellenge every limit and build unbelivable life-changing fittnes and athleticism",
    image: `${process.env.PUBLIC_URL}/images/stronger.jpg`
  },
  {
    id: 3,
    name: "Harder",
    goal: "Muscle building",
    content: "Sculpt your perfect six-pack in just three weeks",
    image: `${process.env.PUBLIC_URL}/images/harder.jpg`
  }
];

export default TrainingPlans;
