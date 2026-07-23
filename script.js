let currentLanguage = "en";

function changeLanguage() {

    if (currentLanguage === "en") {

        document.getElementById("about-title").textContent = "自己紹介";
        document.getElementById("skills-title").textContent = "スキル";
        document.getElementById("projects-title").textContent = "プロジェクト";
        document.getElementById("contact-title").textContent = "お問い合わせ";

        document.getElementById("hero-text").textContent =
        "コンピュータサイエンス卒業 | フルスタック開発を学習中 | 日本で勤務中";

        document.getElementById("about-text").textContent =
        "現在、日本で働きながらWeb開発と日本語を勉強しています。将来は日本でフルスタック開発者として活躍することを目標にしています。";

        currentLanguage = "ja";

    } else {

        document.getElementById("about-title").textContent = "About Me";
        document.getElementById("skills-title").textContent = "Skills";
        document.getElementById("projects-title").textContent = "Projects";
        document.getElementById("contact-title").textContent = "Contact";

        document.getElementById("hero-text").textContent =
        "Computer Science Graduate | Future Full Stack Developer | Currently Working in Japan";

        document.getElementById("about-text").textContent =
        "I am a Computer Science graduate currently working in Japan. Alongside my full-time job, I am learning Web Development, Cloud Computing, and Japanese language. My goal is to become a Full Stack Developer in Japan.";

        currentLanguage = "en";

    }

}