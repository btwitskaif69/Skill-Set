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
    badges: ["Dr. Jane Smith, Ph.D.", "Certification Available", "Online"],
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
    badges: ["Dr. Robert Brown", "Certification Available", "Online"],
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
    logo: Educator.Aws, // Assuming there is an Educator object with AWS logo
    title: "AWS Solutions Architect",
    description: "Master the fundamentals of AWS cloud architecture and prepare for the AWS Certified Solutions Architect exam.",
    enrollmentCount: 120000, // Hypothetical enrollment count
    coursesCount: 6, // Number of courses in the series
    difficulty: "Intermediate", // Difficulty level
    duration: "4 Months", // Duration of the course
    hoursPerWeek: "6 hours/week", // Recommended hours per week
    about: "This AWS Solutions Architect course provides you with the skills to design and deploy scalable systems on the AWS platform. You’ll learn about cloud concepts, core AWS services, security, architecture, pricing, and support as you prepare for the AWS Certified Solutions Architect exam.",
    badges: ["John Doe", "Certification Available", "Online"],
    objectives: [
        "Understand AWS Cloud fundamentals and core services.",
        "Design resilient architectures using AWS services.",
        "Implement robust security and compliance measures.",
        "Optimize performance and manage cost in AWS.",
        "Prepare for the AWS Certified Solutions Architect exam.",
    ],
    skillsGained: [
        "AWS Fundamentals",
        "Cloud Architecture Design",
        "AWS Services Management",
        "Security and Compliance",
        "Cost Optimization",
        "Networking",
        "Deployment Strategies",
        "Disaster Recovery Solutions",
    ],
    instructorname: "John Doe, AWS Certified Solutions Architect",
    instructorimage: Instructor.image2, // Assuming there is a corresponding instructor image
    experience: "10+ years of experience in cloud computing and enterprise architecture. Former lead cloud architect at a Fortune 500 company and AWS Certified Solutions Architect.",
    expertise: ["AWS Certified Solutions Architect", "Cloud Security Expert", "DevOps Specialist"],
    learningoutcomes: [
        "Design and deploy scalable, highly available, and fault-tolerant systems on AWS.",
        "Implement secure applications and protect sensitive data on AWS.",
        "Optimize the cost and performance of AWS services.",
        "Understand the best practices for architecting on AWS.",
        "Gain hands-on experience with real-world cloud projects.",
    ],
    faqs: [
        {
            question: "What are the prerequisites for this course?",
            answer: "Basic understanding of cloud concepts and networking is recommended but not required.",
        },
        {
            question: "Is there a money-back guarantee?",
            answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course.",
        },
        {
            question: "Will I receive a certificate upon completion?",
            answer: "Yes, you'll receive a certificate of completion after finishing all course modules and assignments.",
        },
        {
            question: "How much time should I dedicate to the course each week?",
            answer: "We recommend dedicating 6-10 hours per week, depending on your prior experience.",
        },
        {
            question: "Is the course completely online?",
            answer: "Yes, the course is 100% online and can be accessed from anywhere.",
        },
    ],
    courseseries: "6 course series",

    coursedesc: "This course series is designed for individuals looking to become proficient in AWS cloud services and gain the skills necessary to design and implement scalable solutions on AWS.",
    
    coursedetails: [
        "Fundamentals of AWS and cloud computing.",
        "Overview of key AWS services such as EC2, S3, RDS, and VPC.",
        "Best practices for securing applications on AWS.",
        "Cost management strategies for AWS services.",
        "Designing resilient and scalable architectures using AWS.",
        "Hands-on projects to reinforce learning and real-world applications."
    ],

    summary: "Upon completion of this course series, you will have the knowledge and skills needed to effectively design and deploy applications on AWS, preparing you for the AWS Certified Solutions Architect exam. You will also gain practical experience through hands-on projects and case studies.",

    practicallearning: "This course series includes hands-on labs and projects, allowing you to apply the concepts learned. You will work on tasks such as:",
    
    learningexperience: [
        "Setting up an AWS account and exploring the AWS Management Console.",
        "Deploying a web application using EC2 and S3.",
        "Configuring a VPC for network isolation and security.",
        "Implementing IAM roles and policies for access control.",
        "Designing a multi-tier architecture with load balancers and auto-scaling.",
    ],

    conclusion: "By the end of this course series, you will be well-prepared to take the AWS Certified Solutions Architect exam and advance your career in cloud computing.",

    courses: [
        {
            title: "AWS Cloud Fundamentals",
            lessons: [
                "Introduction to Cloud Computing and AWS",
                "Understanding AWS Global Infrastructure",
                "Exploring Core AWS Services: EC2, S3, RDS",
                "AWS Management Console and CLI"
            ],
            knowledgeGained: [
                "Cloud Computing Basics",
                "AWS Service Overview",
                "Navigating AWS Console",
                "Resource Management",
            ]
        },
        {
            title: "Architecting on AWS",
            lessons: [
                "AWS Well-Architected Framework",
                "Designing Highly Available Systems",
                "Implementing Security Best Practices",
                "Cost Management Strategies"
            ],
            knowledgeGained: [
                "Architectural Best Practices",
                "Security Implementation",
                "Cost Optimization Techniques",
                "Designing Resilient Systems",
            ]
        },
        {
            title: "AWS Security Best Practices",
            lessons: [
                "Understanding AWS Security Models",
                "Implementing IAM Roles and Policies",
                "Data Protection on AWS",
                "Monitoring and Compliance"
            ],
            knowledgeGained: [
                "Security Best Practices",
                "Data Encryption Techniques",
                "Access Control",
                "Compliance Standards",
            ]
        },
        {
            title: "Advanced Networking on AWS",
            lessons: [
                "Designing a Virtual Private Cloud (VPC)",
                "Setting Up Subnets and Routing",
                "Implementing Security Groups and NACLs",
                "VPN and Direct Connect Options"
            ],
            knowledgeGained: [
                "VPC Configuration",
                "Networking Best Practices",
                "Network Security",
                "Cloud Networking Concepts",
            ]
        },
        {
            title: "Deploying Applications on AWS",
            lessons: [
                "Creating and Managing EC2 Instances",
                "Deploying Applications using Elastic Beanstalk",
                "Setting Up Load Balancers and Auto-Scaling",
                "Using RDS for Database Management"
            ],
            knowledgeGained: [
                "Application Deployment Techniques",
                "Load Balancing",
                "Database Management",
                "Autoscaling Strategies",
            ]
        },
        {
            title: "Preparing for AWS Certified Solutions Architect Exam",
            lessons: [
                "Exam Overview and Structure",
                "Review of Key Concepts and Services",
                "Practice Questions and Mock Exam",
                "Exam Tips and Strategies"
            ],
            knowledgeGained: [
                "Exam Preparation",
                "Key AWS Services Review",
                "Mock Exam Experience",
                "Test-Taking Strategies",
            ]
        }
    ],
},

