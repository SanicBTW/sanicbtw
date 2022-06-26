var elements = new ElementsHandler();
var styles = new StylesHandler();

styles.setBodyStyle("background-color: black");

if(platform == "Desktop")
{
    styles.setClassStyle("outer", `width: 100%; height: 98vh; display: flex; justify-content: center; align-items: center;`);
}
else
{
    styles.setClassStyle("outer", `width: 100%; height: 90vh; display: flex; justify-content: center; align-items: center; `);
}

elements.addDiv("first");
elements.addDiv("mainDiv");
elements.setClass("first", "outer");

elements.appendTo("mainDiv", "first");

elements.addVideo("../videos/funnyEasterEgg.mp4", '100vh', false, true, "video", function() {
    window.history.back();
});

elements.appendTo("video", "mainDiv");