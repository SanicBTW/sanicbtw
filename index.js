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

elements.addImage("./assets/images/icons/discord.png", "discordImage");

elements.addImage("./assets/images/icons/instagram.png", "instagramImage");
elements.addAnchor("https://instagram.com/sancodezapato", "", "instagramLink");

styles.setStyle("centerHeader", "text-align: center;");
styles.setStyle(["alsoKnownAs", "lol"], "font-family: 'Courier New', Courier, monospace; text-align: left;");
styles.setStyle(['spotifyImage', "osuImage", "steamImage", "discordImage", "instagramImage"], "width: 50px; margin-left: 1rem;");

elements.appendTo("mainDiv", "first");

elements.appendTo("githubImage", "githubLink");
elements.appendTo("spotifyImage", "spotifyLink");
elements.appendTo("osuImage", "osuLink");
elements.appendTo("steamImage", "steamLink");
elements.appendTo("instagramImage", "instagramLink");

elements.setAttribute(["githubLink", "spotifyLink", "osuLink", "steamLink", "instagramLink"], 'target', "_blank");
elements.setAttribute("discordImage", "title", "sanco#0970");

elements.appendTo(["githubLink", "spotifyLink", "osuLink", "steamLink", "discordImage", "instagramLink"], "iconsDiv");
elements.appendTo(["centerHeader", "alsoKnownAs", "lol", "iconsDiv"], "mainDiv");

elements.onKeydown(function(key) {
    firstEasterEgg(key);
    secondEasterEgg(key);
});

//For easter egg 1
var easterEggWord1 = ["f", "n", "f"];
var pressedKeys1 = [];

function firstEasterEgg(key)
{
    if(pressedKeys1.length < 3)
    {
        pressedKeys1.push(key.key);
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
            pressedKeys1 = [];
        }
        if(check == false)
        {
            elements.changeText("centerHeader", "Sanic");
            console.log("Failed easter egg, resetting array");
            pressedKeys1 = [];
        }
    }
    else
    {
        elements.changeText("centerHeader", "Sanic");
        console.log("Failed easter egg, resetting array");
        pressedKeys1 = [];
    }
}

function checkVal()
{
    if(pressedKeys1[0] == easterEggWord1[0] &&
        pressedKeys1[1] == easterEggWord1[1] &&
        pressedKeys1[2] == easterEggWord1[2])
        {
            return "everything";
        }
    else if(pressedKeys1[0] == easterEggWord1[0] &&
        pressedKeys1[1] == easterEggWord1[1] &&
        pressedKeys1[2] != easterEggWord1[2])
        {
            return "last";
        }
    else if(pressedKeys1[0] == easterEggWord1[0] &&
        pressedKeys1[1] != easterEggWord1[1] &&
        pressedKeys1[2] != easterEggWord1[2])
        {
            return "second";
        }
    else if(pressedKeys1[0] != easterEggWord1[0] &&
        pressedKeys1[1] != easterEggWord1[1] &&
        pressedKeys1[2] != easterEggWord1[2])
        {
            return "nothing";
        }
    return false;
}

//for easter egg 2
var sameKeyPressTimes = 0;
var easterEggComb1 = {
    times: 20, key: " "
}
var pressedKeys2 = {
    times: 0, key: "none"
}

function secondEasterEgg(key)
{
    var lastKey = "";

    lastKey = pressedKeys2.key;
    pressedKeys2.key = key.key;

    if(key.key == lastKey)
    { 
        ++sameKeyPressTimes;
    }
    else
    {
        sameKeyPressTimes = 0;
    }
    pressedKeys2.times = sameKeyPressTimes;

    if(pressedKeys2.key == easterEggComb1.key && pressedKeys2.times == easterEggComb1.times - 1)
    {
        elements.changeText("centerHeader", "PLEASE DONT PRESS AGAIN");
        setTimeout(() => {
            elements.changeText("centerHeader", "Sanic");
        }, 15000);
    }

    if(pressedKeys2.key == easterEggComb1.key && pressedKeys2.times == easterEggComb1.times)
    {
        elements.changeText("centerHeader", "warned you");
        window.location.assign("./assets/easter/easterEgg.html");
    }
}