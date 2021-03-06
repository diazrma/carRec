'use strict'

const loading = document.getElementById('loading');

window.addEventListener('load', function () {

    document.querySelector('input[type="file"]').addEventListener('change', function () {
        loading.style.display = 'block';
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);
            }

            img.src = URL.createObjectURL(this.files[0]);
            tensorFlowRun();
        }
    });
});