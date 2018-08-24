$('document').ready(function () {
    M.AutoInit();
    $('.carousel').carousel({
        numVisible: 6,
    });
    $('.sidenav').sidenav();
    $('select').formSelect();
    let carListBuilder = function (element, array) {
        element.empty();
        for (let i = 0; i < array.length; i++) {
            element.append(
                '<div class="card">' +
                '   <div class="card-image">' +
                '       <img src="'+array[i].image+'">' +
                '   </div>' +
                '   <div class="card-content">' +
                '       <p>'+array[i]["header1"]+'</p>' +
                '       <h5><strong>'+array[i].price+'</strong></h5>' +
                '   </div>' +
                '   <div class="card-action">' +
                '       <a class="waves-effect waves-light btn-small" href="/car/'+array[i]._id+'">View Car</a>' +
                '   </div>' +
                '</div>'
            )
        }
    };
    $.get({
        url: 'https://carkiosk-demo.appspot.com/api/cars'
    })
        .done(function (data) {
            // data = JSON.parse(data);
            carListBuilder($('#car-grid'),data)
        });

    document.getElementById('car-filter')
        .addEventListener('submit', function(e){
            e.preventDefault();
            let filter = {
                "minPrice": $('#price_min').val(),
                "maxPrice": $('#price_max').val(),
                "year": $('#year-select').val(),
                "fuel": $('#fuel-select').val()
            };
            console.log(filter);
            $.post(
                "https://carkiosk-demo.appspot.com/api/cars/filter",
                filter,
                function(data) {
                    carListBuilder($('#car-grid'),data)
                }
            )

        })
});