{
  id: 4,
  logo: Educator.Meta, // Assuming there is an Educator object with Meta logo
  title: "Meta Front-End Development",
  description: "Become a proficient front-end developer by mastering HTML, CSS, and JavaScript, and building interactive web applications.",
  enrollmentCount: 95000, // Hypothetical enrollment count
  coursesCount: 5, // Number of courses in the series
  difficulty: "Beginner to Intermediate", // Difficulty level
  duration: "5 Months", // Duration of the course
  hoursPerWeek: "8 hours/week", // Recommended hours per week
  about: "This Meta Front-End Development course teaches you how to build responsive and interactive web applications using fundamental front-end technologies. You will learn best practices for coding and debugging and gain hands-on experience in real-world projects.",
  badges: ["Industry Recognized", "Hands-On Projects", "Certificate Available"],
  objectives: [
      "Master HTML, CSS, and JavaScript for web development.",
      "Create responsive and interactive web pages.",
      "Utilize frameworks like React for building dynamic UIs.",
      "Understand web accessibility and performance optimization.",
      "Build a portfolio of projects to showcase your skills.",
  ],
  skillsGained: [
      "HTML & CSS Fundamentals",
      "JavaScript Programming",
      "Responsive Design Principles",
      "Front-End Frameworks (e.g., React)",
      "Version Control with Git",
      "Debugging and Testing",
      "RESTful API Integration",
      "Web Performance Optimization",
  ],
  instructorname: "Jane Smith, Senior Front-End Developer at Meta",
  instructorimage: Instructor.image3, // Assuming there is a corresponding instructor image
  experience: "8+ years of experience in front-end development, specializing in creating interactive web applications for high-traffic websites. Expert in JavaScript frameworks and UI/UX best practices.",
  expertise: ["JavaScript Expert", "React Developer", "Web Performance Specialist"],
  learningoutcomes: [
      "Develop interactive web applications using HTML, CSS, and JavaScript.",
      "Implement responsive design for various devices.",
      "Create reusable components with React.",
      "Use Git for version control and collaboration.",
      "Optimize web applications for performance and accessibility.",
  ],
  faqs: [
      {
          question: "What prior experience do I need for this course?",
          answer: "No prior experience is necessary, but a basic understanding of programming concepts will be helpful.",
      },
      {
          question: "Is this course self-paced?",
          answer: "Yes, the course is self-paced, allowing you to learn at your convenience.",
      },
      {
          question: "Will I receive a certificate upon completion?",
          answer: "Yes, you will receive a certificate after successfully completing all course requirements.",
      },
      {
          question: "What tools will I need to complete the course?",
          answer: "You will need a code editor (like VSCode) and a modern web browser for testing your projects.",
      },
      {
          question: "Are there any hands-on projects?",
          answer: "Yes, the course includes multiple hands-on projects to help you apply what you've learned.",
      },
  ],
  courseseries: "5 course series",

  coursedesc: "This series of courses is designed to take you from beginner to proficient front-end developer, equipping you with the necessary skills to succeed in the tech industry.",
  
  coursedetails: [
      "Introduction to HTML, CSS, and JavaScript.",
      "Building responsive layouts using CSS Flexbox and Grid.",
      "JavaScript fundamentals and DOM manipulation.",
      "Introduction to front-end frameworks (React).",
      "Best practices for performance and accessibility.",
      "Building a portfolio website.",
  ],

  summary: "Upon completion of this course series, you will have the skills to create interactive and responsive web applications. You will also be prepared to pursue entry-level front-end development roles in the tech industry.",

  practicallearning: "This course series includes hands-on labs and projects, allowing you to apply the concepts learned. You will work on tasks such as:",
  
  learningexperience: [
      "Creating your first webpage with HTML and CSS.",
      "Building a responsive navigation menu.",
      "Implementing JavaScript functionality to enhance user experience.",
      "Developing a simple web application using React.",
      "Deploying your projects online using GitHub Pages.",
  ],

  conclusion: "By the end of this course series, you will be equipped with the essential skills to begin your career as a front-end developer, with a strong portfolio to showcase your abilities.",

  courses: [
      {
          title: "HTML & CSS Basics",
          lessons: [
              "Introduction to HTML",
              "Styling with CSS",
              "Responsive Design Principles",
              "HTML Forms and Input Elements"
          ],
          knowledgeGained: [
              "Structure of HTML documents",
              "CSS styling techniques",
              "Responsive design strategies",
              "Building forms and collecting user input",
          ]
      },
      {
          title: "JavaScript Fundamentals",
          lessons: [
              "Introduction to JavaScript",
              "Variables, Data Types, and Operators",
              "Control Structures and Loops",
              "Functions and Scope"
          ],
          knowledgeGained: [
              "Basic JavaScript syntax",
              "Working with data types",
              "Implementing control flow",
              "Defining and using functions",
          ]
      },
      {
          title: "Responsive Web Design",
          lessons: [
              "CSS Flexbox and Grid",
              "Media Queries and Breakpoints",
              "Building Mobile-First Websites",
              "Accessibility Best Practices"
          ],
          knowledgeGained: [
              "Creating flexible layouts with Flexbox and Grid",
              "Implementing responsive design techniques",
              "Ensuring accessibility in web applications",
              "Optimizing user experience on mobile devices",
          ]
      },
      {
          title: "Introduction to React",
          lessons: [
              "Understanding Components",
              "JSX and Rendering Elements",
              "State and Props",
              "Handling Events"
          ],
          knowledgeGained: [
              "Building React components",
              "Using JSX for rendering",
              "Managing state in React applications",
              "Handling user events effectively",
          ]
      },
      {
          title: "Building a Portfolio Project",
          lessons: [
              "Project Planning and Design",
              "Implementing the Front-End",
              "Deploying the Project Online",
              "Creating a GitHub Portfolio"
          ],
          knowledgeGained: [
              "Planning a web project from start to finish",
              "Integrating various technologies",
              "Deploying applications using GitHub Pages",
              "Showcasing projects on GitHub",
          ]
      },
  ],
  },
  {
    id: 5,
    logo: Educator.Duke_University, // Replace with the actual logo path or object
    title: "Duke AI Fundamentals",
    description: "Explore the foundational concepts of artificial intelligence and its applications through Duke University's engaging course.",
    enrollmentCount: 60000,
    coursesCount: 1,
    difficulty: "Beginner",
    duration: "5 Weeks",
    hoursPerWeek: "4-6 hours/week",
    about: "Duke AI Fundamentals offers an introduction to the key concepts and techniques in artificial intelligence. This course is designed for beginners and emphasizes practical applications in real-world scenarios, equipping learners with the skills to harness AI technologies effectively.",
    badges: ["Certification Available", "Beginner Friendly"],
    objectives: [
        "Understand the principles and methods of artificial intelligence.",
        "Learn about machine learning and its algorithms.",
        "Explore ethical considerations in AI development.",
        "Apply AI concepts to solve practical problems."
    ],
    skillsGained: [
        "Basic understanding of AI principles",
        "Familiarity with machine learning algorithms",
        "Critical thinking in AI applications",
        "Problem-solving skills using AI",
        "Ethical considerations in technology"
    ],
    instructorname: "Dr. Emma Lawson", // Updated instructor name
    instructorimage: Instructor.image5, // Replace with the actual instructor image path
    experience: "Instructors from Duke University with extensive backgrounds in AI research and applications.",
    expertise: ["Artificial Intelligence", "Machine Learning", "Ethics in AI"],
    learningoutcomes: [
        "Identify various applications of AI in different fields.",
        "Build foundational machine learning models.",
        "Discuss ethical implications related to AI technologies."
    ],
    faqs: [
        {
            question: "Do I need any prior knowledge of AI?",
            answer: "No prior knowledge is required; the course is designed for beginners."
        },
        {
            question: "Is the course self-paced?",
            answer: "Yes, students can progress through the material at their own pace."
        },
        {
            question: "What type of projects will I work on?",
            answer: "You will engage in hands-on projects that apply AI concepts to real-world scenarios."
        }
    ],
    courseseries: "1 course series",
    coursedesc: "The Duke AI Fundamentals course provides a comprehensive introduction to artificial intelligence, preparing you to engage with AI in various contexts.",
    coursedetails: [
        "Introduction to AI and its significance in today's world.",
        "Understanding machine learning fundamentals.",
        "Exploring ethical issues surrounding AI.",
        "Hands-on experience with AI applications."
    ],
    summary: "By the end of this course, you will gain a foundational understanding of AI concepts and be able to apply them to various problems.",
    practicallearning: "Engage in practical exercises that reinforce AI concepts and demonstrate their applicability.",
    learningexperience: [
        "Build basic machine learning models.",
        "Analyze case studies to understand AI applications.",
        "Collaborate with peers on AI projects."
    ],
    conclusion: "Conclude the course with a project that showcases your understanding of AI fundamentals and your ability to implement solutions.",
    courses: [
        {
            title: "Introduction to Artificial Intelligence",
            lessons: [
                "What is AI?",
                "AI history and evolution",
                "Current trends in AI"
            ],
            knowledgeGained: [
                "Foundational knowledge of AI",
                "Awareness of AI applications"
            ]
        },
        {
            title: "Machine Learning Basics",
            lessons: [
                "Introduction to machine learning concepts",
                "Types of machine learning",
                "Key algorithms and their applications"
            ],
            knowledgeGained: [
                "Familiarity with machine learning algorithms",
                "Ability to categorize ML types"
            ]
        },
        {
            title: "Ethics in AI",
            lessons: [
                "Understanding the ethical implications of AI",
                "Bias in AI systems",
                "Responsible AI development"
            ],
            knowledgeGained: [
                "Awareness of ethical considerations",
                "Critical thinking in AI applications"
            ]
        },
        {
            title: "Capstone Project",
            lessons: [
                "Designing and executing an AI project",
                "Using tools and frameworks for AI",
                "Presenting project findings to stakeholders"
            ],
            knowledgeGained: [
                "Practical experience with AI tools",
                "Project management and presentation skills"
            ]
        }
    ]
  },

  {
    id: 6,
    logo: Educator.Stanford_University, // Assuming there is an Educator object with Stanford logo
    title: "Stanford Machine Learning",
    description: "Master the fundamentals of machine learning, data mining, and statistical pattern recognition.",
    enrollmentCount: 120000,
    coursesCount: 5, // Number of courses in the series
    difficulty: "Intermediate", // Difficulty level
    duration: "11 Weeks", // Course duration
    hoursPerWeek: "8-10 hours/week", // Recommended hours per week
    about: "This course, taught by renowned Professor Andrew Ng, covers the principles of machine learning and practical techniques to apply them. You'll gain hands-on experience with real-world projects and understand the math behind algorithms.",
    badges: ["Certificate Available", "Hands-On Projects", "Highly Rated"],
    objectives: [
        "Understand the basic concepts of machine learning.",
        "Implement machine learning algorithms in Python.",
        "Evaluate and improve models using practical techniques.",
        "Apply machine learning to real-world problems."
    ],
    skillsGained: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Machine Learning Algorithms",
        "Python Programming",
        "Data Preprocessing",
        "Model Evaluation",
        "Feature Engineering"
    ],
    instructorname: "Prof. Andrew Ng, Co-founder of Coursera",
    instructorimage: Instructor.image3, // Assuming an image for the instructor exists
    experience: "10+ years of experience in machine learning and AI. Former head of Baidu AI Group and co-founder of Google Brain.",
    expertise: ["Machine Learning Expert", "AI Researcher", "Educator"],
    learningoutcomes: [
        "Implement core machine learning algorithms.",
        "Analyze and visualize data.",
        "Optimize and validate models.",
        "Utilize machine learning in various applications."
    ],
    faqs: [
        {
            question: "What prerequisites are needed for this course?",
            answer: "A basic understanding of programming and linear algebra is recommended."
        },
        {
            question: "Is there a completion certificate available?",
            answer: "Yes, you will receive a certificate upon successful completion of the course."
        },
        {
            question: "How much time should I dedicate to the course each week?",
            answer: "We recommend dedicating 8-10 hours per week for optimal learning."
        },
        {
            question: "Are there any assignments in the course?",
            answer: "Yes, there are assignments designed to reinforce your understanding of the material."
        },
        {
            question: "Is the course self-paced?",
            answer: "Yes, you can start and complete the course at your own pace."
        }
    ],
    courseseries: "5 course series",
    coursedesc: "This Machine Learning certificate from Stanford University equips you with essential skills and knowledge to succeed in data-driven fields, focusing on algorithm implementation and data analysis.",
    coursedetails: [
        "Introduction to machine learning concepts and algorithms.",
        "Hands-on experience with Python and machine learning libraries.",
        "Understanding of the theory behind key algorithms.",
        "Evaluation and optimization of machine learning models.",
        "Application of machine learning in different sectors."
    ],
    summary: "By the end of this program, you will have a deep understanding of machine learning algorithms and the skills to apply them to real-world problems, preparing you for a career in data science and AI.",
    practicallearning: "The course emphasizes hands-on learning through practical labs, allowing you to apply the skills you've acquired to real datasets and projects.",
    learningexperience: [
        "Building machine learning models using Python.",
        "Exploring datasets to derive insights.",
        "Collaborating on projects to solve real-world problems."
    ],
    conclusion: "Upon completion, you will be equipped to tackle challenges in machine learning, making data-driven decisions based on the insights gained from your analysis.",
    courses: [
        {
            title: "Introduction to Machine Learning",
            lessons: [
                "Overview of machine learning concepts.",
                "Supervised vs unsupervised learning.",
                "Key algorithms in machine learning."
            ],
            knowledgeGained: [
                "Machine Learning Fundamentals",
                "Supervised Learning Techniques",
                "Unsupervised Learning Methods"
            ]
        },
        {
            title: "Supervised Learning",
            lessons: [
                "Linear regression and logistic regression.",
                "Support vector machines.",
                "Decision trees and random forests."
            ],
            knowledgeGained: [
                "Regression Analysis",
                "Classification Techniques",
                "Model Selection"
            ]
        },
        {
            title: "Unsupervised Learning",
            lessons: [
                "Clustering algorithms: K-means and hierarchical clustering.",
                "Dimensionality reduction techniques.",
                "Anomaly detection."
            ],
            knowledgeGained: [
                "Clustering Methods",
                "Dimensionality Reduction",
                "Data Cleaning Techniques"
            ]
        },
        {
            title: "Model Evaluation and Optimization",
            lessons: [
                "Cross-validation techniques.",
                "Bias-variance tradeoff.",
                "Hyperparameter tuning."
            ],
            knowledgeGained: [
                "Model Evaluation Techniques",
                "Performance Metrics",
                "Optimization Strategies"
            ]
        },
        {
            title: "Applications of Machine Learning",
            lessons: [
                "Case studies in various industries.",
                "Practical applications of machine learning.",
                "Future trends in AI."
            ],
            knowledgeGained: [
                "Industry Applications of ML",
                "Trends in AI Technology",
                "Real-world Problem Solving"
            ]
        }
    ]
},

