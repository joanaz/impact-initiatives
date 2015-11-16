app.factory('ProfilesFactory', function($http) {

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


  var getHelperFunction = (role) =>
    $http.get('/api/users?role=' + role)
    .then(res => res.data);

  return {
    getCompanies: () => getHelperFunction('Company'),
    getVCs: () => getHelperFunction('VC'),
    getUserById: (id) => $http.get('/api/users/' + id).then(res => res.data),
    getCategories: () => $http.get('/api/categories').then(res => res.data),
    updateUser: (id, data) => $http.put('/api/users/' + id, data),
    updateStory: (id, data) => $http.put('api/users/' + id + '/newStory', data, {
      withCredentials : false,
      headers : {
        'Content-Type' : undefined
      },
      transformRequest : angular.identity
    }),
    sendEmail: (fd) => $http.post('/api/contacts/send', fd, {
      withCredentials : false,
      headers : {
        'Content-Type' : undefined
      },
      transformRequest : angular.identity
    })
  }
})