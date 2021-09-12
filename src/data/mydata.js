const skillsBar = [
    {
        name: "HTML5",
        svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
        faClass: "fab fa-html5",
    },
    {
        name: "CSS3",
        faClass: "fab fa-css3",
    },
    {
        name: "Javascript",
        faClass: "fab fa-js",
    },
    {
        name: "SASS",
        faClass: "fab fa-sass",
    },
    {
        name: "Node",
        faClass: "fab fa-node",
    },
    {
        name: "Python",
        faClass: "fab fa-python",
    },
    {
        name: "React",
        faClass: "fab fa-react",
    },
    {
        name: "Bootstrap",
        faClass: "fab fa-bootstrap",
    },
    {
        name: "Java",
        faClass: "fab fa-java",
    },
    {
        name: "PHP",
        faClass: "fab fa-php",
    },
    {
        name: "Database",
        faClass: "fas fa-database",
    },
    {
        name: "AWS",
        faClass: "fab fa-aws",
    },
];

const projects = [
  {
    id: "Petwalk",
    image: "petwalk.png",
    name: "Pet Walk",
    skills: ["React Hooks,HTML, CSS, JS"],
    faClass:["fab fa-html5","fab fa-js", "fab fa-react","fab fa-css3","fab fa-node"],
    using: "Using server with Nodejs and dogs-API ",
    url: "https://petwalkapp.netlify.app/",
    github: "https://github.com/shani24levi/pet_walk_client/tree/master/client_react"
  },
  {
    id: "WelcomeHome",
    name: "Welcome Home",
    skills: ["React Commponenete, Redux, HTML, CSS, JS"],
    faClass:["fab fa-html5","fab fa-js", "fab fa-react","fab fa-css3"],
    using: "Using Google Maps API & Redux",
    url: "https://still-escarpment-98700.herokuapp.com/",
    github: "https://github.com/shani24levi/WelcomeHome-RecatClassComponnents"
  },
  {
    id: "Brazil",
    name: "Brazil",
    skills: ["HTML, CSS, JS, JQ"],
    faClass:["fab fa-html5","fab fa-js", "fab fa-sass","fab fa-css3", "fab fa-bootstrap"],
    url: "https://eloquent-hodgkin-ed1e81.netlify.app",
    github: "https://github.com/shani24levi/BrazilApp"
  },
  {
    id: "FooDelicious",
    name: "FooDelicious",
    skills: ["React-Nairiv android app"],
    faClass:["fab fa-react"],
    using: "Using Expo",
    url: "#",
    github: "https://github.com/shani24levi/Mobile_Apps_React-Native/tree/master/food_app_final"
  },
  {
    id: "project5",
    image: "",
    name: "Project 5",
    skills: ["HTML, CSS, JS"],
    url: "",
    github: ""
  },

];


export {
    skillsBar,
    projects,
    
};