{
  id: 7,
  logo: Educator.University_of_Cambridge, // Replace with the actual logo path or object
  title: "Cambridge Data Science",
  description: "Enhance your career in data science with cutting-edge techniques and tools from Cambridge University.",
  enrollmentCount: 45000,
  coursesCount: 4,
  difficulty: "Intermediate",
  duration: "12 Weeks",
  hoursPerWeek: "6-8 hours/week",
  about: "This course provides a thorough introduction to data science, focusing on data analysis, machine learning, and data visualization techniques that are pivotal in today’s data-driven world.",
  badges: ["Certification Available", "Intermediate Level", "Hands-On Projects"],
  objectives: [
      "Understand data science concepts and methods.",
      "Utilize Python for data analysis and visualization.",
      "Implement machine learning algorithms using real-world datasets.",
      "Communicate findings effectively using data visualization techniques."
  ],
  skillsGained: ["Python", "Data Analysis", "Machine Learning", "Data Visualization", "Statistical Analysis"],
  instructorname: "Dr. Sarah Thompson, Ph.D.",
  instructorimage: Instructor.image7, // Replace with the actual instructor image path
  experience: "Over 10 years of experience in data science and analytics, with numerous publications in top journals.",
  expertise: ["Data Analytics", "Machine Learning", "Statistical Modeling"],
  learningoutcomes: [
      "Analyze and interpret complex datasets.",
      "Apply machine learning algorithms to solve real-world problems.",
      "Create insightful data visualizations.",
      "Demonstrate proficiency in Python for data science."
  ],
  faqs: [
      {
          question: "Do I need prior programming experience?",
          answer: "Basic knowledge of programming is helpful but not mandatory."
      },
      {
          question: "Will I receive a certificate upon completion?",
          answer: "Yes, you will receive a certificate of completion after finishing all modules."
      },
      {
          question: "What tools will I use in this course?",
          answer: "You will primarily use Python, Pandas, and Matplotlib for data analysis and visualization."
      }
  ],
  courseseries: "4 course series",
  coursedesc: "This course series will take you through the fundamentals of data science, preparing you for a career in this exciting field.",
  coursedetails: [
      "Introduction to data science and its applications.",
      "Learning Python programming for data analysis.",
      "Exploring data visualization techniques.",
      "Implementing machine learning algorithms using libraries like Scikit-Learn."
  ],
  summary: "By the end of this course, you will have a comprehensive understanding of data science techniques and tools to analyze data effectively.",
  practicallearning: "The course includes hands-on projects where you will apply your skills to real-world datasets and problems.",
  learningexperience: [
      "Working with real datasets to draw meaningful insights.",
      "Building machine learning models from scratch.",
      "Collaborating with peers on group projects."
  ],
  conclusion: "Complete your learning journey with a capstone project showcasing your data science capabilities.",
  courses: [
      {
          title: "Introduction to Data Science",
          lessons: [
              "What is Data Science?",
              "Data Science Life Cycle",
              "Data Types and Structures"
          ],
          knowledgeGained: [
              "Understanding data science concepts",
              "Identifying types of data"
          ]
      },
      {
          title: "Data Analysis with Python",
          lessons: [
              "Introduction to Python",
              "Pandas for Data Manipulation",
              "Data Cleaning Techniques"
          ],
          knowledgeGained: [
              "Data manipulation with Pandas",
              "Basic data cleaning processes"
          ]
      },
      {
          title: "Data Visualization",
          lessons: [
              "Visualizing Data with Matplotlib",
              "Creating Interactive Visualizations",
              "Best Practices for Data Visualization"
          ],
          knowledgeGained: [
              "Creating effective data visualizations",
              "Understanding visualization tools"
          ]
      },
      {
          title: "Machine Learning Basics",
          lessons: [
              "Introduction to Machine Learning",
              "Supervised vs Unsupervised Learning",
              "Building Your First Model"
          ],
          knowledgeGained: [
              "Understanding machine learning types",
              "Building predictive models"
          ]
      }
  ]
},

