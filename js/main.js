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
'<h3 style="font-weight: 500;"><a href="https://github.com/Klubuntu/EasyCookieJS">EasyCookieJS</a></h3>\
<h3 style="font-weight: 500;"><a href="https://code.jquery.com/jquery-3.6.0.min.js">jQuery 3.6.0</a></h3>\
<h3 style="font-weight: 500;"><a href="https://animate.style/">AnimateCSS</a></h3>\
<h3 style="font-weight: 500;"><a href="https://use.fontawesome.com/releases/v5.15.4/fontawesome-free-5.15.4-web.zip">Font Awesome 5.15</a></h3>\
<h3 style="font-weight: 500;"><a href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap">Fonts Google: Comfortaa</h3>'

// Functions

const gt = "bit.ly/rklbgit1";
const yt = "bit.ly/rklbyt1";
const fb = "bit.ly/rklbfb1";
const pt = "bit.ly/rklbpt1";
const dc = "bit.ly/rklbdc1";
const pic = "kb-gallery.vercel.app";

function view(url) {
    window.location.href = "https://" + url;
}

function genmodal(arrowBack, headerTitle, modalCode) {
    if (arrowBack) {
        $(".modal-header-title").attr("onclick", "Menu()")
        $(".back-action").fadeIn(0);
        $(".menu").fadeOut(0);
        $(".other").fadeIn(0);
    } else {
        $(".modal-header-title").removeAttr("onclick")
        $(".back-action").fadeOut(0);
        $(".menu").fadeIn(0);
        $(".other").fadeOut(0);
    }
    $(".modal-header-title").text(headerTitle);
    $("#other").html(modalCode);
}

function Privacy() {
    genmodal(true, "Privacy Policy", privacyPolicy);
}

function Frameworks() {
    genmodal(true, "Frameworks", frameworksModal);
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
    overlay.className = "modal-overlay";
    document.body.appendChild(overlay);
};

function openAbout(){
    openModal()
}

const closeAbout = (modal) => {
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

function reportBug() {
    open("github.com/Klubuntu/EasyCookieJS");
}

let eThemeswitch = 0;
let eIconsswitch = 0;


function backIcons() {
    window.location.reload();
}

setTimeout(function() {
    $(".elements").removeClass('loading');
    $(".elements").fadeIn();
    $(".footer").removeClass('loading');
    $(".footer").fadeIn(650);
}, 1350);

setTimeout(function() {
    $(".logo").fadeOut(380);
    $(".logo").fadeIn(650);
}, 950);

function loadPage() {
    $(document).ready(function() {
        $(".end-loading").fadeOut();
    })
}
