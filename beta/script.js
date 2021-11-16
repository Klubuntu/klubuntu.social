// Variables
const example = "<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien vel felis luctus dictum iaculis a orci.</h3><h3> Proin accumsan, ligula vel ultricies varius, risus mi rhoncus sem, eget consequat velit enim vel nunc. In id augue vulputate, viverra ipsum non, facilisis lorem.</h3> <h3>Nam at neque sit amet erat scelerisque sagittis. Fusce semper faucibus nisi, sit amet viverra tellus vulputate a.</h3> <h3>Vivamus orci lorem, dignissim nec viverra vel, vulputate in leo. Vestibulum ut felis id quam cursus egestas. Integer aliquet scelerisque dictum.</h3> <h3>Integer et vulputate urna. Ut risus justo, mattis eu dapibus quis, vehicula non lorem. Duis eleifend est id lorem ultricies, quis consectetur quam posuere. Cras iaculis efficitur sollicitudin.</h3> <h3>Nam efficitur maximus efficitur. Sed dictum, sem in pulvinar auctor, nulla urna placerat lorem, ut egestas dolor enim quis dui.Aenean congue metus non varius consequat.</h3> <h3>Cras mollis est vitae neque iaculis interdum.Mauris dictum quam in mauris cursus, vel rutrum libero lobortis.Nam convallis nunc a diam mollis congue.</h3>";

// Functions

function open(url) {
    window.location.href = "https://" + url;
}

function opengt() {
    open("bit.ly/rklbgit1");
}

function openyt() {
    open("bit.ly/rklbyt1");
}

function openfb() {
    open("bit.ly/rklbfb1");
}

function openpt() {
    open("bit.ly/rklbpt1");
}



function genmodal(modal, arrowBack, headerTitle, BodyCode, borderBody) {
    if (arrowBack == true) {
        $("#back-action").fadeIn(0);
    } else {
        $("#back-action").fadeOut(0);
    }
    $("#modal-header-title").text(headerTitle);
    $("#other-info").html(BodyCode);
    h = $(".modal").height();
    w = $(".modal").width();
    console.log("H: ", h, " W: ", w)
}

function example_load() {
    genmodal("default", true, "Example", example, "");
}



const openModal = (modal) => {
    modal = document.getElementById("demo-modal");
    document.body.style.overflow = "hidden";
    $(modal).fadeOut(0);
    //$(modal).fadeIn(550);
    modal.setAttribute("open", "true");
    document.addEventListener("keydown", escClose);
    let overlay = document.createElement("div");
    overlay.id = "modal-overlay";
    document.body.appendChild(overlay);
};

const closeModal = (modal) => {
    modal = document.getElementById("demo-modal");
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
        //$("#start-loading").fadeOut();
        $("#end-loaing").fadeIn();
    }
    setTimeout(function() { $("progressv").html("<f>.</f>.."); }, 400);
    setTimeout(function() { $("progressv").html(".<f>.</f>."); }, 800);
    setTimeout(function() { $("progressv").html("..<f>.</f>"); }, 1200);
    setTimeout(function() { $("progressv").html(".<f>.</f>."); }, 1600);
    setTimeout(function() { updateprogress() }, 1600);
    i = i + 1;


    console.log(i);

}
updateprogress();

function refresh() {
    location.reload();
}

function reportBug() {
    open("github.com/Klubuntu/EasyCookie-JS");
}

//infoPagestr = "<h2 class='container-title'>Options</h2><option>Dark Mode</option><switch id='switchTheme'><div class='checkboxbg' id='switchthemebg'><div class='switch' id='switchtheme'></div></div></switch><option>No Icons</option><switch id='switchIcons'><div class='checkboxbg' id='switchiconsbg'><div class='switch' id='switchicons'></div></div></switch>";
infoPagestr = `<h2 class="container-title">Options</h2><option>Dark Mode</option><switch id="switchTheme"><div class="checkboxbg" id="switchthemebg"><div class="switch" id="switchtheme"></div></div></switch><option>No Icons</option><switch id="switchIcons"><div class="checkboxbg" id="switchiconsbg"><div class="switch" id="switchicons"></div></div></switch><option style="position: relative;top: 10px;">Report</option><switch id="reportBug"><div class="checkboxbg" id="switchiconsbg"><div class="switch" style="width: 4vw; cursor: pointer;" id="switchicons"><p style="position: relative;top: 5px;" onclick="reportBug()" >Bug</p></div></div></switch>`;
infoPrivacystr = "<h2 class='container-title'>Privacy</h2><h4>This page using Cookies to work</br> all saves switcher function</h4><h4>User cookies no use to ads,</br> optimize page and fix bugs.</h4>";
infoIconsstr = "<h2 class='container-title'>Icons</h2><h4>Soon</h4><h4>Font Awesome 5.12</h4><h2 class='container-title'>Scripts</h2><h4>EasyCookie</h4><h5><a href='https://github.com/Klubuntu/EasyCookie-JS'>https://github.com/Klubuntu/EasyCookie-JS</a></h5><h4 style='position:relative;top: -13px;'>Jquery 3.6.1</h4>";
infoAboutstr = "<h2 class='container-title'>About</h2><h4>Soon</h4><h5>&copy; Klubuntu (2020-2021)</h5>";
let eThemeswitch = 0;
let eIconsswitch = 0;
backCSS = "<link id='default-style' rel='stylesheet' href='style.css' />";
darkCSS = "<link id='dark-style' rel='stylesheet' href='dark-style.css' />";

