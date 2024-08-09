// Variables
const privacyPolicy = 
"<p>This Privacy Policy document contains types of information that is collected and recorded by Social Page and how we use it.</p>\
<h2>Consent</h2>\
<p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>\
<h2>Information we collect</h2>\
<p>Cookies</p>\
<h2>How we use your information</h2>\
<p>We use the information we collect in various ways, including to:</p>\
<ul>\
<li>Provide, operate, and maintain our website</li>\
<li>Improve and expand our website</li>\
<li>Understand and analyze how you use our website</li>\
<li>Develop new products, services, features, and functionality</li>\
</ul>\
<h2>Log Files</h2>\
<p>The Site may collect the browser useragent and the users IP address</p>\
<h2>Cookies and Web Beacons</h2>\
<p>Like any other website, Social Page uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>\
<h2>Third Party Privacy Policies</h2>\
<p>EasyCookieJS</p>\
<p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>\
<h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>\
<p>Under the CCPA, among other rights, California consumers have the right to:</p>\
<p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>\
<p>Request that a business delete any personal data about the consumer that a business has collected.</p>\
<p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>\
<p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>\
<h2>GDPR Data Protection Rights</h2>\
<p>No sensitive data is collected</p>";

const frameworksModal = 
'<h3 style="font-weight: 500;">EasyCookieJS</h3>\
<h3 style="font-weight: 500;">jQuery 3.6.0</h3>\
<h3 style="font-weight: 500;">AnimateCSS</h3>\
<h3 style="font-weight: 500;">Font Awesome 5.15</h3>\
<h3 style="font-weight: 500;">Fonts Google: Comfortaa</h3>'

const linksModal = 
'<h3 style="font-weight: 500;">EasyCookieJS: <a href="https://github.com/Klubuntu/EasyCookieJS">Check</a></h3>\
<h3 style="font-weight: 500;">jQuery 3.6.0: <a href="https://code.jquery.com/jquery-3.6.0.min.js">Check</a></h3>\
<h3 style="font-weight: 500;">AnimateCSS: <a href="https://animate.style/">Check</a></h3>\
<h3 style="font-weight: 500;">Font Awesome 5.15: <a href="https://use.fontawesome.com/releases/v5.15.4/fontawesome-free-5.15.4-web.zip">Check</a></h3>\
<h3 style="font-weight: 500;">Comfortaa: <a href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap">Check</a></h3>'




// Functions

const l1 = "bit.ly/rklbgit1";
const l2 = "bit.ly/rklbyt1";
const l3 = "bit.ly/rklbfb1";
const l4 = "bit.ly/rklbpt1";
const l5 = "bit.ly/rklbdc1";

function view(url) {
    window.location.href = "https://" + url;
}

function genmodal(arrowBack, headerTitle, modalCode) {
    if (arrowBack) {
        $("#modal-header-title").attr("onclick", "Menu()")
        $("#back-action").fadeIn(0);
        $("#menu").fadeOut(0);
        $("#other").fadeIn(0);
    } else {
        $("#modal-header-title").removeAttr("onclick")
        $("#back-action").fadeOut(0);
        $("#menu").fadeIn(0);
        $("#other").fadeOut(0);
    }
    $("#modal-header-title").text(headerTitle);
    $("#other").html(modalCode);
}

function Privacy() {
    genmodal(true, "Privacy Policy", privacyPolicy);
}

function Frameworks() {
    genmodal(true, "Frameworks", frameworksModal);
}

function Links() {
    genmodal(true, "Links", linksModal);
}

function Menu(){
    genmodal(false, "About Page");
}

const openModal = (modal) => {
    modal = document.getElementById("page-modal");
    document.body.style.overflow = "hidden";
    $(modal).fadeOut(0);
    modal.setAttribute("open", "true");
    document.addEventListener("keydown", escClose);
    let overlay = document.createElement("div");
    overlay.id = "modal-overlay";
    document.body.appendChild(overlay);
};

const closeModal = (modal) => {
    modal = document.getElementById("page-modal");
    document.body.style.overflow = "auto";
    modal.removeAttribute("open");
    document.removeEventListener("keydown", escClose);
    document.body.removeChild(document.getElementById("modal-overlay"));
};

const escClose = (e) => {
    if (e.keyCode == 27) {
        closeModal();
    }
};
let i = 0;

function updateprogress() {
    if (i == 3) {
        $("#end-loaing").fadeIn();
    }
    setTimeout(function() { $("progressv").html("<f>.</f>.."); }, 400);
    setTimeout(function() { $("progressv").html(".<f>.</f>."); }, 800);
    setTimeout(function() { $("progressv").html("..<f>.</f>"); }, 1200);
    setTimeout(function() { $("progressv").html(".<f>.</f>."); }, 1600);
    setTimeout(function() { updateprogress() }, 1600);
    i = i + 1;
}
updateprogress();

function refresh() {
    location.reload();
}

function reportBug() {
    open("github.com/Klubuntu/EasyCookieJS");
}

let eThemeswitch = 0;
let eIconsswitch = 0;


function backIcons() {
    refresh();
}

function about() {
    openModal();
}


function darkmode() {
    $("#dark-css").attr("href", "dark-style.css")
    EasyCookie.edit("theme", "dark");
}

function lightmode() {
    $("#dark-css").attr("href", "")
    EasyCookie.edit("theme", "light");
}
// First Run or Check Theme
setTimeout(function() {
    x = EasyCookie.get("theme");
    if (x == "") {
        EasyCookie.add("theme", "light");
    } else {
        theme = EasyCookie.get("theme");
        if (theme == 'light') {
            lightmode();
        } else if (theme == 'dark') {
            darkmode();
        }
    }
}, 0);


setTimeout(function() {
    $(".span-elements").fadeIn();
    $(".footer").fadeIn(650);
}, 1350);

setTimeout(function() {
    $("#logo").fadeOut(380);
    $("#logo").fadeIn(650);
}, 950);

function loadPage() {
    $(document).ready(function() {
        $("#end-loading").fadeOut();
    })
}
