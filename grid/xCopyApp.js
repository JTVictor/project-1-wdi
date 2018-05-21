const grid = [
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,0,1,0,0,1,0,0,0],
  [0,0,0,1,0,0,1,0,0,0],
  [0,0,0,1,0,0,1,0,0,0],
  [1,1,1,1,0,0,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1]
];

$(()=>{

  $('#map').on('mouseover','div',function(){
    $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);
  });

  $.each(grid, (i, row) =>{
    $.each(row, (j, cell) =>{
      const $element = $('<div />');
      if(cell === 0){
        $element.addClass('blank');
      }else if(cell === 1){
        $element.addClass('path');
      }

      $element.data({x: i, y: j});

      $element.on('click', function(){
        console.log($(this).data());
      });
      $element.appendTo('#map');
    });
  });
});
