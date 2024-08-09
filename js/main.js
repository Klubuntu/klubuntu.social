// Variables
const frameworksModal = [
    {
        type: 'h3',
        props: { style: { fontWeight: 500 } },
        children: [
            {
                type: 'a',
                props: { href: 'https://github.com/Klubuntu/EasyCookieJS' },
                children: ['EasyCookieJS']
            }
        ]
    },
    {
        type: 'h3',
        props: { style: { fontWeight: 500 } },
        children: [
            {
                type: 'a',
                props: { href: 'https://code.jquery.com/jquery-3.6.0.min.js' },
                children: ['jQuery 3.6.0']
            }
        ]
    },
    {
        type: 'h3',
        props: { style: { fontWeight: 500 } },
        children: [
            {
                type: 'a',
                props: { href: 'https://animate.style/' },
                children: ['AnimateCSS']
            }
        ]
    },
    {
        type: 'h3',
        props: { style: { fontWeight: 500 } },
        children: [
            {
                type: 'a',
                props: { href: 'https://use.fontawesome.com/releases/v5.15.4/fontawesome-free-5.15.4-web.zip' },
                children: ['Font Awesome 5.15']
            }
        ]
    },
    {
        type: 'h3',
        props: { style: { fontWeight: 500 } },
        children: [
            {
                type: 'a',
                props: { href: 'https://fonts.googleapis.com/css2?family=Comfortaa&display=swap' },
                children: ['Fonts Google: Comfortaa']
            }
        ]
    }
];

const gt = "bit.ly/rklbgit1";
const yt = "bit.ly/rklbyt1";
const fb = "bit.ly/rklbfb1";
const pt = "bit.ly/rklbpt1";
const dc = "bit.ly/rklbdc1";
const pic = "kb-gallery.vercel.app";

// Functions

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
    const $other = $("#other");
    if(headerTitle == "Frameworks"){
        $other.html("");
        frameworksModal.forEach((element) => {
            const h3Element = document.createElement(element.type);
            h3Element.style.fontWeight = element.props.style.fontWeight;
          
            const aElement = document.createElement(element.children[0].type);
            aElement.href = element.children[0].props.href;
            aElement.textContent = element.children[0].children[0];
          
            h3Element.appendChild(aElement);
            $other.append(h3Element);
          });
    }
    else {
        $other.html(modalCode);
    }

}

function Frameworks() {
    genmodal(true, "Frameworks", frameworksModal);
}

function Menu() {
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

setTimeout(function () {
    $(".elements").removeClass('loading');
    $(".elements").fadeIn();
    $(".footer").removeClass('loading');
    $(".footer").fadeIn(650);
}, 1350);

setTimeout(function () {
    $(".logo").fadeOut(380);
    $(".logo").fadeIn(650);
}, 950);

function loadPage() {
    $(document).ready(function () {
        $(".end-loading").fadeOut();
    })
}
