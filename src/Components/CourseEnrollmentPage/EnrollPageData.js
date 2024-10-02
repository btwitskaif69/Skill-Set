const Educator = {
  Aws: "/Assets/Educator/Aws.svg",
  Duke_University: "/Assets/Educator/Duke_University.svg",
  Google: "/Assets/Educator/Google.svg",
  Harvard_University: "/Assets/Educator/Harvard_University.svg",
  IBM: "/Assets/Educator/IBM.svg",
  Meta: "/Assets/Educator/Meta.svg",
  MIT: "/Assets/Educator/Mit.svg",
  Stanford_University: "/Assets/Educator/Stanford_University.svg",
  University_of_Cambridge: "/Assets/Educator/University_of_Cambridge.svg",
  University_of_Michigan: "/Assets/Educator/University_of_Michigan.svg",
  University_of_Oxford: "/Assets/Educator/University_of_Oxford.svg",
  University_of_Pennsylvania: "/Assets/Educator/University_of_Pennsylvania.svg",
};

const Instructor = {
  image1: "/Assets/Profile/image1.jpg",
  image2: "/Assets/Profile/image2.jpg",
  image3: "/Assets/Profile/image3.jpg",
  image4: "/Assets/Profile/image4.jpg",
  image5: "/Assets/Profile/image5.jpg",
  image6: "/Assets/Profile/image6.jpg",
  image7: "/Assets/Profile/image7.jpg",
  image8: "/Assets/Profile/image8.jpg",
  image9: "/Assets/Profile/image9.jpg",
  image10: "/Assets/Profile/image10.jpg",
};

