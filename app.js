console.log('Working');

const grid = [
  [1,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,1,1,1,1,1,0],
  [0,0,0,0,0,0,1,0,0,0],
  [0,0,0,1,0,0,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];

$(()=>{

  $('#map').on('click', 'div', function(e){
    // $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);
    // $(this).addClass('clicked');
    e.target.classList.toggle('clicked');
    console.log(e);
  });

  $.each(grid, (i, row) => {
    $.each(row, (j, cell) => {
      const $element = $('<div />');
      if(cell === 0) {
        $element.addClass('blank');
      } else if (cell === 1) {
        $element.addClass('path');
      }

      $element.data({x: i, y: j});

      $element.on('click'), function(){
        console.log($(this));
      };
      $element.appendTo('#map');
    });
  });
});
