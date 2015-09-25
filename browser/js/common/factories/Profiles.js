app.factory('ProfilesFactory', function($http) {
  var companies = [{
    image: "/2U.png",
    title: "2U",
    text: "Increasing access to quality education by partnering with leading universities to offer degree programs online",
    description: "2U enables leading colleges and universities to deliver their high-quality education to qualified students anywhere. Its cloudbased software-as-a-service platform provides schools with the comprehensive operating infrastructure they need to attract, enroll, educate, support and graduate their students. 2U ensures that every student can experience the highest quality university education for the most successful outcome.",
    goals: ["Number of graduates", "Affordability and accessibility", "Savings from online education", "Educational achievement", "Success in workplace after completing the degree"],
    details: ["Headquarters: Hyattsville, MD", "Founders: John Katzman, Jeremy Johnson, Chip Paucek", "Founded: 2008", "Categories: EdTech, Software, Education", "Website: http://2u.com"],
    metrics: [{
      image: "graph.png",
      number: "10,000+",
      text: "Students",
      date: "Jun 04, 14"
    }, {
      image: "83percent.png",
      number: "83%",
      text: "Students graduated/still enrolled",
      date: "Nov 04, 14"
    }, {
      image: "graph.png",
      number: "20,000+",
      text: "Field Placements",
      date: "Sep 18, 14"
    }, {
      image: "92percent.png",
      number: "92%",
      text: "Post-Grad Job Placement Rate",
      date: "Dec 31, 13"
    }],
    stories: [{
      image: "/student1.png",
      text: "In a single day, I can fulfill my duties at the Air Force Base, discuss current events in data privacy during my live MIDS sessions, and then walk to the weekly Code for America hack session. I am so thankful MIDS allows me to extend my understanding of data science academically at Berkeley while continuing my endeavors in Boston.",
      author: "Erin Boehmer, Masters of Information and Data Science UC Berkeley, Systems engineer for the United States Air Force"
    }, {
      image: "/student2.png",
      text: "I’ve got a demanding job, and I lost my father during the first year of the program and my grandfather six months later… Without question, at these moments it was the most supportive and cooperative program I could imagine being a part of. The flexible nature of the program also allows me to be an active part of the UNC community wherever I am. I’ve gone to class in airports…in my car. You can’t do that with a program that’s traditional brick and mortar.",
      author: "Candice Brown, Masters of Business Administration UNC Kenan-Flagler, UNC Kenan-Flagler Alumni Council"
    }, {
      image: "/Jackson.jpg",
      text: "At the end of my first immersion in September 2014, I saw many of my fellow students in tears — they were sad to conclude the great experience we had during those few days. I have never experienced anything like that in an academic setting.",
      author: "Thomas Jackson, MHA@GW student"
    }],
    news: [{
      url: "http://www.prnewswire.com/news-releases/2u-inc-announces-pricing-of-public-offering-of-common-stock-300149020.html",
      image: "http://content.prnewswire.com/designimages/logo-prn.gif",
      title: "2U, Inc. Announces Pricing of Public Offering of Common Stock ",
      source: "PR Newswire",
      date: "Sep 24, 2015"
    }, {
      url: "http://2u.com/blog/dream-2u15-keynotes-activities-farewells/",
      image: "http://cdn-1.2u.com/cdn/mktg/5c438fee2a1844c6bbf68f9ca557c370/2U-Dream-Cristina-Cardenal.png",
      title: "Dream 2U15: Keynotes, Activities and Farewells",
      source: "2U Blog",
      date: "Jun 12, 2015"
    }, {
      url: "http://www.nasdaq.com/markets/ipos/company/2u-inc-800831-74700",
      image: "https://pbs.twimg.com/media/Bj0WtyWCIAAKHzr.jpg",
      title: "2U, INC. (TWOU) IPO",
      source: "NASDAQ",
      date: "Mar 28, 2014"
    }]
  }, {
    image: "http://citylightcap.com/img/heroes/shotspotter.jpg",
    title: "ShotSpotter",
    text: "This advanced Gunshot Location System pinpoints the location of gunfire in the real time and helps police reduce gun violence. "
  }, {
    image: "http://larryferlazzo.edublogs.org/files/2013/08/brainrush-q5dkeb.jpg",
    title: "BrainRush",
    text: "Developing adaptive learning games that keep students focused and learning faster."
  }]

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

  return {
    getAllCompanies: () => companies,
    getAllCategories: () => categories,
    getAllVCs: () => vcs,
    getCompany: (name) => companies.filter(elem => elem.title === name)[0],
    getVC: (name) => vcs.filter(elem => elem.title === name)[0]
  }
})