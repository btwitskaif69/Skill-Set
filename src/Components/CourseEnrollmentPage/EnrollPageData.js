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
    description: "Learn data analysis using Google tools.",
    enrollmentCount: 304498,
  },
  {
    id: 2,
    logo: Educator.IBM,
    title: "IBM Data Science",
    description: "Master data science with IBM.",
    enrollmentCount: 200000,
  },
  {
    id: 3,
    logo: Educator.Aws,
    title: "AWS Solutions Architect",
    description: "Become an AWS certified solutions architect.",
    enrollmentCount: 150000,
  },
  {
    id: 4,
    logo: Educator.Meta,
    title: "Meta Front-End Development",
    description: "Become an AWS certified solutions architect.",
    enrollmentCount: 150000,
  },
];

export { enroll, Educator };
