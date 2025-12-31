/**
 * Course categories and their courses
 * Used in the Courses section with expandable categories
 */

const courseCategories = [
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    color: 'cyan',
    courses: [
      { name: "Artificial Intelligence", code: "AI2002" },
      { name: "Deep Learning for Perception", code: "CS4045" },
      { name: "Generative AI", code: "AI4009" },
      { name: "Digital Image Processing", code: "CS4055" }
    ]
  },
  {
    id: 'core',
    name: 'Core Computer Science',
    color: 'blue',
    courses: [
      { name: "Introduction to Information and Communication Technology", code: "CL1000" },
      { name: "Programming Fundamentals", code: "CS1002" },
      { name: "Object Oriented Programming", code: "CS1004" },
      { name: "Data Structures", code: "CS2001" },
      { name: "Design and Analysis of Algorithms", code: "CS2009" },
      { name: "Database Systems", code: "CS2005" },
      { name: "Software Engineering", code: "CS3009" },
      { name: "Software Design and Analysis", code: "CS3004" },
      { name: "Operating Systems", code: "CS2006" },
      { name: "Computer Organization and Assembly Language", code: "EE2003" }
    ]
  },
  {
    id: 'specialized',
    name: 'Specialized Computer Science',
    color: 'purple',
    courses: [
      { name: "Digital Logic Design", code: "EE1005" },
      { name: "Blockchain and Cryptocurrency", code: "CS4049" },
      { name: "Cloud Computing", code: "CS4075" },
      { name: "Computer Networks", code: "CS3001" },
      { name: "Information Security", code: "CS3002" },
      { name: "Parallel and Distributed Computing", code: "CS3006" },
      { name: "Theory of Automata", code: "CS3005" },
      { name: "User Experience Engineering", code: "CS4074" }
    ]
  },
  {
    id: 'math',
    name: 'Mathematics & Computing',
    color: 'green',
    courses: [
      { name: "Calculus and Analytical Geometry", code: "MT1003" },
      { name: "Linear Algebra", code: "MT1004" },
      { name: "Differential Equations", code: "MT1006" },
      { name: "Probability and Statistics", code: "MT2005" },
      { name: "Statistical Modelling", code: "MT2002" },
      { name: "Numerical Computing", code: "CS2008" },
      { name: "Discrete Structures", code: "CS1005" }
    ]
  },
  {
    id: 'business',
    name: 'Business & Professional Development',
    color: 'orange',
    courses: [
      { name: "Digital Marketing", code: "MG4033" },
      { name: "Marketing Management", code: "MG1002" },
      { name: "Freelancing", code: "MG1007" },
      { name: "Professional Practices in IT", code: "CS4001" },
      { name: "Technical and Business Writing", code: "SS2007" },
      { name: "English Composition and Comprehension", code: "SS1004" },
      { name: "Communication and Presentation Skills", code: "SS1008" },
      { name: "Islamic Studies/Ethics", code: "SS1002" },
      { name: "Pakistan Studies", code: "SS1003" }
    ]
  },
  {
    id: 'science',
    name: 'Sciences',
    color: 'pink',
    courses: [
      { name: "Applied Physics", code: "NS1001" }
    ]
  }
];

export default courseCategories;