function infoPage() {
    $("container").html(infoPagestr);
    $("#title-modal").text("Page");
    loadPage()
}

function infoPrivacy() {
    $("container").html(infoPrivacystr);
    $("#title-modal").text("Privacy");
}

function infoIcons() {
    $("container").html(infoIconsstr);
    $("#title-modal").text("Addons");
}

function infoAbout() {

    $("container").html(infoAboutstr);
    $("#title-modal").text("About");
}

function about() {
    openModal();
    $("#about-info").fadeIn(450);
    infoPage()
}

function abouthide() {
    $("#about-info").fadeOut(450);
}



function removeIcons() {
    $("svg").remove();
}

function backIcons() {
    refresh();
}


function darkmode() {
    $("head").append(darkCSS);
    $("#default-style").remove();
    easycookie("edit", "theme", "dark");
    //refresh();
}

function lightmode() {
    $("head").append(backCSS);
    $("#dark-style").remove();
    easycookie("edit", "theme", "light");
    //refresh();
}
// First Run or Check Theme
setTimeout(function() {
    x = easycookie("get", "theme");
    if (x == "") {
        //alert("First Welcome User on Page")
        easycookie("add", "theme", "light");
    } else {
        //alert("Next Welcome User on Page")
        theme = easycookie("get", "theme");
        if (theme == 'light') {
            lightmode();
        } else if (theme == 'dark') {
            darkmode();
        }
    }
}, 0);




// Get the modal


// setInterval(function() {
//     // setInterval(function() {
//     //     if ($("#span").is(":hover")) {
//     //         //window.location.href = "http://" + window.location.host + "/old"
//     //         //$('#link').get(0).click();
//     //         console.log("t1: complete");
//     //     }
//     // }, 2000);
//     // ("#span").hover(function() {
//     //         $("#span").show();
//     //     },
//     //     function() {
//     //         $("#span").hide();
//     //     });

// }, 200);
setTimeout(function() {
    $(".span-elements").fadeIn();
    $(".footer").fadeIn(650);
    setInterval(function() {
        if ($("#span").is(":hover")) {
            //window.location.href = "http://" + window.location.host + "/old"
            //$('#link').get(0).click();
            console.log("t1: complete");
        }
    }, 2000);

}, 1350);

setTimeout(function() {
    $("#logo").fadeOut(380);
    $("#logo").fadeIn(650);
}, 950);

// setInterval(function() {
//     $("switch").click(function() {
//         var sw = ".switch"
//         if (eswitch == 0) {
//             $(sw).removeClass("unswitched")
//             $(sw).removeClass("unswitched2")
//             $(sw).addClass("switched")
//             setTimeout(function() {
//                 $(sw).addClass("switched2");
//             }, 560);
//             eswitch = 1
//         } else if (eswitch == 1) {
//             $(sw).removeClass("switched")
//             $(sw).removeClass("switched2")
//             $(sw).addClass("unswitched")
//             setTimeout(function() {
//                 $(sw).addClass("unswitched2");
//             }, 560);
//             eswitch = 0
//         }

//     })
// }, 100);
function loadPage() {
    $(document).ready(function() {
        $("#model-inner").on('resize', function() {
            console.log("e");
        });
        $("#end-loading").fadeOut();
        $("#switchTheme").click(function() {
            var sw = "#switchtheme";
            var swb = "#switchthemebg";
            $(swb).toggleClass("checked")
            if (eThemeswitch == 0) {
                $(sw).addClass("switched2")
                $(sw).attr("style", "background-color: white;");
                darkmode();

                eThemeswitch = 1
            } else if (eThemeswitch == 1) {
                $(sw).removeClass("switched2")
                $(sw).addClass("unswitched2")
                $(sw).attr("style", "background-color: rgb(163, 15, 15);")
                lightmode();
                setTimeout(function() {
                    $(sw).removeClass("unswitched2")

                }, 620);

                eThemeswitch = 0
            }
        })
        $("#switchIcons").click(function() {
            var sw = "#switchicons";
            var swb = "#switchiconsbg";
            $(swb).toggleClass("checked")
            if (eIconsswitch == 0) {
                $(sw).addClass("switched2")
                $(sw).attr("style", "background-color: white;");
                removeIcons();
                eIconsswitch = 1
            } else if (eIconsswitch == 1) {
                $(sw).removeClass("switched2")
                $(sw).addClass("unswitched2")
                $(sw).attr("style", "background-color: rgb(163, 15, 15);");
                setTimeout(function() {
                    $(sw).removeClass("unswitched2")
                    backIcons()


                }, 620);
                //backIcons();
                eIconsswitch = 0
            }
        })
    })
}