const enroll = [
  {
    id: 1,
    logo: Educator.Google,
    title: "Google Data Analytics",
    description:"Launch your career as a data analyst. Build job-ready skills and earn a credential from Google.",
    enrollmentCount: 304498,
    coursesCount: 5, // New field for the number of courses
    difficulty: "Beginner", // New field for difficulty level
    duration: "6 Months", // New field for duration
    hoursPerWeek: "4 hours/week", // New field for hours per week
    about:"Unlock the power of data with our Google Data Analytics course, designed for aspiring analysts eager to transform raw data into      actionable insights. This comprehensive program covers essential analytical skills and tools used by industry leaders to make data-driven decisions.",
    badges: ["John Doe", "Certification Available", "Online"],
    objectives: [
      "Create a responsive website using HTML and CSS",
      "Use JavaScript to make websites interactive",
      "Use React to create powerful single-page applications",
      "Implement version control with Git and GitHub",
      "Prepare for technical interviews for front-end developer roles",
    ],
    skillsGained: [ "HTML", "CSS", "JavaScript", "React", "Git", "Web Development", "Front-End Development", "UI/UX Design", "Responsive Web Design", "Web Application Development"],
    instructorname: "Dr. Jane Smith, Ph.D.",
    instructorimage: Instructor.image1,
    experience:"15+ years of experience in web development and software engineering. Former lead developer at Tech Giant Inc. and author of 'Mastering Modern Web Development'.",
    expertise: ["JavaScript Expert", "React Guru", "Node.js Specialist"],
    learningoutcomes: [
      "Master advanced JavaScript concepts and ES6+ features",
      "Build complex, scalable applications with React and state management tools",
      "Develop robust backend systems using Node.js and Express",
      "Implement authentication, database integration, and RESTful APIs",
      "Understand and apply modern architectural patterns like Microservices and Serverless",
      "Gain hands-on experience with real-world projects and industry best practices",
    ],
    faqs: [
      {
        question: "What are the prerequisites for this course?",
        answer:
          "A basic understanding of JavaScript and web development concepts is recommended, but not required.",
      },
      {
        question: "Is there a money-back guarantee?",
        answer:
          "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course.",
      },
      {
        question: "Will I receive a certificate upon completion?",
        answer:
          "Yes, you'll receive a certificate of completion after finishing all course modules and assignments.",
      },
      {
        question: "How much time should I dedicate to the course each week?",
        answer:
          "We recommend dedicating 5-10 hours per week, depending on your prior experience.",
      },
      {
        question: "Is the course completely online?",
        answer:
          "Yes, the course is 100% online and can be accessed from anywhere.",
      },
    ],
    courseseries: "5 course series",

    coursedesc:
      "Looking to kickstart a career in coding and web development? This certificate, created by software engineering experts at Meta—the minds behind Facebook and Instagram—will set you on the path to becoming a front-end developer.",

    coursedetails: [
      "The basics of coding and crafting interactive web pages with HTML5, CSS, and JavaScript.",
      "Essential design techniques to build professional-grade layouts using popular tools like Bootstrap, React, and Figma.",
      "How to manage code with GitHub, work with content management systems (CMS), and enhance images using Figma.",
      "Tips and strategies to excel in technical interviews for front-end developer positions.",
      "Understand and apply modern architectural patterns like Microservices and Serverless",
      "Gain hands-on experience with real-world projects and industry best practices",
    ],

    Summary:
      "By the program’s conclusion, you’ll apply your skills in a real-world project, where you’ll develop a front-end web application from scratch. Please note, third-party trademarks, logos, and intellectual property referenced remain the property of their respective owners, and Coursera’s mention of them does not imply any affiliation or endorsement.",

    practicallearning:
      "This program offers hands-on learning, allowing you to directly apply the skills you acquire. Each course concludes with a project to ensure you have fully grasped the concepts before moving forward. Across 9 projects, you’ll work on tasks such as:",

    learningexperience: [
      "Updating your personal Bio page, utilizing your knowledge of HTML5, CSS, and UI frameworks.",
      "Managing a project on GitHub, employing version control through Git repositories and the Linux Terminal.",
      "Building a static version of an application, applying concepts of React, frameworks, hooks, routing, and bundlers.",
      "",
    ],

    conclusion:
      "Finally, you’ll complete a Capstone project, bringing all of your newfound skills together to create a fully functioning front-end web application.",

      courses: [
        {
          title: "Introduction to Front-End Development",
          lessons: [
            "Distinguish between front-end, back-end, and full-stack developers.",
            "Create and style a webpage with HTML and CSS.",
            "The benefits of working with UI frameworks."
          ],
          knowledgeGained: [
            "Version Control",
            "GitHub",
            "Bash (Unix Shell)",
            "Web Development",
            "Linux",
          ]
        },
        {
          title: "Programming with JavaScript",
          lessons: [
            "Distinguish between front-end, back-end, and full-stack developers.",
            "Create and style a webpage with HTML and CSS.",
            "The benefits of working with UI frameworks."
          ],
          knowledgeGained: [
            "Version Control",
            "GitHub",
            "Bash (Unix Shell)",
            "Web Development",
            "Linux"
          ]
        },
        {
          title: "Version Control",
          lessons: [
            "Implement Version Control systems.",
            "Navigate and configure using the command line",
            "Use a GitHub repository. Create a GitHub repository",
            "Manage code revisions"
          ],
          knowledgeGained: [
            "React (Web Framework)",
            "Application Development",
            "Web Application",
            "Front-End Web Development"
          ]
        },
        {
          title: "HTML and CSS in Depth",
          lessons: [
            "Create a simple form with a responsive layout using HTML5 and CSS.",
            "Create a responsive layout using CSS.",
            "Create a UI using Bootstrap.",
            "Implement debugging tools."
          ],
          knowledgeGained: [
            "Data Structure",
            "Computer Science",
            "Algorithms",
            "Communication",
            "Pseudocode"
          ]
        },
        {
          title: "React",
          lessons: [
            "Use reusable components to render views where data changes over time.",
            "Organize React projects to create more scalable and maintainable websites and apps.",
            "Use props to pass data between components.",
            "Create dynamic and interactive web pages and apps."
          ],
          knowledgeGained: [
            "Test-Driven Development",
            "JavaScript",
            "Front-End Web Development",
            "Object-Oriented Programming (OOP)"
          ]
        }
      ],
  },
  {
    id: 2,
    logo: Educator.IBM,
    title: "IBM Data Science",
    description: "Become a data scientist with the skills needed to manage, analyze, and interpret data.",
    enrollmentCount: 150000,
    coursesCount: 5, // Number of courses in the series
    difficulty: "Intermediate", // Difficulty level
    duration: "3 Months", // Course duration
    hoursPerWeek: "5 hours/week", // Recommended hours per week
    about: "This comprehensive Data Science course by IBM provides a deep dive into the skills required for data analysis. You'll learn how to manipulate data using Python, create visualizations, and apply machine learning algorithms, gaining hands-on experience through projects and real-world datasets.",
    badges: ["John Doe", "Certification Available", "Online"],
    objectives: [
      "Understand data science methodologies and processes.",
      "Use Python for data analysis and visualization.",
      "Apply machine learning techniques to real-world problems.",
      "Work with big data frameworks like Spark and Hadoop.",
      "Prepare for a career in data science and analytics."
    ],
    skillsGained: [
      "Python",
      "Data Analysis",
      "Machine Learning",
      "Data Visualization",
      "Pandas",
      "NumPy",
      "Big Data",
      "Spark",
      "Statistics",
      "SQL"
    ],
    instructorname: "Dr. Robert Brown, Ph.D.",
    instructorimage: Instructor.image2,
    experience: "20+ years of experience in data science and analytics. Former lead data scientist at IBM and author of several publications in the field of machine learning.",
    expertise: ["Machine Learning Specialist", "Data Analysis Expert", "Big Data Professional"],
    learningoutcomes: [
      "Gain proficiency in Python programming for data analysis.",
      "Master data manipulation and cleaning techniques.",
      "Build predictive models using machine learning algorithms.",
      "Visualize data effectively using libraries like Matplotlib and Seaborn.",
      "Implement big data technologies and frameworks in projects."
    ],
    faqs: [
      {
        question: "What are the prerequisites for this course?",
        answer: "A basic understanding of programming and statistics is recommended, but not required."
      },
      {
        question: "Is there a money-back guarantee?",
        answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course."
      },
      {
        question: "Will I receive a certificate upon completion?",
        answer: "Yes, you'll receive a certificate of completion after finishing all course modules and assignments."
      },
      {
        question: "How much time should I dedicate to the course each week?",
        answer: "We recommend dedicating 5-10 hours per week, depending on your prior experience."
      },
      {
        question: "Is the course completely online?",
        answer: "Yes, the course is 100% online and can be accessed from anywhere."
      }
    ],
    courseseries: "5 course series",
  
    coursedesc: "This Data Science certificate from IBM is designed to help you build job-ready skills in data analysis and machine learning. You will gain practical knowledge and experience needed to thrive in a data-driven world.",
  
    coursedetails: [
      "Learn the fundamentals of data science and its applications.",
      "Get hands-on experience with Python and its data science libraries.",
      "Understand the principles of machine learning and how to implement algorithms.",
      "Explore big data technologies and their role in data analysis.",
      "Gain skills in data visualization to communicate insights effectively."
    ],
  
    Summary: "By the end of the program, you will be equipped to tackle complex data science problems, make data-driven decisions, and work collaboratively on data projects in diverse environments. Please note that third-party trademarks, logos, and intellectual property referenced remain the property of their respective owners, and IBM’s mention of them does not imply any affiliation or endorsement.",
  
    practicallearning: "This program emphasizes hands-on learning, with projects that allow you to apply your skills. You will work on real-world datasets, creating solutions that demonstrate your understanding of data science concepts.",
  
    learningexperience: [
      "Analyzing datasets using Python and Pandas to extract valuable insights.",
      "Building machine learning models to predict outcomes based on historical data.",
      "Creating interactive dashboards to visualize data and present findings to stakeholders.",
      "Working with big data technologies to process large volumes of information."
    ],
  
    conclusion: "Finally, you will complete a capstone project, where you will apply your skills to solve a real-world data problem, integrating all you have learned throughout the program.",
  
    courses: [
      {
        title: "Introduction to Data Science",
        lessons: [
          "Understand the data science workflow.",
          "Explore different data types and sources.",
          "Learn about the role of a data scientist."
        ],
        knowledgeGained: [
          "Data Science Fundamentals",
          "Data Acquisition",
          "Exploratory Data Analysis"
        ]
      },
      {
        title: "Data Analysis with Python",
        lessons: [
          "Perform data manipulation using Pandas.",
          "Visualize data with Matplotlib and Seaborn.",
          "Handle missing data and perform data cleaning."
        ],
        knowledgeGained: [
          "Python for Data Analysis",
          "Data Cleaning Techniques",
          "Data Visualization"
        ]
      },
      {
        title: "Machine Learning Fundamentals",
        lessons: [
          "Understand supervised vs. unsupervised learning.",
          "Implement basic machine learning algorithms.",
          "Evaluate model performance."
        ],
        knowledgeGained: [
          "Machine Learning Basics",
          "Model Evaluation Techniques",
          "Regression and Classification"
        ]
      },
      {
        title: "Big Data Technologies",
        lessons: [
          "Introduction to big data and its ecosystem.",
          "Learn about Hadoop and Spark.",
          "Process data using MapReduce."
        ],
        knowledgeGained: [
          "Big Data Fundamentals",
          "Hadoop Ecosystem",
          "Spark Programming"
        ]
      },
      {
        title: "Data Visualization Techniques",
        lessons: [
          "Learn effective visualization principles.",
          "Create dashboards with Tableau and Power BI.",
          "Communicate data insights to stakeholders."
        ],
        knowledgeGained: [
          "Data Visualization Tools",
          "Dashboard Creation",
          "Insight Communication"
        ]
      }
    ],
  },
  
  {
    id: 3,
    title: "AWS Solutions Architect",
  },
  {
    id: 4,
    title: "Meta Front-End Development",
  },
  {
    id: 5,
    title: "AI Fundamentals",
  },
  {
    id: 6,
    title: "Stanford Machine Learning",
  },
  {
    id: 7,
    title: "Cambridge Data Science",
  },
  {
    id: 8,
    title: "Oxford Cyber Security",
  },
  {
    id: 9,
    title: "Harvard Business Analytics",
  },
  {
    id: 10,
    title: "MIT Blockchain Technology",
  },
  {
    id: 11,
    title: "AR/VR Development",
  },
  {
    id: 12,
    title: "Quantum Computing",
  },
  {
    id: 13,
    title: "Leadership and Management",
  },
  {
    id: 14,
    title: "Mobile App Development",
  },
  {
    id: 15,
    title: "AI Ethics",
  },
  {
    id: 16,
    title: "Google Cloud ML",
  },
  {
    id: 17,
    title: "IBM Blockchain Essentials",
  },
  {
    id: 18,
    title: "Meta AR/VR Development",
  },
  {
    id: 19,
    title: "Financial Engineering",
  },
  {
    id: 20,
    title: "Stanford Deep Learning",
  },
  {
    id: 21,
    title: "Advanced Data Analysis",
  },
  {
    id: 22,
    title: "Oxford Fintech",
  },
  {
    id: 23,
    title: "Google Mobile Dev",
  },
  {
    id: 24,
    title: "IBM Artificial Intelligence",
  },
  {
    id: 25,
    title: "Meta Advanced JavaScript",
  },
  {
    id: 26,
    title: "AWS DevOps Engineer",
  },
  {
    id: 27,
    title: "Stanford Cybersecurity",
  },
  {
    id: 28,
    title: "Cambridge AI Ethics",
  },
  {
    id: 29,
    title: "Oxford Leadership Program",
  },
  {
    id: 30,
    title: "Google Cloud Solutions",
  },
  {
    id: 31,
    title: "Data Science with Python",
},
{
    id: 32,
    title: "Introduction to AI",
},
{
    id: 33,
    title: "Full-Stack Web Development",
},
{
    id: 34,
    title: "Data Visualization with Tableau",
},
{
    id: 35,
    title: "Advanced JavaScript Concepts",
},
{
    id: 36,
    title: "Cybersecurity Fundamentals",
},
{
    id: 37,
    title: "Deep Learning with TensorFlow",
},
{
    id: 38,
    title: "Robotics Process Automation",
},
{
    id: 39,
    title: "Natural Language Processing",
},
{
    id: 40,
    title: "DevOps Fundamentals",
},
{
    id: 41,
    title: "Financial Data Analysis",
},
{
    id: 42,
    title: "Advanced Python Programming",
},
{
    id: 43,
    title: "Building Scalable Web Apps",
},
{
    id: 44,
    title: "Introduction to Cloud Computing",
},
{
    id: 45,
    title: "Blockchain Basics",
},
{
    id: 46,
    title: "Ethical Hacking Bootcamp",
},
{
    id: 47,
    title: "Data Science for Business",
},
{
    id: 48,
    title: "Machine Learning for Finance",
},
{
    id: 49,
    title: "Web Accessibility Essentials",
},
{
    id: 50,
    title: "Introduction to Data Science",
},
{
    id: 51,
    title: "Cloud Architecture Basics",
},
{
    id: 52,
    title: "Fundamentals of Data Science",
},
{
    id: 53,
    title: "Introduction to Quantum Computing",
},
{
    id: 54,
    title: "Full-Stack Development with MERN",
},
{
    id: 55,
    title: "Ethics in AI",
},
{
    id: 56,
    title: "Data Mining Techniques",
},
{
    id: 57,
    title: "Game Development with Unity",
},
{
    id: 58,
    title: "Web Development Bootcamp",
},
{
    id: 59,
    title: "Artificial Intelligence for Beginners",
},
{
    id: 60,
    title: "Data Analytics for Business",
},
{
    id: 61,
    title: "Introduction to Blockchain Technology",
},
{
    id: 62,
    title: "Data Science with R",
},
{
    id: 63,
    title: "Machine Learning with R",
},
{
    id: 64,
    title: "Digital Marketing Strategies",
},
{
    id: 65,
    title: "Introduction to Mobile Development",
},
{
    id: 66,
    title: "Cybersecurity Risk Management",
},
{
    id: 67,
    title: "Data Visualization with Python",
},
{
    id: 68,
    title: "Foundations of DevOps",
},
{
    id: 69,
    title: "Data-Driven Decision Making",
},
{
    id: 70,
    title: "Introduction to AI Programming",
},
{
    id: 71,
    title: "Advanced Cloud Solutions",
},
{
    id: 72,
    title: "Introduction to Robotics",
},
{
    id: 73,
    title: "Understanding Neural Networks",
},
{
    id: 74,
    title: "Social Media Marketing",
},
{
    id: 75,
    title: "Introduction to Computer Vision",
},
{
    id: 76,
    title: "Data Privacy and Security",
},
{
    id: 77,
    title: "Intro to Software Engineering",
},
{
    id: 78,
    title: "Advanced Data Analysis with Python",
},
{
    id: 79,
    title: "Financial Technologies Overview",
},
{
    id: 80,
    title: "Digital Product Management",
},
{
    id: 81,
    title: "Web Performance Optimization",
},
{
    id: 82,
    title: "Artificial Intelligence in Healthcare",
},
{
    id: 83,
    title: "Introduction to AR/VR Development",
},
{
    id: 84,
    title: "Developing RESTful APIs with Node.js",
},
{
    id: 85,
    title: "Data Governance and Compliance",
},
{
    id: 86,
    title: "Introduction to Game Design",
},
{
    id: 87,
    title: "Cybersecurity Threats and Defense",
},
{
    id: 88,
    title: "Machine Learning in Python",
},
{
    id: 89,
    title: "Effective Data Storytelling",
},
{
    id: 90,
    title: "Introduction to Internet of Things (IoT)",
},
{
    id: 91,
    title: "Data Analysis with SQL",
},
{
    id: 92,
    title: "Fundamentals of Web Accessibility",
},
{
    id: 93,
    title: "Digital Forensics and Cybersecurity",
},
{
    id: 94,
    title: "Mobile Application Development",
},
{
    id: 95,
    title: "AI-Powered Chatbots",
},
{
    id: 96,
    title: "Natural Language Processing (NLP)",
},
{
    id: 97,
    title: "Data Warehousing and ETL",
},
{
    id: 98,
    title: "Introduction to Ethical Hacking",
},
{
    id: 99,
    title: "Augmented Reality for Beginners",
},
{
    id: 100,
    title: "Introduction to SaaS Products",
},
];

export { enroll, Educator };
