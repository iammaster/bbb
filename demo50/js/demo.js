var mSpan = document.getElementById('model').getElementsByTagName('span');
var cSpan = document.getElementById('color').getElementsByTagName('span');
var rSpan = document.getElementById('rom').getElementsByTagName('span');
var vSpan = document.getElementById('verson').getElementsByTagName('span');
var aSpan = document.getElementsByTagName('span');
var oPrice = document.getElementById('price');
var oModel = document.getElementById('model');
var oRom = document.getElementById('rom');
mSpan[0].className = 'on';
cSpan[0].className = 'on';
rSpan[0].className = 'on';
vSpan[0].className = 'on';
for (var i = 0; i < aSpan.length; i++) {
    aSpan[i].onclick = function () {
        var siblings = this.parentNode.children;
        for (var j = 0; j < siblings.length; j++) {
            siblings[j].className = '';
        };
        this.className = 'on';
        if (this.parentNode == oModel || this.parentNode == oRom) {
            price();
        };
    };
};
function price() {
    var money1 = 0;
    var money2 = 0;
    for (var i = 0; i < mSpan.length; i++) {
        if (mSpan[i].className == 'on') {
            money1 = i ? 6088 : 5288;
            break;
        };
    };
    for (var i = 0; i < rSpan.length; i++) {
        if (rSpan[i].className == 'on') {
            switch (i) {
                case 0:
                    money2 = 0;
                    break;
                case 1:
                    money2 = 800;
                    break;
                case 2:
                    money2 = 1600;
                    break;
            };
        };
    };
    oPrice.innerHTML = money1+money2;
};

