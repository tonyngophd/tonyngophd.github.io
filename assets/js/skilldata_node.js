const fs = require('fs');



// const srcs = [
//   'images/tech_react.png',
//   'images/redux.png',
//   'images/js-logo.png',
//   'images/c__.png',
//   'images/python.jpg',
//   'images/java.png',
//   'images/c.png',
//   'images/android-studio.png',
//   'images/android-icon.png',
//   'images/qt.jpg',
//   'images/qml.png',
//   'images/postgresql.png',
//   'images/flask.png',
//   'images/flask-sqlalchemy-logo.png',
//   'images/aws.png',
//   'images/docker.png',
//   'images/heroku.svg',
//   'images/node-js-icon-8.jpg',
//   'images/websocket.jpeg',
//   'images/Sequelize-icon.png',
//   'images/expressjs.png',
//   'images/npm.png',
//   'images/pipenv.png',
//   'images/css3.png',
//   'images/html.png',
//   'images/ubuntu.png',
//   'images/arduino.png',
//   'images/raspberrypi.png',
//   'images/autoinventor.png',
//   'images/ros.png',
//   'images/opencv.webp'
// ];

// const alts = [
//   'React',
//   'Redux',
//   'JavaScript',
//   'C++',
//   'Python',
//   'Java',
//   'C',
//   'Android Studio XML',
//   'Android Developer',
//   'Qt QtCreator',
//   'QML',
//   'PostgreSQL',
//   'Flask',
//   'SqlAlchemy',
//   'AWS S3',
//   'Docker',
//   'Heroku',
//   'Node.js Node NodeJS',
//   'Websocket',
//   'Sequelize',
//   'ExpressJS Express',
//   'NPM',
//   'PipEnv',
//   'CSS CSS3',
//   'HTML HTML5',
//   'Ubuntu Linux',
//   'Arduino',
//   'Raspberry Pi single board computer SBC',
//   'AutoDesk Inventor 3D',
//   'ROS Robot Operating System',
//   'OpenCV'];

// const skillObjs = [];
// srcs.forEach((el, i) => skillObjs.push({ src: el, alt: alts[i], name: alts[i].replaceAll(' ', '_') }));

