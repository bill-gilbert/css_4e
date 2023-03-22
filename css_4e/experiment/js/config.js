const config = {
    minYear: function () {
        return 1753;
    },
    maxYear: function () {
        return new Date().getFullYear()
    },
};

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('minYear').innerHTML = config.minYear();
    document.getElementById('maxYear').innerHTML = config.maxYear();
});
