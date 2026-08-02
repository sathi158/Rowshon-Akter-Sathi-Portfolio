let currentLanguage = "en";

function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }
}

function changeLanguage() {
    currentLanguage =
        currentLanguage === "en" ? "ja" : "en";

    const text = translations[currentLanguage];

    setText("nav-about", text.navAbout);
    setText("nav-skills", text.navSkills);
    setText("nav-projects", text.navProjects);
    setText("nav-experience", text.navExperience);
    setText("nav-certifications", text.navCertifications);
    setText("nav-education", text.navEducation);
    setText("nav-contact", text.navContact);

    setText("about-title", text.aboutTitle);
    setText("skills-title", text.skillsTitle);
    setText("projects-title", text.projectsTitle);
    setText("experience-title", text.experienceTitle);
    setText("certifications-title", text.certificationsTitle);
    setText("education-title", text.educationTitle);
    setText("contact-title", text.contactTitle);
    setText("who-i-am-title", text.whoIAmTitle);

    setText("hero-greeting", text.heroGreeting);
    setText("hero-title", text.heroTitle);
    setText("hero-text", text.heroText);
    setText("view-projects-btn", text.viewProjectsButton);
    setText("contact-btn", text.contactButton);

    setText("about-text", text.aboutText);

    setText("quick-info-title", text.quickInfoTitle);
    setText("degree-label", text.degreeLabel);
    setText("degree-value", text.degreeValue);
    setText("location-label", text.locationLabel);
    setText("location-value", text.locationValue);
    setText("status-label", text.statusLabel);
    setText("status-value", text.statusValue);
    setText("goal-label", text.goalLabel);
    setText("goal-value", text.goalValue);
    setText("learning-label", text.learningLabel);
    setText("learning-value", text.learningValue);
    setText("japanese-label", text.japaneseLabel);
    setText("japanese-value", text.japaneseValue);

    setText("featured-project", text.featuredProject);

setText("project-website-label", text.projectWebsiteLabel);

setText("cv-project-title", text.cvProjectTitle);
setText("cv-project-description", text.cvProjectDescription);

setText("portfolio-project-title", text.portfolioProjectTitle);
setText("portfolio-project-description", text.portfolioProjectDescription);

setText("recipe-status", text.recipeStatus);
setText("recipe-project-title", text.recipeProjectTitle);
setText("recipe-project-description", text.recipeProjectDescription);

setText("cv-live-demo", text.liveDemo);
setText("portfolio-live-demo", text.liveDemo);

setText("recipe-coming-soon", text.comingSoon);

    setText("experience-role", text.experienceRole);
    setText("experience-location", text.experienceLocation);
    setText("experience-point-1", text.experiencePoint1);
    setText("experience-point-2", text.experiencePoint2);
    setText("experience-point-3", text.experiencePoint3);
    setText("experience-point-4", text.experiencePoint4);

    setText("education-degree", text.educationDegree);
    setText("education-subtitle", text.educationSubtitle);
    setText("education-description", text.educationDescription);

    setText("award-title", text.awardTitle);
    setText("award-name", text.awardName);
    setText("award-country", text.awardCountry);

    setText("aws-title", text.awsTitle);
    setText("aws-status", text.awsStatus);

    setText("azure-title", text.azureTitle);
    setText("azure-status", text.azureStatus);

    setText("jlpt-title", text.jlptTitle);
    setText("jlpt-status", text.jlptStatus);

    setText("footer-role", text.footerRole);
    setText("footer-copyright", text.footerCopyright);

    document.documentElement.lang = currentLanguage;
}