app.factory('ProfilesFactory', function($http) {
  // var companies = [{
  //   image: "https://pbs.twimg.com/profile_images/634014441462300672/2uKkwgQk.jpg",
  //   title: "Cornell Tech",
  //   url: "cornell-tech",
  //   text: "We develop pioneering leaders and technologies for the digital age.",
  //   details: [],
  //   metrics: [],
  //   website: "tech.cornell.edu",
  //   stories: [{
  //     date: "Fri Oct 23 2015",
  //     profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  //     author: "Hesed Kim",
  //     anthorDescription: "",
  //     image: "survey_results/R_2OYJpC3ag4S9uox~IMG_2962.jpg",
  //     title: "",
  //     text: "Cornell Tech Multidisciplinary Student Team explore NYC by foot!"
  //   }, {
  //     date: "Fri Oct 23 2015",
  //     profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  //     author: "Anonymous",
  //     anthorDescription: "",
  //     text: "This is a story, the best story ever told. "
  //   }, {
  //     date: "Thurs Oct 22 2015",
  //     profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  //     author: "Anonymous",
  //     anthorDescription: "",
  //     image: "",
  //     title: "",
  //     text: "I love Cornell Tech because it is capable of giving me exactly the education I want: both challenging masters level computer science as well as top notch product design experience. The professors and students bring an unrelenting energy to their work. I wouldn't want to go anywhere else."
  //   }, {
  //     date: "Thurs Oct 22 2015",
  //     profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  //     author: "Ian Folau",
  //     anthorDescription: "",
  //     title: "",
  //     text: "This is how much I love cookies from Cornell Tech",
  //     video: "survey_results/R_3Ecp0C4JNb1Y0tV~MyCTStory.mp4"
  //   }, {
  //     date: "Thurs Oct 22 2015",
  //     profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  //     author: "Claire Opila",
  //     anthorDescription: "",
  //     title: "",
  //     image: "survey_results/R_27dOaVct557R1Wy~IMG_4717.jpg",
  //     text: "My name is Claire. I am a full time IS, CM student at Cornell Tech. I am currently doing a studio sprint. "
  //   }, {
  //     date: "Thurs Oct 22 2015",
  //     profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  //     author: "Anonymous",
  //     anthorDescription: "",
  //     title: "",
  //     image: "survey_results/R_2sbYVGnvveKIWrj~IMG_2009.jpg",
  //     text: "",
  //   }, {
  //     date: "Thurs Oct 22 2015",
  //     profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  //     author: "Carlos Fernandez",
  //     anthorDescription: "",
  //     title: "",
  //     image: "survey_results/R_807zMYzZzyNRW01~image.jpg",
  //     text: "",
  //   }]
  // }, {
  //   image: "/2U.png",
  //   title: "2U",
  //   url: "2u",
  //   website: "http://2u.com",
  //   text: "Increasing access to quality education by partnering with leading universities to offer degree programs online",
  //   description: "2U enables leading colleges and universities to deliver their high-quality education to qualified students anywhere. Its cloudbased software-as-a-service platform provides schools with the comprehensive operating infrastructure they need to attract, enroll, educate, support and graduate their students. 2U ensures that every student can experience the highest quality university education for the most successful outcome.",
  //   goals: ["Number of graduates", "Affordability and accessibility", "Savings from online education", "Educational achievement", "Success in workplace after completing the degree"],
  //   details: ["Founders: John Katzman, Jeremy Johnson, Chip Paucek", "Founded: 2008", "Headquarters: Hyattsville, MD", "Categories: EdTech, Software, Education"],
  //   metrics: [{
  //     image: "graph.png",
  //     number: "10,000+",
  //     text: "Students",
  //     date: "Jun 04, 14"
  //   }, {
  //     image: "83percent.png",
  //     number: "83%",
  //     text: "Students graduated/still enrolled",
  //     date: "Nov 04, 14"
  //   }, {
  //     image: "graph.png",
  //     number: "20,000+",
  //     text: "Field Placements",
  //     date: "Sep 18, 14"
  //   }, {
  //     image: "92percent.png",
  //     number: "92%",
  //     text: "Post-Grad Job Placement Rate",
  //     date: "Dec 31, 13"
  //   }],
  //   // stories: [{
  //   //   type: "image",
  //   //   image: "http://ww1.prweb.com/prfiles/2012/02/03/9265267/2u_logo_version1.jpg",
  //   //   text: "caption"
  //   // }, {
  //   //   type: "text",
  //   //   text: "The flexible nature of the program also allows me to be an active part of the UNC",
  //   //   image: "/student2.png",
  //   //   author: "Candice Brown"
  //   // }, {
  //   //   type: "video",
  //   //   video: "https://www.youtube.com/embed/aI4ZVlyrRZc",
  //   //   text: 'some text',
  //   // }],
  //   stories: [{
  //     date: "09-10-2015",
  //     profile: "/student1.png",
  //     author: "Erin Boehmer",
  //     anthorDescription: "Masters of Information and Data Science UC Berkeley, Systems engineer for the United States Air Force",
  //     image: "http://media.dma.mil/2011/Dec/15/2000191301/670/394/0/111207-F-PU513-035.JPG",
  //     rating: 5,
  //     title: "LOVE IT SO MUCH",
  //     text: "In a single day, I can fulfill my duties at the Air Force Base, discuss current events in data privacy during my live MIDS sessions, and then walk to the weekly Code for America hack session. I am so thankful MIDS allows me to extend my understanding of data science academically at Berkeley while continuing my endeavors in Boston.",
  //   }, {
  //     date: "08-22-2015",
  //     profile: "/student2.png",
  //     author: "Candice Brown",
  //     anthorDescription: "Masters of Business Administration UNC Kenan-Flagler, UNC Kenan-Flagler Alumni Council",
  //     rating: 4,
  //     title: "AMAZING COMPANY BUT STILL YOUNG",
  //     text: "I’ve got a demanding job, and I lost my father during the first year of the program and my grandfather six months later… Without question, at these moments it was the most supportive and cooperative program I could imagine being a part of. The flexible nature of the program also allows me to be an active part of the UNC community wherever I am. I’ve gone to class in airports…in my car. You can’t do that with a program that’s traditional brick and mortar."
  //   }, {
  //     date: "06-15-2015",
  //     profile: "/Jackson.jpg",
  //     author: "Thomas Jackson",
  //     anthorDescription: "MHA@GW student",
  //     rating: 1,
  //     video: "https://www.youtube.com/embed/bIEPkGgjN4g",
  //     title: "THANK YOU!",
  //     text: "At the end of my first immersion in September 2014, I saw many of my fellow students in tears — they were sad to conclude the great experience we had during those few days. I have never experienced anything like that in an academic setting."
  //   }],
  //   news: [{
  //     url: "http://www.prnewswire.com/news-releases/2u-inc-announces-pricing-of-public-offering-of-common-stock-300149020.html",
  //     image: "http://content.prnewswire.com/designimages/logo-prn.gif",
  //     title: "2U, Inc. Announces Pricing of Public Offering of Common Stock ",
  //     source: "PR Newswire",
  //     date: "Sep 24, 2015"
  //   }, {
  //     url: "http://2u.com/blog/dream-2u15-keynotes-activities-farewells/",
  //     image: "http://cdn-1.2u.com/cdn/mktg/5c438fee2a1844c6bbf68f9ca557c370/2U-Dream-Cristina-Cardenal.png",
  //     title: "Dream 2U15: Keynotes, Activities and Farewells",
  //     source: "2U Blog",
  //     date: "Jun 12, 2015"
  //   }, {
  //     url: "http://www.nasdaq.com/markets/ipos/company/2u-inc-800831-74700",
  //     image: "https://pbs.twimg.com/media/Bj0WtyWCIAAKHzr.jpg",
  //     title: "2U, INC. (TWOU) IPO",
  //     source: "NASDAQ",
  //     date: "Mar 28, 2014"
  //   }]
  // }, {
  //   image: "http://citylightcap.com/img/heroes/shotspotter.jpg",
  //   title: "ShotSpotter",
  //   text: "This advanced Gunshot Location System pinpoints the location of gunfire in the real time and helps police reduce gun violence. "
  // }, {
  //   image: "http://larryferlazzo.edublogs.org/files/2013/08/brainrush-q5dkeb.jpg",
  //   title: "BrainRush",
  //   text: "Developing adaptive learning games that keep students focused and learning faster."
  // }]

  var categories = [{
    image: "http://www.houseintuscany.com/sub_category_copies/0000/0006/photo_education.jpg?1410270167",
    title: "Education & Media",
    text: "Ensure that the right technology is leveraged as fully as possible to deliver the best possible education to learners everywhere.",
  }, {
    image: "http://www.metro.us/_internal/gxml!0/4dntvuhh2yeo4npyb3igdet73odaolf$fsf867qru2psg24byqk48w8os841zyh/shotSpotter.jpeg",
    title: "Safety & Security",
    text: "Ensure that the best safety and security platforms receive the funding and support they need.",
  }, {
    image: "http://www.eurocontrol.int/sites/default/files/styles/colorbox-max/public/illustration/environmental-protection.jpg?itok=cIdgasYM",
    title: "Energy & Environment",
    text: "Conserving energy and natural resources is critical to the health and future of our planet.",
  }]

  var vcs = [{
    image: "http://www.citylightcap.com/img/logo.png",
    title: "City Light Capital",
    text: "Invest forward, and further what's possible",
    portfolio: ["2U", "ShotSpotter", "BrainRush"]
  }]
  var getHelperFunction = (role) =>
    $http.get('/api/users?role=' + role)
    .then(res => res.data);

  return {
    getCompanies: () => getHelperFunction('company'),
    getCategories: () => categories,
    getVCs: () => vcs,
    getUserById: (id) => $http.get('/api/users/' + id).then(res => res.data),
    getVC: (name) => vcs.filter(elem => elem.title === name)[0],
    updateUser: (id, data) => $http.put('/api/users/' + id, data),
    updateStory: (id, data) => $http.put('api/stories/' + id, data)
  }
})