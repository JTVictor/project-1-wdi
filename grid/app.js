const gridOver = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];

const gridUnder = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,1,0,0,0],
  [0,0,0,0,0,0,1,1,0,0],
  [0,0,0,0,0,0,1,0,1,0],
  [0,0,0,0,0,0,1,0,1,0],
  [0,1,0,0,1,1,0,0,1,0],
  [0,1,1,1,0,0,0,1,0,0],
  [0,0,1,0,0,0,1,0,0,0],
  [0,0,0,1,1,1,0,0,0,0]
];

$(()=>{

  $('#map').on('mouseover','div',function(){
    // $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);
    $('#cell-address').val($(this).data('x')); // this is the div we moused over
  });

  $.each(gridOver, (i, row) =>{
    $.each(row, (j, cell) =>{
      const myNewDiv = $('<div>');
      if(cell === 0){
        myNewDiv.addClass('blank');
      } else if(cell === 1){
        myNewDiv.addClass('path');
      } else if (cell === 2){
        myNewDiv.addClass('shape');
      }

      const myDataObject = {x: i, y: j};
      myNewDiv.data(myDataObject); // set the data on myNewDiv

      myNewDiv.on('click', function(){
        const clickedX = $(this).data('x');
        const clickedY = $(this).data('y');
        if(gridUnder[clickedX][clickedY] === 1) {console.log('hit!');
      } else if (gridUnder[clickedX][clickedY] === 0) {console.log('miss!');
        };

      });
      myNewDiv.appendTo('#map');
    });
  });



  $.each(gridUnder, (i, row) =>{
    $.each(row, (j, cell) =>{
      const $elementUnder = $('<div>');
      if(cell === 0){
        $elementUnder.addClass('blank');
      } else if(cell === 1){
        $elementUnder.addClass('path');
      } else if (cell === 2){
        $elementUnder.addClass('shape');
      }

      $elementUnder.data({x: i, y: j});

      $elementUnder.on('click', function(){
        console.log($(this).data());
      });






      $elementUnder.appendTo('#map');
    });

  });


// if ($elementOver = $elementUnder) {
// console.log('Match')};
//
//
//








});




























//
// ////////////////////////////////////////////////////
//
// const grid = [
//   [1,1,1,1,1,1,1,1,1,1],
//   [1,0,0,0,0,0,0,0,0,1],
//   [1,0,0,0,0,0,0,0,0,1],
//   [1,0,0,0,0,0,0,0,0,1],
//   [1,0,0,0,0,0,0,0,0,1],
//   [1,0,0,0,0,0,0,0,0,1],
//   [1,0,0,0,0,0,0,0,0,1],
//   [1,0,0,0,0,0,0,0,0,1],
//   [1,0,0,0,0,0,0,0,0,1],
//   [1,1,1,1,1,1,1,1,1,1]
// ];
//
// $(()=>{
//
//   $('#map').on('click','div',function(){
//     $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);
//     console.log(this);
//     this.addClass('highlighted');
//   });
//
//   $.each(grid, (i, row) =>{
//     $.each(row, (j, cell) =>{
//       const $element = $('<div />');
//       if(cell === 0) {
//         $element.addClass('blank');
//       } else if(cell === 1){
//         $element.addClass('path');
//       }
//
//       $element.data({x: i, y: j});
//
//       $element.on('click', function(){
//         console.log($(this).data());
//         // $element
//       });
//       $element.appendTo('#map');
//     });
//   });
// });
