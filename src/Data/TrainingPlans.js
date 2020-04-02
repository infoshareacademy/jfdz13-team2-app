const TrainingPlans = [
  {
    id: 1,
    avatar: "S",
    title: "SLIMMER",
    goal: "Weight loss",
    rating: "3",
    content: "Give us three weeks. We will change your body.",
    step_1:
      "Before each workout, spend 5 minutes doing a brisk walk to get your heart rate up.",
    step_2:
      "Then for 8-9 minutes do some dynamic stretching. Full-body approach with upper body strength exercises maximizes your time and eases you in.",
    step_3:
      "Rest 30–60 second between sets and 1–2 minutes between each exercise. Then for 10 minutes do dynamic stretching.",
    image: `${process.env.PUBLIC_URL}/images/slimmer/slimmer_main.jpg`
  },
  {
    id: 2,
    avatar: "H",
    title: "HARDER",
    goal: "Muscle building",
    rating: "5",
    content: "Sculpt your perfect six-pack in just three weeks.",
    step_1:
      "Before each workout, spend 15 minutes doing a brisk walk to get your heart rate up.",
    step_2:
      "Then for 10 minutes do some dynamic stretching. Approach with upper- and lower-body strength exercises. Complete 3 sets of each exercise.",
    step_3:
      "Treat this routine as a circuit: Complete 1 set of each exercise back to back, rest for 2 minute, then repeat 2 more times.",
    image: `${process.env.PUBLIC_URL}/images/harder/harder_main.jpg`
  },
  {
    id: 3,
    avatar: "S",
    title: "STRONGER",
    goal: "Gain strength",
    rating: "4",
    content: "Over the next 3 weeks you will challenge every limit.",
    step_1:
      "Before each workout, spend 10 minutes doing bike ride to get your heart rate up.",
    step_2:
      "Rest 30–60 second between sets and 1–2 minutes between each exercise. Workout 4: Combination of cardio-based exercises and core-specific moves challenges your endurance.",
    step_3:
      "Treat this routine as a circuit: Complete 1 set of each exercise back to back, rest for 1 minute, then repeat 3 more times.",
    image: `${process.env.PUBLIC_URL}images/stronger/stronger_main.jpg`
  }
];

export default TrainingPlans;
