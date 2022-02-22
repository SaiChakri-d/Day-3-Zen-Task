//2. Create your own Resume using JSON format

let resume = {
"1. Basics": {
    "Name": "Sai Chakri D",
    "email": "saichakri.d@gmail.com",
    "Phone no.": 8095327664,
    "Location": "Bangalore, India",
    },
"2. Profiles": [ 
    {
    "linkedIn": "linkedin.com/in/sai-chakri-d",
    "GitHub": "github.com/SaiChakri-d",
    }
],
"3. Education": [
    {
    "1. UG Degree": "B.E in Telecommunication Engineering, YOP-2021",
    "2. UG College": "RV College of Engineering, Bangalore",
    "3. Diploma/12th": "Diploma in Electronics and Communication Engineering, YOP-2018",
    "4. Polytechnic College": "East West Institute of Polytechnic, Bangalore",
    }
],
"4. Skills": [
    {
    "Teamwork, Adaptability, Decision Making": 5,
    "JavaScript, C/C++, Verilog": 3.5,
    "LABview, OptiSystem, Keil uvision": 4,
    }
],
"5. Languages Known": [
    {
    "List": "English, Telugu, Tamil, Kannada and Hindi",
    }
],
"6. Certifications": [
    {
    1: "GUVI-JavaScript, valid from 2022",
    2: "NPTEL-Introduction to Internet of Things, valid from 2021",
    3: "CISCO-RVCE--Embedded System for IoT, valid from 2019",
    4: "NPTEL-Programming in C++, valid from 2019",
    }
],
"7. Projects": [
    {
    1: "Title: Performance Analysis of Underwater Wireless Optical Communication system with MIMO",
    2: "Description: Designed a UWOC system with MIMO to achieve improvement in link range in a high turbulence water medium.",
    3: "Duration: 4 months",
    4: "Title: Pulse Oximetry System using IoT",
    5: "Description: Designed a cost effective real time remote monitoring pulse oximetry system using ESP8266 and IoT.",
    6: "Duration: 3 months",
    
    }
],
"8. Extracurricular":[
    {
    1: "EWIP College Level Badminton Tournament 2017 (Runners Up), 2016 (Runners Up).",
    2: "Inter Schools Volleyball Tournament 2010 (Winners).",
    }
] 
}

console.log(resume);


// Output in node.js
/*
{
  '1. Basics': {
    Name: 'Sai Chakri D',
    email: 'saichakri.d@gmail.com',
    'Phone no.': 8095327664,
    Location: 'Bangalore, India'
  },
  '2. Profiles': [
    {
      linkedIn: 'linkedin.com/in/sai-chakri-d',
      GitHub: 'github.com/SaiChakri-d'
    }
  ],
  '3. Education': [
    {
      '1. UG Degree': 'B.E in Telecommunication Engineering, YOP-2021',
      '2. UG College': 'RV College of Engineering, Bangalore',
      '3. Diploma/12th': 'Diploma in Electronics and Communication Engineering, YOP-2018',
      '4. Polytechnic College': 'East West Institute of Polytechnic, Bangalore'
    }
  ],
  '4. Skills': [
    {
      'Teamwork, Adaptability, Decision Making': 5,
      'JavaScript, C/C++, Verilog': 3.5,
      'LABview, OptiSystem, Keil uvision': 4
    }
  ],
  '5. Languages Known': [ { List: 'English, Telugu, Tamil, Kannada and Hindi' } ],
  '6. Certifications': [
    {
      '1': 'GUVI-JavaScript, valid from 2022',
      '2': 'NPTEL-Introduction to Internet of Things, valid from 2021',
      '3': 'CISCO-RVCE--Embedded System for IoT, valid from 2019',
      '4': 'NPTEL-Programming in C++, valid from 2019'
    }
  ],
  '7. Projects': [
    {
      '1': 'Title: Performance Analysis of Underwater Wireless Optical Communication system with MIMO',
      '2': 'Description: Designed a UWOC system with MIMO to achieve improvement in link range in a high turbulence water medium.',
      '3': 'Duration: 4 months',
      '4': 'Title: Pulse Oximetry System using IoT',
      '5': 'Description: Designed a cost effective real time remote monitoring pulse oximetry system using ESP8266 and IoT.',
      '6': 'Duration: 3 months'
    }
  ],
  '8. Extracurricular': [
    {
      '1': 'EWIP College Level Badminton Tournament 2017 (Runners Up), 2016 (Runners Up).',
      '2': 'Inter Schools Volleyball Tournament 2010 (Winners).'
    }
  ]
}
*/



    
