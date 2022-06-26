var elements = new ElementsHandler();
var styles = new StylesHandler();

styles.setFavicon('./assets/images/favicon.jpg');

styles.setBodyStyle('background: linear-gradient(0deg, rgba(40,40,40,1) 0%, rgba(20,20,20,1) 35%, rgba(0,0,0,1) 100%);');
styles.setBodyStyle("font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: white;");

if(platform == "Desktop")
{
    styles.setClassStyle("outer", `width: 100%; height: 97.9vh; display: flex; justify-content: center; align-items: center;`);
}
else
{
    styles.setClassStyle("outer", `width: 100%; height: 90vh; display: flex; justify-content: center; align-items: center; `);
}

elements.addDiv("first");
elements.addDiv("mainDiv");
elements.addDiv("iconsDiv");
elements.setClass("first", "outer");

elements.addHeader("Sanic", "h1", "centerHeader");
elements.addParagraph("aka 'SanicBTW', 'Sanco', 'Saniczoned'", "alsoKnownAs");
elements.addParagraph("and idk what else", "lol");

elements.addImage("./assets/images/icons/github.png", "githubImage");
elements.addAnchor("https://github.com/SanicBTW/", "", "githubLink");
styles.setStyle('githubImage', "width: 50px;");

//why did i add thsi one lol
elements.addImage("./assets/images/icons/spotify.png", "spotifyImage");
elements.addAnchor("https://open.spotify.com/user/sansunder718?si=bd80fcafede34e0c/", "", "spotifyLink");

//the same with this one lmao
elements.addImage("./assets/images/icons/osu.png", "osuImage");
elements.addAnchor("https://osu.ppy.sh/users/18296030", "", "osuLink");

elements.addImage("./assets/images/icons/steam.png", "steamImage");
elements.addAnchor("https://steamcommunity.com/id/sancodezapato/", "", "steamLink");

styles.setStyle("centerHeader", "text-align: center;")
styles.setStyle(["alsoKnownAs", "lol"], "font-family: 'Courier New', Courier, monospace; text-align: left;");
styles.setStyle(['spotifyImage', "osuImage", "steamImage"], "width: 50px; margin-left: 1rem;");

elements.appendTo("mainDiv", "first");

elements.appendTo("githubImage", "githubLink");
elements.appendTo("spotifyImage", "spotifyLink");
elements.appendTo("osuImage", "osuLink");
elements.appendTo("steamImage", "steamLink");

elements.setAttribute(["githubLink", "spotifyLink", "osuLink", "steamLink"], 'target', "_blank");

elements.appendTo(["githubLink", "spotifyLink", "osuLink", "steamLink"], "iconsDiv");
elements.appendTo(["centerHeader", "alsoKnownAs", "lol", "iconsDiv"], "mainDiv");

//for the easter egg
var easterEggWord = ["f", "n", "f"];

var pressedKeys = [];

elements.onKeydown(function(key) {
    if(pressedKeys.length < 3)
    {
        pressedKeys.push(key.key);
        var check = checkVal();

        if(check == "nothing")
        {
            elements.changeText("centerHeader", "Sanic");
        }
        if(check == "second")
        {
            elements.changeText("centerHeader", "ayo?");
        }
        if(check == "last")
        {
            elements.changeText("centerHeader", "hehe you know it huh");
        }
        if(check == "everything")
        {
            window.location.assign("https://sanicbtw.github.io/FNF-PsychEngine-0.6-HTML5/");
            console.log("Success easter egg, resetting array");
            elements.changeText("centerHeader", "Redirecting...");
            pressedKeys = [];
        }
        if(check == false)
        {
            elements.changeText("centerHeader", "Sanic");
            console.log("Failed easter egg, resetting array");
            pressedKeys = [];
        }
    }
    else
    {
        elements.changeText("centerHeader", "Sanic");
        console.log("Failed easter egg, resetting array");
        pressedKeys = [];
    }
});

function checkVal()
{
    if(pressedKeys[0] == easterEggWord[0] &&
        pressedKeys[1] == easterEggWord[1] &&
        pressedKeys[2] == easterEggWord[2])
        {
            return "everything";
        }
    else if(pressedKeys[0] == easterEggWord[0] &&
        pressedKeys[1] == easterEggWord[1] &&
        pressedKeys[2] != easterEggWord[2])
        {
            return "last";
        }
    else if(pressedKeys[0] == easterEggWord[0] &&
        pressedKeys[1] != easterEggWord[1] &&
        pressedKeys[2] != easterEggWord[2])
        {
            return "second";
        }
    else if(pressedKeys[0] != easterEggWord[0] &&
        pressedKeys[1] != easterEggWord[1] &&
        pressedKeys[2] != easterEggWord[2])
        {
            return "nothing";
        }
    return false;
}