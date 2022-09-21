//setups language stuff
class LanguageEntry
{
    constructor(elements, text)
    {
        this.elements = elements;
        this.text = text;
    }

    init()
    {
        if(Array.isArray(this.elements))
        {
            for(const element of this.elements)
            {
                document.getElementById(element).innerText = this.text;
            }
        }
        else
        {
            document.getElementById(this.elements).innerText = this.text;
        }
    }
}

var languageshit = new Map();

languageshit.set('eng', [
    new LanguageEntry(["funkySocials", "funkysSocials"], "Socials"),
    new LanguageEntry('funkyHistory', "My history"),
    new LanguageEntry('funkyGHRepo', "Github repos"),
    new LanguageEntry(['funkyLang', 'funkylLang'], "Language"),
    new LanguageEntry('langENG', 'English'),
    new LanguageEntry('langESP', 'Spanish'),
    new LanguageEntry(['wipHistory', 'wipGHrepo'], "I'm working on it, alright?")
]);

languageshit.set('esp', [
    new LanguageEntry(['funkySocials', "funkysSocials"], "Redes sociales"),
    new LanguageEntry('funkyHistory', "Mi historia"),
    new LanguageEntry('funkyGHRepo', "Repositorios de github"),
    new LanguageEntry(['funkyLang', 'funkylLang'], "Idioma"),
    new LanguageEntry('langENG', 'Ingles'),
    new LanguageEntry('langESP', 'Español'),
    new LanguageEntry(['wipHistory', 'wipGHrepo'], 'Estoy trabajando en ello, ¿vale?')
]);

for(const langEnt of languageshit.get(getValue('aboutmepage language')))
{
    langEnt.init();
}