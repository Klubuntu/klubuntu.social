// Variables
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

function Frameworks() {
    genmodal(true, "Frameworks", frameworksModal);
}

function Menu(){
    genmodal(false, "About Page");
}

const openAbout = (modal) => {
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
