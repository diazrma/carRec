'use strict'

const img = document.getElementById('img');
const info = document.getElementById('info');

const tensorFlowRun = () => {
    mobilenet.load().then(model => {
        model.classify(img).then(predictions => {
            info.innerHTML = '';
            loading.style.display = 'none';
            predictions.forEach((value)=>{
         
            info.innerHTML +=  `<p><b>Classificação:</b> ${value.className}</p>   <p><b>Probabilidade: ${value.probability}</b></p><hr>`;
        });
        });
    });
}