{
  id: 8,
  logo: Educator.University_of_Oxford, // Replace with the actual logo path or object
  title: "Oxford Cyber Security",
  description: "Gain essential skills to protect networks and systems from cyber threats with this comprehensive course.",
  enrollmentCount: 70000,
  coursesCount: 6,
  difficulty: "Advanced",
  duration: "14 Weeks",
  hoursPerWeek: "5-7 hours/week",
  about: "This course delves into the principles of cyber security, covering topics such as threat analysis, risk management, and the implementation of secure systems.",
  badges: ["Certification Available", "Advanced Level", "Hands-On Labs"],
  objectives: [
      "Identify and assess security risks.",
      "Implement security measures to protect data and networks.",
      "Understand legal and ethical considerations in cyber security.",
      "Develop incident response strategies."
  ],
  skillsGained: ["Network Security", "Threat Analysis", "Risk Management", "Incident Response", "Cybersecurity Frameworks"],
  instructorname: "Dr. John Miller, Ph.D.",
  instructorimage: Instructor.image8, // Replace with the actual instructor image path
  experience: "20+ years in the field of cyber security, with experience in both academia and industry.",
  expertise: ["Network Security", "Threat Intelligence", "Risk Assessment"],
  learningoutcomes: [
      "Demonstrate knowledge of cyber security principles.",
      "Assess and mitigate security threats.",
      "Create effective incident response plans.",
      "Understand compliance requirements in cyber security."
  ],
  faqs: [
      {
          question: "Do I need a background in IT?",
          answer: "A basic understanding of IT concepts is beneficial but not required."
      },
      {
          question: "Is this course fully online?",
          answer: "Yes, the course is delivered entirely online."
      },
      {
          question: "What certification will I receive?",
          answer: "You will receive a certificate of completion upon successful completion of the course."
      }
  ],
  courseseries: "6 course series",
  coursedesc: "This course series provides a deep dive into cyber security, preparing you for advanced roles in the field.",
  coursedetails: [
      "Understanding the cyber threat landscape.",
      "Risk assessment and management strategies.",
      "Network security and defense mechanisms.",
      "Legal and ethical issues in cyber security."
  ],
  summary: "By the end of this course, you will be equipped with the skills necessary to safeguard networks and respond to cyber threats effectively.",
  practicallearning: "Hands-on labs allow you to apply your knowledge in real-world scenarios, including threat detection and incident response.",
  learningexperience: [
      "Simulating cyber attacks and defense strategies.",
      "Working on case studies to understand real-world incidents.",
      "Collaborating with peers on security projects."
  ],
  conclusion: "Conclude your learning with a capstone project that showcases your ability to analyze and respond to cyber security challenges.",
  courses: [
      {
          title: "Introduction to Cyber Security",
          lessons: [
              "Overview of Cyber Security",
              "Types of Cyber Threats",
              "Cyber Security Frameworks"
          ],
          knowledgeGained: [
              "Understanding of different cyber threats",
              "Familiarity with security frameworks"
          ]
      },
      {
          title: "Risk Management in Cyber Security",
          lessons: [
              "Identifying Security Risks",
              "Risk Assessment Techniques",
              "Developing Risk Mitigation Strategies"
          ],
          knowledgeGained: [
              "Assessing risks in a security context",
              "Creating effective risk management plans"
          ]
      },
      {
          title: "Network Security",
          lessons: [
              "Fundamentals of Network Security",
              "Implementing Security Controls",
              "Monitoring Network Traffic"
          ],
          knowledgeGained: [
              "Securing network infrastructures",
              "Understanding security controls"
          ]
      },
      {
          title: "Incident Response Planning",
          lessons: [
              "Developing Incident Response Plans",
              "Handling Cyber Security Incidents",
              "Legal Considerations in Incident Response"
          ],
          knowledgeGained: [
              "Creating effective incident response plans",
              "Understanding legal aspects of incident handling"
          ]
      }
  ]
},
{
  id: 9,
  logo: Educator.Harvard_University, // Replace with the actual logo path or object
  title: "Harvard Business Analytics",
  description: "Transform your career with Harvard’s comprehensive business analytics program focused on data-driven decision-making.",
  enrollmentCount: 120000,
  coursesCount: 7,
  difficulty: "Intermediate",
  duration: "10 Months",
  hoursPerWeek: "5-10 hours/week",
  about: "This program teaches you how to analyze data to make informed business decisions. You'll learn how to use analytics to solve business problems and gain insights that can drive success.",
  badges: ["Certification Available", "Intermediate Level", "Real-World Projects"],
  objectives: [
      "Understand key analytics concepts.",
      "Apply statistical techniques to business problems.",
      "Utilize data visualization tools to communicate insights.",
      "Develop strategies for data-driven decision-making."
  ],
  skillsGained: ["Data Analysis", "Business Intelligence", "Statistical Analysis", "Data Visualization", "Predictive Analytics"],
  instructorname: "Prof. James Wilson, Ph.D.",
  instructorimage: Instructor.image9, // Replace with the actual instructor image path
  experience: "Over 15 years of teaching experience in business analytics with multiple publications in leading journals.",
  expertise: ["Business Analytics", "Data-Driven Decision Making", "Predictive Modeling"],
  learningoutcomes: [
      "Effectively analyze and interpret business data.",
      "Implement analytics tools and techniques.",
      "Create compelling data visualizations.",
      "Drive business strategies based on data insights."
  ],
  faqs: [
      {
          question: "What prior knowledge is required?",
          answer: "A basic understanding of statistics and business concepts is helpful."
      },
      {
          question: "Is there a final project?",
          answer: "Yes, you will complete a capstone project applying your skills to a real-world business problem."
      },
      {
          question: "Will I receive a Harvard certificate?",
          answer: "Yes, a certificate of completion will be awarded by Harvard University."
      }
  ],
  courseseries: "7 course series",
  coursedesc: "This course series encompasses various aspects of business analytics, preparing you for roles in data-driven organizations.",
  coursedetails: [
      "Understanding the role of analytics in business.",
      "Data analysis techniques for business applications.",
      "Using visualization tools to present data insights.",
      "Applying predictive modeling to business scenarios."
  ],
  summary: "By completing this program, you will gain a solid foundation in business analytics and the ability to drive impactful decisions.",
  practicallearning: "Engage in hands-on projects that allow you to apply analytics techniques to real business challenges.",
  learningexperience: [
      "Collaborative projects with peers to solve business cases.",
      "Real-time data analysis and decision-making exercises.",
      "Networking opportunities with industry leaders."
  ],
  conclusion: "Complete your learning journey with a capstone project showcasing your business analytics skills.",
  courses: [
      {
          title: "Introduction to Business Analytics",
          lessons: [
              "What is Business Analytics?",
              "Analytics Lifecycle",
              "Data-Driven Decision Making"
          ],
          knowledgeGained: [
              "Understanding the fundamentals of business analytics",
              "Identifying data-driven approaches"
          ]
      },
      {
          title: "Statistical Analysis for Business",
          lessons: [
              "Basic Statistical Concepts",
              "Hypothesis Testing",
              "Regression Analysis"
          ],
          knowledgeGained: [
              "Applying statistical techniques to business data",
              "Understanding regression analysis"
          ]
      },
      {
          title: "Data Visualization Techniques",
          lessons: [
              "Importance of Data Visualization",
              "Tools for Data Visualization",
              "Best Practices for Visual Communication"
          ],
          knowledgeGained: [
              "Creating effective visualizations",
              "Communicating data insights visually"
          ]
      },
      {
          title: "Predictive Analytics",
          lessons: [
              "Understanding Predictive Modeling",
              "Building Predictive Models",
              "Evaluating Model Performance"
          ],
          knowledgeGained: [
              "Applying predictive analytics to business problems",
              "Evaluating effectiveness of models"
          ]
      }
  ]
},