const skillObjs = [
  {
    src: 'images/tech_react.png',
    alt: 'React',
    name: 'React',
    type: 'Library',
    links: ['Tripcamp', 'Dronest', 'Instavibes'],
  },
  {
    src: 'images/redux.png',
    alt: 'Redux',
    name: 'Redux',
    type: 'Library',
    links: ['Tripcamp', 'Dronest', 'Instavibes'],
  },
  {
    src: 'images/js-logo.png',
    alt: 'JavaScript',
    name: 'JavaScript',
    type: 'Language',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'VuIRZoom'],
  },
  {
    src: 'images/c__.png',
    alt: 'C++',
    name: 'C++',
    type: 'Language',
    links: ['VuIRHD', 'VuIRZoom', 'Others'],
  },
  {
    src: 'images/python.jpg',
    alt: 'Python',
    name: 'Python',
    type: 'Language',
    links: ['VuIRHD', 'VuIRZoom', 'Dronest', 'Instavibes'],
  },
  {
    src: 'images/java.png',
    alt: 'Java',
    name: 'Java',
    type: 'Language',
    links: ['VuIRHD', 'VuIRZoom', 'Tripcamp'],
  },
  {
    src: 'images/c.png',
    alt: 'C',
    name: 'C',
    type: 'Language',
    links: ['VuIRHD', 'Research Articles'],
  },
  {
    src: 'images/android-studio.png',
    alt: 'Android Studio XML',
    name: 'Android Studio',
    type: 'IDE',
    links: ['VuIRHD', 'VuIRZoom', 'Tripcamp'],
  },
  {
    src: 'images/android-icon.png',
    alt: 'Android Developer',
    name: 'Android Developer',
    type: 'IDE',
    links: ['VuIRHD', 'VuIRZoom', 'Tripcamp'],
  },
  {
    src: 'images/qt.jpg',
    alt: 'Qt QtCreator',
    name: 'Qt/QtCreator',
    type: 'IDE',
    links: ['VuIRHD', 'VuIRZoom', 'Others'],
  },
  {
    src: 'images/qml.png',
    alt: 'QML',
    name: 'QML',
    type: 'Language',
    links: ['VuIRHD', 'VuIRZoom', 'Others'],
  },
  {
    src: 'images/postgresql.png',
    alt: 'PostgreSQL',
    name: 'PostgreSQL',
    type: 'Framework',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes'],
  },
  {
    src: 'images/flask.png',
    alt: 'Flask',
    name: 'Flask',
    type: 'Framework',
    links: ['Dronest', 'Instavibes'],
  },
  {
    src: 'images/flask-sqlalchemy-logo.png',
    alt: 'SqlAlchemy',
    name: 'SqlAlchemy',
    type: 'Library',
    links: ['Dronest', 'Instavibes'],
  },
  {
    src: 'images/aws.png',
    alt: 'AWS S3',
    name: 'AWS_S3',
    type: 'Service',
    links: ['Tripcamp', 'Dronest', 'Instavibes'],
  },
  {
    src: 'images/docker.png',
    alt: 'Docker',
    name: 'Docker',
    type: 'Framework',
    links: ['Dronest', 'Instavibes'],
  },
  {
    src: 'images/heroku.svg',
    alt: 'Heroku',
    name: 'Heroku',
    type: 'Service',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'Dronest Messenger Server'],
  },
  {
    src: 'images/node-js-icon-8.jpg',
    alt: 'Node.js Node NodeJS',
    name: 'NodeJS',
    type: 'Framework',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'Dronest Messenger Server'],
  },
  {
    src: 'images/websocket.jpeg',
    alt: 'Websocket',
    name: 'Websocket',
    type: 'Framework',
    links: ['Dronest', 'Dronest Messenger Server'],
  },
  {
    src: 'images/Sequelize-icon.png',
    alt: 'Sequelize',
    name: 'Sequelize',
    type: 'Library',
    links: ['Tripcamp', 'Dronest', 'Forget Me Notes', 'Dronest Messenger Server'],
  },
  {
    src: 'images/expressjs.png',
    alt: 'ExpressJS Express',
    name: 'Express',
    type: 'Library',
    links: ['Tripcamp', 'Dronest', 'Forget Me Notes', 'Dronest Messenger Server'],
  },
  {
    src: 'images/npm.png',
    alt: 'NPM',
    name: 'NPM',
    type: 'Framework',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'Dronest Messenger Server'],
  },
  {
    src: 'images/pipenv.png',
    alt: 'PipEnv',
    name: 'PipEnv',
    type: 'Framework',
    links: ['Dronest', 'Instavibes'],
  },
  {
    src: 'images/css3.png',
    alt: 'CSS CSS3',
    name: 'CSS/CSS3',
    type: 'Language',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'TonyNgo.me'],
  },
  {
    src: 'images/html.png',
    alt: 'HTML HTML5',
    name: 'HTML/HTML5',
    type: 'Language',
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'TonyNgo.me'],
  },
  {
    src: 'images/ubuntu.png',
    alt: 'Ubuntu Linux',
    name: 'Ubuntu/Linux',
    type: "OS",
    links: ['Tripcamp', 'Dronest', 'Instavibes', 'Forget Me Notes', 'VuIRZoom', 'VuIRHD', 'TonyNgo.me'],
  },
  {
    src: 'images/arduino.png',
    alt: 'Arduino',
    name: 'Arduino',
    type: 'Hardware',
    links: ['VuIRZoom', 'VuIRHD', 'Others'],
  },
  {
    src: 'images/raspberrypi.png',
    alt: 'Raspberry Pi single board computer SBC',
    name: 'Raspberry Pi/SBC',
    type: 'Hardware',
    links: ['VuIRZoom', 'VuIRHD', 'Others'],
  },
  {
    src: 'images/autoinventor.png',
    alt: 'AutoDesk Inventor 3D',
    name: 'AutoDesk Inventor/CAD',
    type: 'IDE',
    links: ['VuIRZoom', 'VuIRHD', 'Others'],
  },
  {
    src: 'images/ros.png',
    alt: 'ROS Robot Operating System',
    name: 'ROS Robot Operating System',
    type: 'OS',
    links: ['VuIRHD', 'Others'],
  },
  {
    src: 'images/opencv.webp',
    alt: 'OpenCV',
    name: 'OpenCV',
    type: 'Library',
    links: ['VuIRZoom', 'VuIRHD', 'Others'],
  }
];

const projectObjs = [
  {
    src: 'images/tripcamp_logo.png',
    alt: 'Tripcamp',
    name: 'Tripcamp',
    type: 'Project',
  },
  {
    src: 'images/dronest_logo.png',
    alt: 'Dronest',
    name: 'Dronest',
    type: 'Project',
  },
  {
    src: 'images/dronest_ms_logo.png',
    alt: 'Dronest Messenger Server',
    name: 'Dronest Messenger Server',
    type: 'Project',
  },
  {
    src: 'images/instavibes_logo.png',
    alt: 'Instavibes',
    name: 'Instavibes',
    type: 'Project',
  },
  {
    src: 'images/vuirhd1_logo.png',
    alt: 'VuIR HD',
    name: 'VuIRHD',
    type: 'Project',
  },
  {
    src: 'images/forgetmenotes_logo.png',
    alt: 'Forget Me Notes',
    name: 'Forget Me Notes',
    type: 'Project',
  },
  {
    src: 'images/VuIRZoom_logo.png',
    alt: 'VuIRZoom',
    name: 'VuIRZoom',
    type: 'Project',
  },
  {
    src: 'images/tonyngo_me.png',
    alt: 'TonyNgo.me',
    name: 'TonyNgo.me',
    type: 'Project',
  },
]


function make_data_nodes() {
  let nodes = skillObjs.map(el => ({
    id: el.name,
    height: 50,
    fill: {
      src: el.src,
    }
  }));
  nodes = nodes.concat(
    projectObjs.map(el => ({
      id: el.name,
      height: 100,
      fill: {
        src: el.src,
      }
    }))
  )
  let edges = [];
  skillObjs.forEach(el => el.links.forEach(e => edges.push({
    from: e,
    to: el.name,
  })));

  fs.writeFile('files/skill_graph_data.json', JSON.stringify({nodes, edges}), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  return JSON.stringify({nodes, edges});
}


make_data_nodes();
// nodes: [{ "id": "Lannister" }]
// edges: [{ "from": "Lannister", "to": "Tully" }]
// console.log(skillObjs);