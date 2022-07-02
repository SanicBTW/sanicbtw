var elements = new ElementsHandler();
var styles = new StylesHandler();

styles.setBodyStyle("font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;");

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
elements.setClass("first", "outer");

elements.addHeader("Page is currently being updated", "h1", "centerHeader");
elements.addParagraph(["Please wait until next commit on GitHub", "or until the page is finished updating (lol)", "ETA: 1 Day"], "info");

styles.setStyle("centerHeader", "text-align: center;");
styles.setStyle(["info1", "info2", "info3"], "text-align: left;");

elements.appendTo("mainDiv", "first");
elements.appendTo(["centerHeader", "info1", "info2", "info3"], "mainDiv");

elements.onKeydown(function(key) {
    if(key.key == "b")
    {
        styles.setBodyStyle("color: white; background-color: black;");
    }
    if(key.key == "w")
    {
        styles.setBodyStyle("color: black; background-color: white;");
    }
});