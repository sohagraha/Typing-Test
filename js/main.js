var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];


function sentence() {
    var rand1 = Math.floor(Math.random() * 10);
    var rand2 = Math.floor(Math.random() * 10);
    var rand3 = Math.floor(Math.random() * 10);
    var rand4 = Math.floor(Math.random() * 10);
    var rand5 = Math.floor(Math.random() * 10);
    var rand6 = Math.floor(Math.random() * 10);

    var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

    document.getElementById('sentence').innerHTML = content;
    document.getElementById("submit").innerText = "Start"
    document.getElementById("message").innerText = "";
    document.getElementById("textBox").disabled = true;
};
sentence();

let startTime, endTime;


document.getElementById("submit").addEventListener("click", function () {

    if (this.innerText == 'Start') {
        sentence();
        document.getElementById("textBox").disabled = false;
        this.innerText = "Submit"
    }
    else {

        let sentenceTxt = document.getElementById("sentence").innerText;
        let textBoxTxt = document.getElementById("textBox").value;

        compare(sentenceTxt, textBoxTxt);

        document.getElementById("textBox").value = "";

    }

})

const compare = (txt1, txt2) => {
    let word1 = txt1.split(" ");
    let word2 = txt2.split(" ");
    let count = 0;

    console.log(word2);

    word2.forEach((item, index) => {
        if (item == word1[index]) {
            count++;
        }
    });
    let errWord = word1.length - count;
    let flashMsg = `Total correct word is : ${count} and you missed ${errWord} word`
    document.getElementById("message").innerText = flashMsg
    document.getElementById('submit').innerText = "Start";
    document.getElementById("textBox").disabled = true;
}






