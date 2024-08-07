document.addEventListener("DOMContentLoaded", () => {
  function preloadImage(src, callback) {
    const img = new Image();
    img.onload = callback; // Call the callback function when the image is loaded
    img.src = src;
  }

  function preloadUpcomingImages(currentIndex, preloadCount = 3, callback) {
    const upcomingItems = timelineData.slice(
      currentIndex,
      currentIndex + preloadCount
    );
    upcomingItems.forEach((item, index) => {
      if (index === 0) {
        // Only preload the next immediate image with callback
        preloadImage(`./assets/${item.id}.webp`, callback);
      } else {
        preloadImage(`./assets/${item.id}.webp`);
      }
    });
  }

  // Cache commonly used elements
  const timelineContainer = document
    .getElementById("timeline-1")
    .querySelector(".timeline");
  const wholePage = document.getElementById("timeline-1");
  const navItems = document.querySelectorAll(".nav-item");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const floatingNav = document.getElementById("floating-nav");
  const timelineData = [
    {
      id: "1",
      year: "2024",
      location: "India",
      title: "MOBILE GAME",
      category: "Interactive Learning",

      details: [
        {
          subtitle: "Coming Up: A Game for Boys",
          description: `A D2C game to equip adolescent boys with the vocabulary and knowledge to approach and be 
          intimate with girls and deal with rejection.  
          `,
        },
      ],
      partner: "USAID/Washington",
    },

    {
      id: "2",
      year: "2024",
      location: "Nepal",
      title: "Mobile Game",
      category: "Interactive Learning",
      partner: "PSI/UNICEF",
      details: [
        {
          subtitle: "Coming Up: A game for Girls",
          description: `A D2C game co-created with girls in Nepal to empower them in making choices, while gaining direct access to information and resources about their health and well-being.     `,
        },
      ],
      partner: "USAID/Nepal and CARE Nepal",
    },

    {
      id: "3",
      year: "Since 2018",
      location: "India",
      title: "Mobile Game",
      category: "Interactive Learning",
      partner: "PSI/UNDP/FAO",
      link: "https://www.howard-delafield.com/work/unlocking-girls'-potential-through-gameplay",
      details: [
        {
          subtitle: "Go Nisha Go",
          description: `An award-winning D2C Game co-created with youth that lets them discover, explore, learn and play their way toward becoming empowered choice-makers.`,
        },
      ],
      partner: "USAID/Washington",
    },

    {
      id: "4",
      year: "2015-2019",
      location: " USA, Great Falls National Park, Potomac, Maryland",
      title: "Digital Simulation",
      category: "Interactive Learning",
      link: "https://www.howard-delafield.com/work/exploring-choice-making-in-shared-spaces",
      details: [
        {
          subtitle: "Loop Trail Quest",
          description: `Exploring choice-making in shared spaces through a digital simulation with embedded research to understand behaviors that can put in motion triggers that cause the spread of zoonotic disease (tick-borne and mosquito borne diseases). Traditional booklets and videos were used to compare the impact of digital simulations.
          `,
        },
      ],
      partner: "Self-funded by HDI",
    },

    {
      id: "5",
      year: "2015-2019",
      location: "GLOBAL - 24 Priority Countries",
      title: "Games for Program Planning and Design",
      category: "Interactive Learning",
      link: "https://www.howard-delafield.com/work/game-based-training-for-intervention-design",
      details: [
        {
          subtitle: "Point & Click Fever Game",
          description: `Program planners  experience a Sub-Saharan African mother’s care-seeking journey and  who or what influences her choices to treat her infant’s fever. 
          `,
        },
        {
          subtitle: `Factors Card Game`,
          description: `A  “scattergories” game where program planners learn the interplay of structural, social,and  internal factors in individual decision-making.`,
        },
        {
          subtitle: "Chutes & Ladders Board Game",
          description: `Planners learn through play how different health conditions and diseases can be impacted by multi-faceted factors.
          `,
        },
        {
          subtitle: "Story Dice Game",
          description: `Players learn how random factors and circumstances can impact the best planned interventions.`,
        },
      ],
    },

    {
      id: "8",
      year: "2011-2014",
      location: "Bangladesh",
      title: "Strengthening Democratic Local Governance",
      category: "Branding & Demand Generation",
      link: "https://www.howard-delafield.com/work/creating-demand-for-good-governance",
      details: [
        {
          subtitle: "We are the government",
          description: `Creating demand for good governance and citizen engagement among youth and women through mass media, social media, citizen reporting and engagement of journalists. `,
        },
      ],
      partner: "Tetratech/USAID",
    },

    {
      id: "9",
      year: "2011-2013",
      location: "Caribbean Region: Guyana, Barbados, Trinidad, & Jamaica",
      title: "Music Videos",
      category: "Branding & Demand Generation",
      link: "https://www.howard-delafield.com/work/communication-for-social-change",
      details: [
        {
          subtitle: "Friendz",
          description: `Mobilization of community and youth engagement through music videos to support People Living with AIDS

          `,
        },
      ],
      partner:
        "Options/Kreditanstalt fur Wiederaufbau (KfW) German Development Bank",
    },

    {
      id: "10",
      year: "2010-2012",
      location: "Caribbean Region: Guyana, Barbados, Trinidad, & Jamaica",
      title: "Multi-Media Interventions",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: "Smart and Strong",
          description: `Alive & Thrive Campaign to engage men and leverage agricultural and WASH sectors in optimal infant and young child feeding practices.

          `,
        },
      ],
      partner: "FHI Solutions/The Bill & Melinda Gates Foundation",
    },

    {
      id: "11",
      year: "2008",
      location: "Pakistan",
      title: "Policy Guidance",
      category: "Policy Guidance & Advisory",
      details: [
        {
          subtitle: "",
          description: `National policy guidance on the intersections of reproductive health, women’s and children’s health.
          `,
        },
      ],
      partner: "Save the Children",
    },

    {
      id: "6",
      year: "2008-2010",
      location: "Pakistan",
      title: "Interactive Voice Response",
      category: "Interactive Learning",
      details: [
        {
          subtitle: "Hifazat: Because life is precious",
          description: `Agency for pregnant women and mothers to make decisions and seek care supported through an IVR service with advice from a female doctor. First ever public/private partnership with a telecom company.  `,
        },
      ],
      partner: "International Rescue Committee (IRC)/USAID",
    },

    {
      id: "12",
      year: "2007",
      location: "Rwanda",
      title: "Indoor Residual Spraying (IRS)",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: "Malaria Prevention",
          description: `Behavior change strategies to support efficacy of IRS
          `,
        },
      ],
      partner: "RTI International/USAID",
    },

    {
      id: "7",
      year: "2004-2009",
      location: "Guyana",
      title: "Interactive Comic Book",
      category: "Interactive Learning",

      details: [
        {
          subtitle: "Super Gang and the Player",
          description: `The reader gets to choose whether Stella stays with her “sugar daddy” or leaves and reclaims her life.
          `,
        },
      ],
      partner: "FHI360/USAID",
    },

    {
      id: "13",
      year: "2004-2013",
      location: "Guyana",
      title: "Multi-Media Interventions",
      category: "Branding & Demand Generation",
      link: "https://www.howard-delafield.com/work/engaging-adolescents-to-mitigate-hiv%2Faids",
      details: [
        {
          subtitle: `"Don’t Dis Me"`,
          description: `Communications from Comic Books, Music Videos, to Rock Concerts aimed at adolescents and young adults to address stigma, testing, prevention, treatment, care, and support.
          `,
        },
      ],
      partner: "FHI360/USAID/PEPFAR",
    },

    {
      id: "14",
      year: "2003-2006",
      location: "Ethiopia",
      title: "HIV Compassion Campaign",
      category: "Branding & Demand Generation",
      link: "https://www.howard-delafield.com/work/tackling-hiv-stigma-by-fostering-compassion-and-empathy",
      details: [
        {
          subtitle: `Demand Generation for HIV Testing`,
          description: `Partnership with Coca-Cola to promote our award-winning campaign which included a Music Video montage of national celebrities and associated mass media and community based campaigns.
          `,
        },
      ],
      partner: "FHI360",
    },

    {
      id: "15",
      year: "2003",
      location: "Malawi",
      title: "Policy Guidance",
      category: "Policy Guidance & Advisory",
      details: [
        {
          subtitle: ``,
          description: `National policy guidance on Maternal Newborn health`,
        },
      ],
      partner: "Save the Children",
    },

    {
      id: "16",
      year: "2001-2004",
      location: "Pakistan & Ethiopia",
      title: "Tetanus Immunization Campaigns",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: ``,
          description: `Mass media, feature films, and community engagement to promote immunizing women of reproductive age.`,
        },
      ],
      partner: "Save the Children/UNICEF",
    },

    {
      id: "17",
      year: "2001-2004",
      location: "Nepal",
      title: "Clean Delivery Product",
      category: "Policy Guidance & Advisory",
      details: [
        {
          subtitle: `National New-born Care Strategy`,
          description: `National policy guidance on Maternal NeoNatal and Child Health and ideation and implementation support to women entrepreneurs for clean birthing kits
          `,
        },
      ],
      partner: "Save the Children",
    },

    {
      id: "18",
      year: "2001-2004",
      location: "Nepal",
      title: "Hygiene Product",
      category: "Branding & Demand Generation",
      link: "https://www.howard-delafield.com/work/increasing-access-and-demand-for-hand-soap",
      details: [
        {
          subtitle: `Handwashing with soap`,
          description: `A private sector partnership with Unilever to produce an award winning and impactful campaign that promoted the benefits of good handwashing practices and ensured supply of affordable soap.`,
        },
      ],
      partner: "UNICEF/World Bank/Unilever",
    },

    {
      id: "19",
      year: "2001-2003",
      location: "Bangladesh",
      title: "Branding & Mass Media Campaign",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `Bajee Quddus Wanna bet?`,
          description: `Repositioning condoms from being perceived as purely as a family product to a disease prevention product by leveraging humor and Bollywood-style characters.

          `,
        },
      ],
      partner: "FHI360/USAID",
    },

    {
      id: "20",
      year: "1995-2002",
      location: "Vietnam, Cambodia, Nepal",
      title: "Product Branding & Distribution",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: "",
          description: `Aligning consumer benefits such as radiant skin, energy, prosperity, and vibrancy to promote health products.    
          `,
        },

        {
          subtitle: `IDEAL (Vietnam)`,
          description: `Oral Contraceptives and Emergency Contraceptives (ECP)`,
        },

        {
          subtitle: `Diamond Lady (Cambodia)`,
          description: `Oral Contraceptives`,
        },

        {
          subtitle: `Nava Jeevan (Nepal)`,
          description: `New Life Orange-flavored Oral Rehydration Salts for Children
          `,
        },
        {
          subtitle: `Sunaulo Gulaf Oral Contraceptive Pills (Nepal)`,
          description: `Oral Contraceptive pills`,
        },
      ],
      partner: "KfW (German Development Bank)",
    },

    {
      id: "21",
      year: "1998-1999",
      location: "Indonesia",
      title: "Mass Media Campaign",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `Action Stop AIDS (ASA)  Aksi Stop AIDS`,
          description: `Mass media communication and private sector partnerships to promote AIDS prevention.`,
        },
      ],
      partner: "FHI360/USAID",
    },

    {
      id: "22",
      year: " 1996-1998",
      location: "Nepal",
      title: "Condom and Animation Campaign",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `Dhaali Dai`,
          description: `Dual protection engagement using humor and animation.`,
        },
      ],
      partner: "FHI360/USAID",
    },

    {
      id: "23",
      year: " 1996-1998",
      location: "Nepal",
      title: "Policy Guidance",
      category: "Policy Guidance & Advisory",
      details: [
        {
          subtitle: `Visceral Leishmaniasis (Kala-Azar)`,
          description: `Communication strategy development to first understand disease causation and the factors that put humans at risk and to distill those insights into compelling messaging.
          `,
        },
      ],
      partner: "ARD/Now Tetratech",
    },

    {
      id: "24",
      year: " 1995",
      location: "Myanmar",
      title: "Branding of Condoms",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `APHAW Branded Condoms`,
          description: `Positioned the brand as a trusted friend resulting in it becoming the largest selling condom in Asia.`,
        },
      ],
      partner: "PSI/UNICEF",
    },

    {
      id: "25",
      year: " 1995",
      location: "Myanmar",
      title: "Fuel-Efficient Stoves",
      category: "Branding & Demand Generation",
      link: "https://www.howard-delafield.com/work/social-marketing-for-global-health%3A-from-contraceptives-to-cookstoves",
      details: [
        {
          subtitle: `A-1 Savings`,
          description: `Texaco-funded women’s pottery cooperative initiative to produce and sell stoves to reduce deforestation and in-door smoke.`,
        },
      ],
      partner: "PSI/UNICEF",
    },

    {
      id: "26",
      year: "2008-2010",
      location: "Pakistan",
      title: "Branded 24/7 Health Centers, Transport, and Decision Support",
      category: "Social Franchising of Health Services",
      link: "https://www.howard-delafield.com/work/seamless-health-care-solutions-to-the-'three-delays'",
      details: [
        {
          subtitle: `Hifazat: Because Life is Precious`,
          description: `Branded ‘uber-style’ taxis to take pregnant women to care, where first ever government branded health centers offer 24/7 seamless healthcare under this umbrella brand of protection. An interactive voice response app nudges women to seek care.`,
        },
      ],
      partner: "IRC/USAID",
    },

    {
      id: "27",
      year: "2007-2010",
      location: "Bangladesh",
      title: "Health Clinics",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: `Smiling Sun Clinic`,
          description: `Branding refresh and creation of ‘health kiosks’ l to young married couples.`,
        },
      ],
      partner: "Chemonics/USAID",
    },

    {
      id: "28",
      year: "2004-2013",
      location: "Guyana",
      title: "A coalition of 43 businesses",
      category: "Social Franchising of Health Services",
      link: "https://www.howard-delafield.com/work/prioritizing-sustainability-from-the-start",
      details: [
        {
          subtitle: `Guyana Business Coalition`,
          description: `Businesses unite to provide HIV testing, workplace training, transportation, insurance, and other support needs. Shared learnings and partnerships with Thai and S. Africa Business Coalitions.`,
        },
      ],
      partner: "FHI360/MSH PEPFAR/USAID",
    },

    {
      id: "29",
      year: "2004-2007",
      location: "Bangladesh",
      title: "Branded Drop-in Centers (160+)",
      category: "Social Franchising of Health Services",
      link: "https://www.howard-delafield.com/work/transforming-health-services-into-places-for-belonging-and-acceptance",
      details: [
        {
          subtitle: `Modhumita (Sweet Friend)`,
          description: `160+ customized club-like drop-in centers that attracted gay men, sex workers, and injection drug users  for testing and treatment for STIs including HIV.
          `,
        },
      ],
    },

    {
      id: "31",
      year: "2003-2004",
      location: "Vietnam",
      title: "HIV testing and counseling spaces",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: `Café corners`,
          description: `HIV testing and counseling corners in coffee shops.`,
        },
      ],
      partner: "Marie Stopes International",
    },

    {
      id: "32",
      year: "1995",
      location: "Nepal",
      title: "Sangini",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: `Injectable contraceptive distribution, training and certification`,
          description: `A global first over-the-counter contraceptive distributed through a network of branded pharmacies with quality assured through mystery shopper checks.`,
        },
      ],
    },
  ];

  const categorySettings = {
    "Full Timeline": {
      color: "#f8f8f8",
      backgroundImage: "",
    },
    "Interactive Learning": {
      color: "#d7401a",
      backgroundImage: "",
    },
    "Branding & Demand Generation": {
      color: "#e8a425",
      backgroundImage: "",
    },
    "Social Franchising of Health Services": {
      color: "#3d7a31",
      backgroundImage: "",
    },
    "Policy Guidance & Advisory": {
      color: "#1471f6",
      backgroundImage: "",
    },
  };

  
  const observerCallback = (entries, observer) => {
    // Only run this effect on screens wider than 768px
    if (window.innerWidth > 768) {
      entries.forEach((entry) => {
        const itemsContainer = document.querySelector("#floating-nav .items-container");
        if (entry.isIntersecting) {
          // The header is halfway across the screen, gradually show the items-container
          itemsContainer.style.opacity = "0";
          // Ensure the element is not clickable when fully transparent
          itemsContainer.style.pointerEvents = "none";
        } else {
          // The header is not halfway across the screen, gradually hide the items-container
          itemsContainer.style.opacity = "1";
          // Make the element clickable again
          itemsContainer.style.pointerEvents = "all";
        }
      });
    }
  };

  // Step 2: Set up the Intersection Observer options
  const observerOptions = {
    root: null, // observing relative to the viewport
    threshold: 0.5, // callback is executed when 50% of the element is visible
  };

  // Step 3: Create the Intersection Observer instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Step 4: Attach the Intersection Observer to the header
  const heroText = document.querySelector(".hero-text"); // Assuming this is the header with "A Timeline of Global Innovations"
  if (heroText) {
    observer.observe(heroText);
  }

  function renderTimeline(category = "Full Timeline") {
    timelineContainer.innerHTML = ""; // Clear existing content

    timelineData.forEach((item) => {
      if (category !== "Full Timeline" && item.category !== category) return;

      const sublocationContent = item.sublocation
        ? ` - ${item.sublocation}`
        : "";

      let detailsContent = "";
      item.details.forEach((detail) => {
        const subtitle = detail.subtitle
          ? `<p class="subtitle">${detail.subtitle}</p>`
          : "";

        detailsContent += `
                <div class = "details">
                ${subtitle}
                    <p class="desc">${detail.description}</p>
                </div>
            `;
      });

      const backgroundColor =
        // categorySettings[item.category].color || "rgba(0,0,0,0)";
        "rgba(0,0,0,0)";

      const dividerColor =
        categorySettings[item.category].color || "rgba(0,0,0,0)";

      const partnerContent = item.partner
        ? `<span class="partner">${item.partner}</span>`
        : "";

      let readMoreButton = "";
      if (item.link) {
        readMoreButton = `<a href="${item.link}" target="_blank" class="button" style="background-color: ${dividerColor};">Read more</a>`;
      }
      let content = `
 
          <div class="timeline-item ${
            item.id === "5" || item.id === "20" ? "long" : ""
          }" data-text="${item.year}">     
          <div class="year">
              <h3>${item.year}</h3> 
              <div class="dot"></div>         
          </div>     
              <div class="timeline__content">
                    <img class="timeline__img" src="./assets/${item.id}.webp"/>
                    <div class="timeline__text" style="background-color: ${backgroundColor};">
                      <div class="title_content">
                            <span class="category">${item.category}</span>
                            <div class="divider" style="background-color: ${dividerColor};"></div>
                            <p class="location">${
                              item.location
                            } ${sublocationContent}<span> </span></p>
                      </div>
                      <p class="title">${item.title}</p> 
                      ${detailsContent}
                      <p class="partnerContainer"> ${partnerContent}</p>
                      ${readMoreButton}

                    </div>
              </div>
          </div>
 
        `;

      timelineContainer.insertAdjacentHTML("beforeend", content);
    });

    // document.getElementById('loader').style.display = 'none';
  }

  // Initialize the timeline
  function initTimeline(category = "Full Timeline") {
    // Sort timelineData in descending order by year
    timelineData.sort((a, b) => {
      // Extract the first 4 characters of the year and convert to number
      const yearA = parseInt(a.year.substring(0, 4));
      const yearB = parseInt(b.year.substring(0, 4));

      // Compare the years
      return yearB - yearA;
    });

    renderTimeline(category);
    setupIntersectionObserver();
  }

  // Setup Intersection Observer
  function setupIntersectionObserver() {
    const observerOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "10px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timeline-item--active");
          const imageUrl = entry.target.querySelector(".timeline__img").src;
  
          // Preload next image and change background after it's loaded
          const currentIndex = Array.from(
            document.querySelectorAll(".timeline-item")
          ).indexOf(entry.target);
          preloadUpcomingImages(currentIndex, 6, () => {
            wholePage.style.backgroundImage = `url(${imageUrl})`;
            wholePage.style.backgroundSize = 'cover';
            wholePage.style.backgroundPosition = 'center';
            wholePage.style.webkitBackgroundSize = 'cover';
            wholePage.style.mozBackgroundSize = 'cover';
            wholePage.style.oBackgroundSize = 'cover';
            wholePage.style.imageRendering = '-webkit-optimize-contrast';
            wholePage.style.imageRendering = 'optimizeQuality';
            wholePage.style.imageRendering = 'crisp-edges';
            wholePage.style.imageRendering = 'pixelated';
          });
        } else {
          entry.target.classList.remove("timeline-item--active");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".timeline-item")
      .forEach((item) => observer.observe(item));
  }

  // Setup navigation
  function setupNavigation() {
    navItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        // Remove active class from all nav items
        navItems.forEach((navItem) => navItem.classList.remove("active"));

        // Add active class to the clicked nav item
        event.currentTarget.classList.add("active");

        const selectedCategory = item.getAttribute("data-category");
        const backgroundImage =
          categorySettings[selectedCategory].backgroundImage;
        wholePage.style.backgroundImage = `url(${backgroundImage})`;
        initTimeline(selectedCategory);

        // Close the floating nav
        floatingNav.classList.remove("active");
        hamburgerIcon.innerHTML = "&#9776;";
        hamburgerIcon.classList.remove("active");
      });
    });
  }

  function toggleNavigation() {
    floatingNav.classList.toggle("active");
  }

  function setupHamburgerToggle() {
    hamburgerIcon.addEventListener("click", () => {
      hamburgerIcon.classList.toggle("active");
      if (hamburgerIcon.classList.contains("active")) {
        hamburgerIcon.innerHTML = ""; // Change to 'X' icon
      } else {
        hamburgerIcon.innerHTML = "&#9776;"; // Change back to hamburger icon
      }
      toggleNavigation();
    });
  }

  // Initialize functions
  initTimeline();
  setupHamburgerToggle();
  setupNavigation();
});
