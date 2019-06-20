/*
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    el: "body",

}).$mount('#app')
*/

function calculate() {
    var a = parseInt(document.getElementById("num1").value, 10);
    var b = parseInt(document.getElementById("num2").value, 10);
    var ops = document.getElementsByName("act");
    var operation = -1;

    document.getElementById("answer").style.color = document.getElementsByName("textstyle")[0].checked ? "#d00000" : "#000000";
    document.getElementById("answer").style.textDecoration = document.getElementsByName("textstyle")[1].checked ? "underline" : "none";

    for (var i = 0; i < ops.length; i++) {
        if (ops[i].checked) {
            operation = i;
        }
    }

    switch (operation) {
        case 0: {
            document.getElementById("answer").innerHTML = a + b;
            break;
        }
        case 1: {
            document.getElementById("answer").innerHTML = a - b;
            break;
        }
        case 2: {
            document.getElementById("answer").innerHTML = a * b;
            break;
        }
        case 3: {
            document.getElementById("answer").innerHTML = a / b;
            break;
        }
    }

}

calculate();