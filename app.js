// const playerTurn = true;
// const compTurn = false;

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

const gridPatterns = [
  [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0]
  ], [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,1,1,1,1,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0]
  ], [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0,1,1,0,0],
    [0,0,1,1,0,0,0,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0],
    [0,0,1,0,0,1,0,0,1,0,0],
    [0,0,1,0,0,0,0,0,1,0,0],
    [0,0,0,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0]
  ]
];


let gameCleared = false;
let level = 0;
let score = 5;

$(()=>{

  // Logs the X Y cordinates of the array
  const $map = $('#map');
  $map.on('mouseover','div',function(){
    $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);
  });

  // Iterates over the array and assigns a value. This also assigns a cell colour in CSS

  function init() {
    $.each(gridOver, (i, row) =>{
      $.each(row, (j, cell) => {
        const $myNewDiv = $('<div>');
        // make me switch
        if(cell === 0){
          $myNewDiv.addClass('over_blank');
        } else if (cell === 1) {
          $myNewDiv.addClass('over_success');
        } else if (cell === 2){
          $myNewDiv.addClass('over_fail');
        }

        // Creates a data object of the XY coordinates

        const myDataObject = {x: i, y: j};
        $myNewDiv.data(myDataObject); // set the data on myNewDiv
        $myNewDiv.appendTo('#over-grid');

        // Creates a function that identifies what cell has been clicked on

        $myNewDiv.on('click', function(){
          const clickedX = $(this).data('x');
          const clickedY = $(this).data('y');

          // Identifies what cell has been clicked on and changes it numerical value and colour
          // Can use switch on this code

          if(gridPatterns[level][clickedX][clickedY] === 1) {
            // console.log('hit!');
            $myNewDiv.addClass('over_success');
            gridPatterns[level][clickedX][clickedY] = 0;
            score = score + 1;
          } else if (gridPatterns[level][clickedX][clickedY] === 0){
            // console.log('miss!');
            $myNewDiv.addClass('over_fail');
            score = score - 1;
          }

          // Checks the win conditions on array

          function checkWin(array) {
            const rowsValidity = [];
            for (var i = 0; i < array.length; i++) {
              rowsValidity[i] = array[i].includes(1);
            }
            gameCleared = rowsValidity.includes(true) ? false : true;
            console.log(gameCleared, level);
          }
          checkWin(gridPatterns[level]);

          console.log(score);
          if (score === 0) {
            console.log('You lose');
        } else if (score > 20) {console.log('You win the game!');
        }

          // Endgame function

          function endLevel() {
            if(gameCleared) {
              console.log('You Win!');


              level++;
              score = score + 5;
              console.log(level)

              // $map.empty();
              // $myNewDiv.detach();
              // $map.detach();
              // "over-grid".detach();
              // $myNewDiv.remove();
              $("#over-grid").empty();
              init();
              createUnderGrid(level);
              gameCleared = false;
              // $myNewDiv.appendTo('#over-grid');
              // $myNewDiv.appendTo('#over-grid');


            }
          }
          endLevel();

        });
      });
    });
  }


  function createUnderGrid(level) {
    $.each(gridPatterns[level], (i, row) =>{
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
  }

  init();
  createUnderGrid(level);

});

///////////////////////////////////////

// Loop functions to check for win conditions suggested by Rob.
//
//
// function arrayIsAllZeros(arr1, arr2) {
// 	for (i = 0; i < arr1.length; i++) {
// 		if(arr1[i] !== 0) return false;
//     }
// 	return true;
// }
// /////////
//
//
// function arraysAreIdentical(arr1, arr2) {
// 	for (i = 0; i < arr1.length; i++) {
// 		if(arr1[i] !== arr2[i]) return false;
//     }
// 	return true;
// }

///////////////////////////////////////////

//// Switch example given by Rob.

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









































// console.log('Working');
//
// const grid = [
//   [1,0,0,0,0,0,1,0,0,0],
//   [0,0,0,0,0,0,1,0,0,0],
//   [0,0,0,0,1,1,1,1,1,0],
//   [0,0,0,0,0,0,1,0,0,0],
//   [0,0,0,1,0,0,1,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,1,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0]
// ];
//
// $(()=>{
//
//   $('#map').on('click', 'div', function(e){
//     // $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);
//     // $(this).addClass('clicked');
//     e.target.classList.toggle('clicked');
//     console.log(e);
//   });
//
//   $.each(grid, (i, row) => {
//     $.each(row, (j, cell) => {
//       const $element = $('<div>');
//       if(cell === 0) {
//         $element.addClass('blank');
//       } else if (cell === 1) {
//         $element.addClass('path');
//       }
//
//       $element.data({x: i, y: j});
//
//       $element.on('click'), function(){
//         console.log($(this));
//       };
//       $element.appendTo('#map');
//     });
//   });
// });


































///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////





// // const playerTurn = true;
// // const compTurn = false;
//
// const gridOver = [
//   [0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,0,0,0]
// ];
//
// const gridUnderArray = [
//   [
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0]
//   ], [
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,1,1,0,0],
//     [0,0,0,0,0,0,0,1,0,0,0],
//     [0,0,0,0,1,1,1,1,0,0,0],
//     [0,0,0,0,1,0,0,1,0,0,0],
//     [0,0,0,0,1,0,0,1,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0]
//   ], [
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,1,1,0,0,0,1,1,0,0],
//     [0,0,1,1,0,0,0,1,1,0,0],
//     [0,0,0,0,0,1,0,0,0,0,0],
//     [0,0,0,0,0,1,0,0,0,0,0],
//     [0,0,1,0,0,1,0,0,1,0,0],
//     [0,0,1,0,0,0,0,0,1,0,0],
//     [0,0,0,1,1,1,1,1,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0,0,0]
//   ]
// ];
//
// let gameCleared = false;
//
// $(()=>{
//
//   // Logs the X Y cordinates of the array
//
//   $('#map').on('mouseover','div',function(){
//     $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);
//   });
//
//   // Iterates over the array and assigns a value. This also assigns a cell colouyr in CSS
//
//   $.each(gridOver, (i, row) =>{
//     $.each(row, (j, cell) => {
//       const $myNewDiv = $('<div>');
//       // make me switch
//       if(cell === 0){
//         $myNewDiv.addClass('over_blank');
//       } else if (cell === 1) {
//         $myNewDiv.addClass('over_success');
//       } else if (cell === 2){
//         $myNewDiv.addClass('over_fail');
//       }
//
//       // Creates a data object of the XY coordinates
//
//       const myDataObject = {x: i, y: j};
//       $myNewDiv.data(myDataObject); // set the data on myNewDiv
//       $myNewDiv.appendTo('#over-grid');
//
//       // Creates a function that identifies what cell has been clicked on
//
//       $myNewDiv.on('click', function(){
//         const clickedX = $(this).data('x');
//         const clickedY = $(this).data('y');
//
//         // Identifies what cell has been clicked on and changes it numerical value and colour
//         // Can use switch on this code
//
//         if(gridUnderArray[0][clickedX][clickedY] === 1) {
//           // console.log('hit!');
//           $myNewDiv.addClass('over_success');
//           gridUnderArray[0][clickedX][clickedY] = 0;
//         } else if (gridUnderArray[0][clickedX][clickedY] === 0){
//           // console.log('miss!');
//           $myNewDiv.addClass('over_fail');
//         }
//
//         // Checks the win conditions on array
//
//         function checkWin(array) {
//           const rowsValidity = [];
//           for (var i = 0; i < array.length; i++) {
//             rowsValidity[i] = array[i].includes(1);
//           }
//           gameCleared = rowsValidity.includes(true) ? false : true;
//           console.log(gameCleared);
//         }
//         checkWin(gridUnderArray[0]);
//
//         // Endgame function
//
//         function endGame() {
//           if(gameCleared) {
//             return console.log('You Win!');
//             // gridUnderArray ++1;
//           }
//         }
//         endGame();
//
//       });
//     });
//   });
//
//   $.each(gridUnderArray[0], (i, row) =>{
//     $.each(row, (j, cell) =>{
//       const $elementUnder = $('<div>');
//       if(cell === 0){
//         $elementUnder.addClass('under_blank');
//       } else if(cell === 1){
//         $elementUnder.addClass('under_shape');
//       } else if (cell === 2){
//         $elementUnder.addClass('under_extra');
//       }
//
//       $elementUnder.data({x: i, y: j});
//
//       $elementUnder.on('click', function(){
//         console.log($(this).data());
//       });
//
//       $elementUnder.appendTo('#under-grid');
//
//     });
//   });
// });
//
// ///////////////////////////////////////
//
// // Loop functions to check for win conditions suggested by Rob.
// //
// //
// // function arrayIsAllZeros(arr1, arr2) {
// // 	for (i = 0; i < arr1.length; i++) {
// // 		if(arr1[i] !== 0) return false;
// //     }
// // 	return true;
// // }
// // /////////
// //
// //
// // function arraysAreIdentical(arr1, arr2) {
// // 	for (i = 0; i < arr1.length; i++) {
// // 		if(arr1[i] !== arr2[i]) return false;
// //     }
// // 	return true;
// // }
//
// ///////////////////////////////////////////
//
// //// Switch example given by Rob.
//
// // const x = 1;
// //
// // if (x === 0) {}
// // else if (x === 1) {}
// // else if (x === 2) {}
// //
// // switch(x){
// //   case 0:
// //     doSomething();
// //     break;
// //   case 1:
// //     sdfs;
// //     break;
// //   case 2:
// //
// // }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // console.log('Working');
// //
// // const grid = [
// //   [1,0,0,0,0,0,1,0,0,0],
// //   [0,0,0,0,0,0,1,0,0,0],
// //   [0,0,0,0,1,1,1,1,1,0],
// //   [0,0,0,0,0,0,1,0,0,0],
// //   [0,0,0,1,0,0,1,0,0,0],
// //   [0,0,0,0,0,0,0,0,0,0],
// //   [0,0,0,0,0,1,0,0,0,0],
// //   [0,0,0,0,0,0,0,0,0,0],
// //   [0,0,0,0,0,0,0,0,0,0],
// //   [0,0,0,0,0,0,0,0,0,0]
// // ];
// //
// // $(()=>{
// //
// //   $('#map').on('click', 'div', function(e){
// //     // $('#cell-address').val(`${$(this).data('x')}-${$(this).data('y')}`);
// //     // $(this).addClass('clicked');
// //     e.target.classList.toggle('clicked');
// //     console.log(e);
// //   });
// //
// //   $.each(grid, (i, row) => {
// //     $.each(row, (j, cell) => {
// //       const $element = $('<div>');
// //       if(cell === 0) {
// //         $element.addClass('blank');
// //       } else if (cell === 1) {
// //         $element.addClass('path');
// //       }
// //
// //       $element.data({x: i, y: j});
// //
// //       $element.on('click'), function(){
// //         console.log($(this));
// //       };
// //       $element.appendTo('#map');
// //     });
// //   });
// // });
