width = document.documentElement.clientWidth;

console.log("width: " + width);

const AboutPageSection5ParagraphsPicturedDirection = document.getElementById('AboutPageSection5ParagraphsPicturedDirection')

if (width <=733){
    AboutPageSection5ParagraphsPicturedDirection.innerHTML = "(pictured above)"
}

const navButtons = document.querySelectorAll(".navButton");
const navSidebarButton = document.getElementById("NavHamburgerButton");

function openNavigationSideBar(){
    const navSidebar = document.getElementById("navSidebar");
    const closeSidebarButton = document.getElementById("SidebarNavCloseButton");
    navSidebar.style.right = "0px";
    navSidebar.style.display = "flex";
    closeSidebarButton.style.display = "block";
}

function closeNavigationSideBar(){
    const navSidebar = document.getElementById("navSidebar");
    const closeSidebarButton = document.getElementById("SidebarNavCloseButton");
    navSidebar.style.right = "-100%";
    navSidebar.style.display = "none";
    closeSidebarButton.style.display = "none";
}

let currentImageNumberHomePageSlider = 1;

function HomePageSlider(changeDirection){
    const HomePageSliderElement = document.getElementById("HomePageSection2PictureSliderImage");
    currentImageNumberHomePageSlider += changeDirection;
    
    if(currentImageNumberHomePageSlider == 0){
        currentImageNumberHomePageSlider = 4;
    } else if(currentImageNumberHomePageSlider == 5){
        currentImageNumberHomePageSlider = 1;
    }

    if (currentImageNumberHomePageSlider == 1){
        HomePageSliderElement.src = "Pictures/HomePageSection2ImageSliderPicture1.webp";
    } else if (currentImageNumberHomePageSlider == 2){
        HomePageSliderElement.src = "Pictures/HomePageSection2ImageSliderPicture2.webp";
    } else if (currentImageNumberHomePageSlider == 3){
        HomePageSliderElement.src = "Pictures/HomePageSection2ImageSliderPicture3.webp";
    } else if (currentImageNumberHomePageSlider == 4){
        HomePageSliderElement.src = "Pictures/HomePageSection2ImageSliderPicture4.webp";
    }
}

let currentImageNumberOurImpactPageSlider1 = 1;

function OurImpactPageSlider1(changeDirection){
    const OurImpactPageSlider1 = document.getElementById("OurImpactPageSection2PictureSliderImage");
    currentImageNumberOurImpactPageSlider1 += changeDirection;
    
    if(currentImageNumberOurImpactPageSlider1 == 0){
        currentImageNumberOurImpactPageSlider1 = 5;
    } else if(currentImageNumberOurImpactPageSlider1 == 6){
        currentImageNumberOurImpactPageSlider1 = 1;
    }

    if (currentImageNumberOurImpactPageSlider1 == 1){
        OurImpactPageSlider1.src = "Pictures/OurImpactPageSection2ImageSliderPicture1.webp";
    } else if (currentImageNumberOurImpactPageSlider1 == 2){
        OurImpactPageSlider1.src = "Pictures/OurImpactPageSection2ImageSliderPicture2.webp";
    } else if (currentImageNumberOurImpactPageSlider1 == 3){
        OurImpactPageSlider1.src = "Pictures/OurImpactPageSection2ImageSliderPicture3.jpg";
    } else if (currentImageNumberOurImpactPageSlider1 == 4){
        OurImpactPageSlider1.src = "Pictures/OurImpactPageSection2ImageSliderPicture4.webp";
    } else if (currentImageNumberOurImpactPageSlider1 == 5){
        OurImpactPageSlider1.src = "Pictures/OurImpactPageSection2ImageSliderPicture5.jpg";
    } 
}

let currentImageNumberOurImpactPageSlider2 = 1;

function OurImpactPageSlider2(changeDirection){
    const OurImpactPageSlider2 = document.getElementById("OurImpactPageSection3PictureSliderImage");
    currentImageNumberOurImpactPageSlider2 += changeDirection;
    
    if(currentImageNumberOurImpactPageSlider2 == 0){
        currentImageNumberOurImpactPageSlider2 = 6;
    } else if(currentImageNumberOurImpactPageSlider2 == 7){
        currentImageNumberOurImpactPageSlider2 = 1;
    }

    if (currentImageNumberOurImpactPageSlider2 == 1){
        OurImpactPageSlider2.src = "Pictures/OurImpactPageSection3ImageSliderPicture1.webp";
    } else if (currentImageNumberOurImpactPageSlider2 == 2){
        OurImpactPageSlider2.src = "Pictures/OurImpactPageSection3ImageSliderPicture2.webp";
    } else if (currentImageNumberOurImpactPageSlider2 == 3){
        OurImpactPageSlider2.src = "Pictures/OurImpactPageSection3ImageSliderPicture3.webp";
    } else if (currentImageNumberOurImpactPageSlider2 == 4){
        OurImpactPageSlider2.src = "Pictures/OurImpactPageSection3ImageSliderPicture4.webp";
    } else if (currentImageNumberOurImpactPageSlider2 == 5){
        OurImpactPageSlider2.src = "Pictures/OurImpactPageSection3ImageSliderPicture5.webp";
    }  else if (currentImageNumberOurImpactPageSlider2 == 6){
        OurImpactPageSlider2.src = "Pictures/OurImpactPageSection3ImageSliderPicture6.webp";
    } 
}

let currentImageNumberOurImpactPageSlider3 = 1;

