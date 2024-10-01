const Educator = {
  Aws: '/Assets/Educator/Aws.svg',
  Duke_University: '/Assets/Educator/Duke_University.svg',
  Google: '/Assets/Educator/Google.svg',
  Harvard_University: '/Assets/Educator/Harvard_University.svg',
  IBM: '/Assets/Educator/IBM.svg',
  Meta: '/Assets/Educator/Meta.svg',
  MIT: '/Assets/Educator/Mit.svg',
  Stanford_University: '/Assets/Educator/Stanford_University.svg',
  University_of_Cambridge: '/Assets/Educator/University_of_Cambridge.svg',
  University_of_Michigan: '/Assets/Educator/University_of_Michigan.svg',
  University_of_Oxford: '/Assets/Educator/University_of_Oxford.svg',
  University_of_Pennsylvania: '/Assets/Educator/University_of_Pennsylvania.svg',
};

const enroll = [
  {
    id: 1,
    logo: Educator.Google,
    title: "Google Data Analytics",
    description: "Launch your career as a data analyst. Build job-ready skills and earn a credential from Google.",
    enrollmentCount: 304498,
    coursesCount: 5,         // New field for the number of courses
    difficulty: "Beginner",   // New field for difficulty level
    duration: "6 Months",     // New field for duration
    hoursPerWeek: "4 hours/week" // New field for hours per week
  },
  {
    id: 2,
    logo: Educator.IBM,
    title: "IBM Data Science",
    description: "Master data science with IBM.",
    enrollmentCount: 200000,
    coursesCount: 10,
    difficulty: "Intermediate",
    duration: "9 Months",
    hoursPerWeek: "5 hours/week"
  },
  {
    id: 3,
    logo: Educator.Aws,
    title: "AWS Solutions Architect",
    description: "Become an AWS certified solutions architect.",
    enrollmentCount: 150000,
    coursesCount: 7,
    difficulty: "Advanced",
    duration: "8 Months",
    hoursPerWeek: "6 hours/week"
  },
  {
    id: 4,
    logo: Educator.Meta,
    title: "Meta Front-End Development",
    description: "Launch your career as a front-end developer with Meta.",
    enrollmentCount: 120000,
    coursesCount: 6,
    difficulty: "Beginner",
    duration: "7 Months",
    hoursPerWeek: "5 hours/week"
  }
];

export { enroll, Educator };
