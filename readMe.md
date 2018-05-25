# GA WDI-34 GAME PROJECT 1 - GENERIC GUESSING GAME

## Instructions
This is a 1 player game. The object is to guess the shape by selecting cells on a grid, according to the description given. The player starts with 5 points. An unsuccessful attempt at selecting a cell leads to a reduction of 1 point. The cells becomes red. A successful attempt gives the player 1 point and the cell turns green. Once a whole picture has been successfully found, the player gets and extra 5 points, the grid clears and a new picture is to be discovered.

## Game Tutorial


## Planned Features
Unfortunately the end game state has not been coded yet. Upon reaching 0 points, instead of a game over screen and a reset, the scoreboard descends into negative figures.

I would also liked to have displayed the level names differently. Instead of a constant on screen list which the player constantly refers to, I would have liked their to have been one level name displayed at a time. This would have been done by iterating through an array of level names in tandem with the new levels themselves.

As well as this, once the final correct cell is selected, the grid immediately resets for the next level. The final picture is not displayed properly for the player to enjoy.

The one major bug that needs fixing is that if a successful (green) cell has been clicked on more than once, it then turns to red reflecting an unsuccessful state. This is reflected in the fact that the values of the cells are reflected in an array and the value is decremented on each click.

What was a win? Choosing a simple achievable target and succeeding.

What was a challenge? Getting the won conditions to work.

What would you do differently? Add a two player mode.