function OurImpactPageSlider3(changeDirection){
    const OurImpactPageSlider3 = document.getElementById("OurImpactPageSection4PictureSliderImage");
    currentImageNumberOurImpactPageSlider3 += changeDirection;
    
    if(currentImageNumberOurImpactPageSlider3 == 0){
        currentImageNumberOurImpactPageSlider3 = 5;
    } else if(currentImageNumberOurImpactPageSlider3 == 6){
        currentImageNumberOurImpactPageSlider3 = 1;
    }

    if (currentImageNumberOurImpactPageSlider3 == 1){
        OurImpactPageSlider3.src = "Pictures/OurImpactPageSection4ImageSliderPicture1.webp";
    } else if (currentImageNumberOurImpactPageSlider3 == 2){
        OurImpactPageSlider3.src = "Pictures/OurImpactPageSection4ImageSliderPicture2.webp";
    } else if (currentImageNumberOurImpactPageSlider3 == 3){
        OurImpactPageSlider3.src = "Pictures/OurImpactPageSection4ImageSliderPicture3.webp";
    } else if (currentImageNumberOurImpactPageSlider3 == 4){
        OurImpactPageSlider3.src = "Pictures/OurImpactPageSection4ImageSliderPicture4.webp";
    } else if (currentImageNumberOurImpactPageSlider3 == 5){
        OurImpactPageSlider3.src = "Pictures/OurImpactPageSection4ImageSliderPicture5.webp";
    }
}

let currentImageNumberOurImpactPageSlider4 = 1;

function OurImpactPageSlider4(changeDirection){
    const OurImpactPageSlider4 = document.getElementById("OurImpactPageSection5PictureSliderImage");
    currentImageNumberOurImpactPageSlider4 += changeDirection;
    
    if(currentImageNumberOurImpactPageSlider4 == 0){
        currentImageNumberOurImpactPageSlider4 = 6;
    } else if(currentImageNumberOurImpactPageSlider4 == 7){
        currentImageNumberOurImpactPageSlider4 = 1;
    }

    if (currentImageNumberOurImpactPageSlider4 == 1){
        OurImpactPageSlider4.src = "Pictures/OurImpactPageSection5ImageSliderPicture1.webp";
    } else if (currentImageNumberOurImpactPageSlider4 == 2){
        OurImpactPageSlider4.src = "Pictures/OurImpactPageSection5ImageSliderPicture2.webp";
    } else if (currentImageNumberOurImpactPageSlider4 == 3){
        OurImpactPageSlider4.src = "Pictures/OurImpactPageSection5ImageSliderPicture3.webp";
    } else if (currentImageNumberOurImpactPageSlider4 == 4){
        OurImpactPageSlider4.src = "Pictures/OurImpactPageSection5ImageSliderPicture4.webp";
    } else if (currentImageNumberOurImpactPageSlider4 == 5){
        OurImpactPageSlider4.src = "Pictures/OurImpactPageSection5ImageSliderPicture5.webp";
    } else if (currentImageNumberOurImpactPageSlider4 == 6){
        OurImpactPageSlider4.src = "Pictures/OurImpactPageSection5ImageSliderPicture6.webp";
    }
}

HomePage = document.getElementById("HomePage")
OurImpactPage = document.getElementById("OurImpactPage")
DonationPage = document.getElementById("DonationPage")
JoinUsPage = document.getElementById("JoinUsPage")
ContactUsPage = document.getElementById("ContactUsPage")
AboutPage = document.getElementById("AboutPage")

DonationPage.style = "display: none;"
OurImpactPage.style = "display: none;"
JoinUsPage.style = "display: none;"
ContactUsPage.style = "display: none;"
AboutPage.style = "display: none;"

function navigateTo(page){
    if (page=="ourImpact"){
        HomePage.style = "display: none;"
        OurImpactPage.style = "display: flex;"
        DonationPage.style = "display: none;"
        JoinUsPage.style = "display: none;"
        ContactUsPage.style = "display: none;"
        AboutPage.style = "display: none;"
        closeNavigationSideBar()
    }
    if (page=="home"){
        OurImpactPage.style = "display: none;"
        HomePage.style = "display: flex;"
        DonationPage.style = "display: none;"
        JoinUsPage.style = "display: none;"
        ContactUsPage.style = "display: none;"
        AboutPage.style = "display: none;"
        closeNavigationSideBar()
    }
    if (page=="donation"){
        OurImpactPage.style = "display: none;"
        HomePage.style = "display: none;"
        DonationPage.style = "display: flex;"
        JoinUsPage.style = "display: none;"
        ContactUsPage.style = "display: none;"
        AboutPage.style = "display: none;"
        closeNavigationSideBar()
    }
    if (page=="joinUs"){
        OurImpactPage.style = "display: none;"
        HomePage.style = "display: none;"
        DonationPage.style = "display: none;"
        JoinUsPage.style = "display: flex;"
        ContactUsPage.style = "display: none;"
        AboutPage.style = "display: none;"
        closeNavigationSideBar()
    }
    if (page=="contactUs"){
        OurImpactPage.style = "display: none;"
        HomePage.style = "display: none;"
        DonationPage.style = "display: none;"
        JoinUsPage.style = "display: none;"
        ContactUsPage.style = "display: flex;"
        AboutPage.style = "display: none;"
        closeNavigationSideBar()
    }
    if (page=="about"){
        OurImpactPage.style = "display: none;"
        HomePage.style = "display: none;"
        DonationPage.style = "display: none;"
        JoinUsPage.style = "display: none;"
        ContactUsPage.style = "display: none;"
        AboutPage.style = "display: flex;"
        closeNavigationSideBar()
    }
}

function OpenGoFundMeLink() {
    window.open("https://www.gofundme.com/f/epistem-learning-helping-kids-love-stem?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source=customer");
}

function OpenApplicationLink() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSes9M5TfsNR7Wa0n4BM9N-zfUHUSrMDJzAqeNt8wIIZA8FKGA/viewform");
}

function OpenInstagramLink() {
    window.open("https://www.instagram.com/epistem_learning/");
}