{
  id: 10,
  logo: Educator.MIT, // Replace with the actual logo path or object
  title: "MIT Artificial Intelligence",
  description: "Join MIT’s renowned program in artificial intelligence, where you will learn from leading experts in the field.",
  enrollmentCount: 80000,
  coursesCount: 5,
  difficulty: "Advanced",
  duration: "14 Weeks",
  hoursPerWeek: "8-10 hours/week",
  about: "This course covers the fundamental concepts of artificial intelligence, focusing on algorithms, machine learning, and their applications in various domains.",
  badges: ["Certification Available", "Advanced Level", "Research Opportunities"],
  objectives: [
      "Understand the principles of artificial intelligence.",
      "Implement machine learning algorithms.",
      "Explore applications of AI in real-world scenarios.",
      "Develop skills to design intelligent systems."
  ],
  skillsGained: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "AI Ethics"],
  instructorname: "Dr. Emma Smith, Ph.D.",
  instructorimage: Instructor.image10, // Replace with the actual instructor image path
  experience: "Over 12 years of experience in AI research and education, with numerous publications in top conferences and journals.",
  expertise: ["Machine Learning", "Natural Language Processing", "AI Applications"],
  learningoutcomes: [
      "Develop intelligent systems using machine learning techniques.",
      "Analyze and interpret AI-related data.",
      "Understand the ethical implications of AI technologies.",
      "Explore current trends and future directions in AI."
  ],
  faqs: [
      {
          question: "What programming languages will be used?",
          answer: "Primarily Python and R for implementing algorithms."
      },
      {
          question: "Is this course suitable for beginners?",
          answer: "A foundational understanding of programming and statistics is recommended."
      },
      {
          question: "What certificate will I receive?",
          answer: "You will receive a certificate of completion from MIT upon finishing the course."
      }
  ],
  courseseries: "5 course series",
  coursedesc: "This series provides a comprehensive overview of AI technologies and their applications, preparing you for advanced roles in AI development.",
  coursedetails: [
      "Understanding AI principles and techniques.",
      "Implementing machine learning algorithms.",
      "Exploring applications in computer vision and NLP.",
      "Ethical considerations in AI development."
  ],
  summary: "Upon completion, you will be equipped with the knowledge and skills necessary to excel in the field of artificial intelligence.",
  practicallearning: "Hands-on projects will enhance your understanding of AI concepts and their real-world applications.",
  learningexperience: [
      "Working on projects that address real-world AI challenges.",
      "Collaboration with industry experts on AI-related topics.",
      "Networking with peers and professionals in the AI field."
  ],
  conclusion: "Complete your journey with a capstone project demonstrating your AI capabilities.",
  courses: [
      {
          title: "Introduction to Artificial Intelligence",
          lessons: [
              "What is AI?",
              "History of AI",
              "Applications of AI"
          ],
          knowledgeGained: [
              "Understanding AI concepts and history",
              "Identifying AI applications"
          ]
      },
      {
          title: "Machine Learning Fundamentals",
          lessons: [
              "Introduction to Machine Learning",
              "Supervised vs Unsupervised Learning",
              "Building Machine Learning Models"
          ],
          knowledgeGained: [
              "Understanding machine learning categories",
              "Creating basic ML models"
          ]
      },
      {
          title: "Natural Language Processing",
          lessons: [
              "Introduction to NLP",
              "Text Processing Techniques",
              "Building NLP Applications"
          ],
          knowledgeGained: [
              "Applying NLP techniques",
              "Developing text-based applications"
          ]
      },
      {
          title: "AI Ethics and Society",
          lessons: [
              "Understanding AI Ethics",
              "Impact of AI on Society",
              "Regulatory Considerations in AI"
          ],
          knowledgeGained: [
              "Evaluating ethical implications of AI",
              "Understanding regulatory challenges"
          ]
      }
  ]
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
