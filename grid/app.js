

const gridOver = [
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0]
];

const gridUnder = [
  [0,0,0,0,0,1,0,0,0,0,0],
  [0,1,0,0,0,1,0,0,0,1,0],
  [0,0,1,0,1,1,1,0,1,0,0],
  [0,0,0,1,0,0,0,1,0,0,0],
  [0,0,1,0,0,0,0,0,1,0,0],
  [1,1,1,0,0,0,0,0,1,1,1],
  [0,0,1,0,0,0,0,0,1,0,0],
  [0,0,0,1,0,0,0,1,0,0,0],
  [0,0,1,0,1,1,1,0,1,0,0],
  [0,1,0,0,0,1,0,0,0,1,0],
  [0,0,0,0,0,1,0,0,0,0,0]
  ];

$(()=>{

  $('#map').on('mouseover','div',function(){
    $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);
  });


  $.each(gridOver, (i, row) =>{
    $.each(row, (j, cell) => {
      const myNewDiv = $('<div>');
      // make me switch
      if(cell === 0){
        myNewDiv.addClass('over_blank');
      } else if (cell === 1) {
        myNewDiv.addClass('over_sucess');
      } else if (cell === 2){
        myNewDiv.addClass('over_fail');
      }



      const myDataObject = {x: i, y: j};
      myNewDiv.data(myDataObject); // set the data on myNewDiv
      myNewDiv.appendTo('#over-grid');





      myNewDiv.on('click', function(){
        const clickedX = $(this).data('x');
        const clickedY = $(this).data('y');



        console.log(clickedX, clickedY);



        // make me switch
        if(gridUnder[clickedX][clickedY] === 1) {
          console.log('hit!');
          myNewDiv.addClass('over_success')

          // myNewDiv.toggleClass('over_success');
          // myNewDiv.change('over_success');
          gridUnder[clickedX][clickedY] = 0;
          console.log(gridUnder[clickedX])
          }

          else if (gridUnder[clickedX][clickedY] === 0) console.log('miss!');
          // myNewDiv.toggleClass('over_fail');

        // else if (gridUnder[clickedX][clickedY] === 2) console.log('item');
      });
    });
  });

  // $('#map').on('click', 'div', function(e){
  //   // $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);
  //   // $(this).addClass('clicked');
  //   e.target.classList.toggle('clicked');
  //   console.log(e);
  // });

// const x = 1;
//
// if (x === 0) {}
// else if (x === 1) {}
// else if (x === 2) {}
//
// switch(x){
//   case 0:
//     doSomething();
//     break;
//   case 1:
//     sdfs;
//     break;
//   case 2:
//
// }

  $.each(gridUnder, (i, row) =>{
    $.each(row, (j, cell) =>{
      const $elementUnder = $('<div>');
      if(cell === 0){
        $elementUnder.addClass('under_blank');
      } else if(cell === 1){
        $elementUnder.addClass('under_shape');
      } else if (cell === 2){
        $elementUnder.addClass('under_extra');
      }

      $elementUnder.data({x: i, y: j});

      $elementUnder.on('click', function(){
        console.log($(this).data());
      });


      $elementUnder.appendTo('#under-grid');

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
