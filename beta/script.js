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

function refresh() {
    location.reload();
}

function reportBug() {
    open("github.com/Klubuntu/klubuntu.eu.org/issues");
}

//infoPagestr = "<h2 class='container-title'>Options</h2><option>Dark Mode</option><switch id='switchTheme'><div class='checkboxbg' id='switchthemebg'><div class='switch' id='switchtheme'></div></div></switch><option>No Icons</option><switch id='switchIcons'><div class='checkboxbg' id='switchiconsbg'><div class='switch' id='switchicons'></div></div></switch>";
infoPagestr = `<h2 class="container-title">Options</h2><option>Dark Mode</option><switch id="switchTheme"><div class="checkboxbg" id="switchthemebg"><div class="switch" id="switchtheme"></div></div></switch><option>No Icons</option><switch id="switchIcons"><div class="checkboxbg" id="switchiconsbg"><div class="switch" id="switchicons"></div></div></switch><option style="position: relative;top: 10px;">Report</option><switch id="reportBug"><div class="checkboxbg" id="switchiconsbg"><div class="switch" style="width: 4vw; cursor: pointer; color: white;" id="switchicons"><p style="position: relative;top: 5px;" onclick="reportBug()" >Bug</p></div></div></switch>`;
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