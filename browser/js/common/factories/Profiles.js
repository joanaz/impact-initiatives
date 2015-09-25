app.factory('ProfilesFactory', function($http) {
  var companies = [{
    image: "http://images.vcpost.com/data/images/full/13767/2u-inc.jpg?w=590",
    title: "2U",
    text: "Helping top-tier universities make leading programs available to more deserving students everywhere.",
    description: ["Headquarters: Hyattsville, MD", "Founders: John Katzman, Jeremy Johnson, Chip Paucek", "Founded: 2008", "Categories: EdTech, Software, Education", "Website: http://2u.com", "2U is a cloud-based Software-as-a-Service platform that provides schools with the comprehensive operating infrastructure."],
    metrics: [{
      number: "10,000+",
      text: "Students",
      date: "Jun 04, 14"
    }, {
      number: "17",
      text: "Programs",
      date: "Nov 04, 14"
    }, {
      number: "20,000+",
      text: "Field Placements",
      date: "Sep 18, 14"
    }, {
      number: "92%",
      text: "Post-Grad Job Placement Rate",
      date: "Dec 31, 13"
    }],
    stories: [{
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