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
    hoursPerWeek: "4 hours/week", // New field for hours per week
    overview: "Elevate your skills in Google Data Analytics with hands-on training and real-world projects, designed for aspiring professionals.",
    badges: [ "John Doe", "Certification Available", "Online"],
    about:"Unlock the power of data with our Google Data Analytics course, designed for aspiring analysts eager to transform raw data into actionable insights. This comprehensive program covers essential analytical skills and tools used by industry leaders to make data-driven decisions.",
    learningOutcomes: [
    "Create a responsive website using HTML and CSS",
    "Use JavaScript to make websites interactive",
    "Use React to create powerful single-page applications",
    "Implement version control with Git and GitHub",
    "Prepare for technical interviews for front-end developer roles"
  ],
  skillsGained: [
    "HTML", "CSS", "JavaScript", "React", "Git",
    "Web Development", "Front-End Development", "UI/UX Design",
    "Responsive Web Design", "Web Application Development"
  ]
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
];

export { enroll, Educator };