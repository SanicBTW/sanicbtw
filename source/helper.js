/**
 * 
 * @param {string} index Index to get value from
 * @param {string} type The type of value that should be returned
 * @returns The desired type
 */
function getValue(index, type = 'string')
{
    var theItem = localStorage.getItem(formatString(index));
    switch(type)
    {
        case 'bool':
            return parseBool(theItem);
        case 'int':
            return parseInt(theItem);
        case 'float':
            return parseFloat(theItem);
        default:
            return theItem;
    }
}
/**
 * 
 * @param {string} index Index to save the value to
 * @param {any} value The value to save on that index
 */
function setNewValue(index, value)
{
    localStorage.setItem(formatString(index), value);
}
function removeValue(index)
{
    localStorage.removeItem(formatString(index));
}
function formatString(toFormat)
{
    return toFormat.toLowerCase().split(" ").join("-");
}
function parseBool(parse)
{
    switch(parse)
    {
        case "true":
            return true;
        case "false":
            return false;
    }
    return undefined;
}

const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
? 'Mobile'
: 'Desktop';

function openLink(link)
{
    window.open("https://" + link, "_blank").focus();
}

var saveVer = "3.0 B1";

if(getValue('aboutMePage save ver') != saveVer)
{
    localStorage.clear();
    setupConfig();
    window.location.reload();
}

if(localStorage.length <= 0){ setupConfig(); }

function setupConfig()
{
    setNewValue('aboutMePage save ver', saveVer);

    setNewValue('aboutMePage language', "eng");
}