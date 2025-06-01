//
//	Various functions to generate grid locations for various fire targetting patterns
//
//	LICENSE:  GPL-3.0
//

function getRandomInteger( valMin, valMax ){
	valMin = Math.ceil( valMin ) ;
	valMax = Math.floor( valMax ) ;
	//return Math.floor( Math.random() * ( valMax - valMin + 1 ) ) + valMin ;
	return Math.floor( Math.random() * ( valMax - valMin ) ) + valMin ;
} ;

function firePattern_square( col, row ){
	var firePattern = 'Square' ;
	var targets = [] ;
	var enumerateTargets = "" ;

	targets.push( [ col-2, row-2 ] ) ;
	targets.push( [ col-2, row+2 ] ) ;
	targets.push( [ col+2, row+2 ] ) ;
	targets.push( [ col+2, row-2 ] ) ;
	targets.push( [ col-2, row+0 ] ) ;
	targets.push( [ col+0, row+2 ] ) ;
	targets.push( [ col+2, row+0 ] ) ;
	targets.push( [ col+0, row-2 ] ) ;

	for( i=0 ; i < targets.length ; i++ ){
		enumerateTargets = enumerateTargets + "\n[" + targets[i] + "]" ;
	} ;
	console.log( "Targetting Pattern:  " + `${firePattern}` + "\nGrid Coordinates:  [" + ` ${col} , ${row} ` + "]\nSalvo Coordinates:\n" + enumerateTargets ) ;
	return targets ;
} ;

function firePattern_X( col, row ){
	var firePattern = 'X' ;
	var targets = [] ;
	var enumerateTargets = "" ;

	targets.push( [ col-2, row-2 ] ) ;
	targets.push( [ col-2, row+2 ] ) ;
	targets.push( [ col+2, row+2 ] ) ;
	targets.push( [ col+2, row-2 ] ) ;
	targets.push( [ col-1, row-1 ] ) ;
	targets.push( [ col-1, row+1 ] ) ;
	targets.push( [ col+1, row+1 ] ) ;
	targets.push( [ col+1, row-1 ] ) ;
	targets.push( [ col+0, row+0 ] ) ;

	for( i=0 ; i < targets.length ; i++ ){
		enumerateTargets = enumerateTargets + "\n[" + targets[i] + "]" ;
	} ;
	console.log( "Targetting Pattern:  " + `${firePattern}` + "\nGrid Coordinates:  [" + ` ${col} , ${row} ` + "]\nSalvo Coordinates:\n" + enumerateTargets ) ;
	return targets ;
} ;

function firePattern_crossHairs( col, row ){
	var firePattern = 'Cross Hairs' ;
	var targets = [] ;
	var enumerateTargets = "" ;

	targets.push( [ col-2, row+0 ] ) ;
	targets.push( [ col-1, row+0 ] ) ;
	targets.push( [ col+1, row+0 ] ) ;
	targets.push( [ col+2, row+0 ] ) ;
	targets.push( [ col+0, row+0 ] ) ;
	targets.push( [ col+0, row-2 ] ) ;
	targets.push( [ col+0, row-1 ] ) ;
	targets.push( [ col+0, row+1 ] ) ;
	targets.push( [ col+0, row+2 ] ) ;

	for( i=0 ; i < targets.length ; i++ ){
		enumerateTargets = enumerateTargets + "\n[" + targets[i] + "]" ;
	} ;
	console.log( "Targetting Pattern:  " + `${firePattern}` + "\nGrid Coordinates:  [" + ` ${col} , ${row} ` + "]\nSalvo Coordinates:\n" + enumerateTargets ) ;
	return targets ;
} ;

function firePattern_diagonalRight( col, row ){
	var firePattern = 'Diagonal North-East' ;
	var targets = [] ;
	var enumerateTargets = "" ;

	targets.push( [ col+1, row+3 ] ) ;
	targets.push( [ col+0, row+2 ] ) ;
	targets.push( [ col-1, row+1 ] ) ;
	targets.push( [ col-2, row+0 ] ) ;
	targets.push( [ col-3, row-1 ] ) ;
	targets.push( [ col+3, row+1 ] ) ;
	targets.push( [ col+2, row+0 ] ) ;
	targets.push( [ col+1, row-1 ] ) ;
	targets.push( [ col+0, row-2 ] ) ;
	targets.push( [ col-1, row-3 ] ) ;

	for( i=0 ; i < targets.length ; i++ ){
		enumerateTargets = enumerateTargets + "\n[" + targets[i] + "]" ;
	} ;
	console.log( "Targetting Pattern:  " + `${firePattern}` + "\nGrid Coordinates:  [" + ` ${col} , ${row} ` + "]\nSalvo Coordinates:\n" + enumerateTargets ) ;
	return targets ;
} ;

function firePattern_diagonalLeft( col, row ){
	var firePattern = 'Diagonal North-West' ;
	var targets = [] ;
	var enumerateTargets = "" ;

	targets.push( [ col-1, row+3 ] ) ;
	targets.push( [ col+0, row+2 ] ) ;
	targets.push( [ col+1, row+1 ] ) ;
	targets.push( [ col+2, row+0 ] ) ;
	targets.push( [ col+3, row-1 ] ) ;
	targets.push( [ col-3, row+1 ] ) ;
	targets.push( [ col-2, row+0 ] ) ;
	targets.push( [ col-1, row-1 ] ) ;
	targets.push( [ col+0, row-2 ] ) ;
	targets.push( [ col+1, row-3 ] ) ;

	for( i=0 ; i < targets.length ; i++ ){
		enumerateTargets = enumerateTargets + "\n[" + targets[i] + "]" ;
	} ;
	console.log( "Targetting Pattern:  " + `${firePattern}` + "\nGrid Coordinates:  [" + ` ${col} , ${row} ` + "]\nSalvo Coordinates:\n" + enumerateTargets ) ;
	return targets ;
} ;

function firePattern_barsHorizontal( col, row ){
	var firePattern = 'Horizontal Bars' ;
	//var firePattern = 'Dual Range' ;
	var targets = [] ;
	var enumerateTargets = "" ;

	targets.push( [ col-2, row+1 ] ) ;
	targets.push( [ col-1, row+1 ] ) ;
	targets.push( [ col+0, row+1 ] ) ;
	targets.push( [ col+1, row+1 ] ) ;
	targets.push( [ col+2, row+1 ] ) ;
	targets.push( [ col-2, row-1 ] ) ;
	targets.push( [ col-1, row-1 ] ) ;
	targets.push( [ col+0, row-1 ] ) ;
	targets.push( [ col+1, row-1 ] ) ;
	targets.push( [ col+2, row-1 ] ) ;

	for( i=0 ; i < targets.length ; i++ ){
		enumerateTargets = enumerateTargets + "\n[" + targets[i] + "]" ;
	} ;
	console.log( "Targetting Pattern:  " + `${firePattern}` + "\nGrid Coordinates:  [" + ` ${col} , ${row} ` + "]\nSalvo Coordinates:\n" + enumerateTargets ) ;
	return targets ;
} ;

function firePattern_barsVertical( col, row ){
	var firePattern = 'Vertical Bars' ;
	//var firePattern = 'Dual Compass' ;
	var targets = [] ;
	var enumerateTargets = "" ;

	targets.push( [ col+1, row-2 ] ) ;
	targets.push( [ col+1, row-1 ] ) ;
	targets.push( [ col+1, row+0 ] ) ;
	targets.push( [ col+1, row+1 ] ) ;
	targets.push( [ col+1, row+2 ] ) ;
	targets.push( [ col-1, row-2 ] ) ;
	targets.push( [ col-1, row-1 ] ) ;
	targets.push( [ col-1, row+0 ] ) ;
	targets.push( [ col-1, row+1 ] ) ;
	targets.push( [ col-1, row+2 ] ) ;

	for( i=0 ; i < targets.length ; i++ ){
		enumerateTargets = enumerateTargets + "\n[" + targets[i] + "]" ;
	} ;
	console.log( "Targetting Pattern:  " + `${firePattern}` + "\nGrid Coordinates:  [" + ` ${col} , ${row} ` + "]\nSalvo Coordinates:\n" + enumerateTargets ) ;
	return targets ;
} ;

function firePattern_onTargRand( col, row ){
	var firePattern = 'Random About Target' ;
	var target = [] ;
	var targets = [] ;
	var munitionsCost = 10 ;
	var alreadyTargetted = false ;
	var enumerateTargets = "" ;

	for( i=1 ; i <= munitionsCost ; i++ ){
		do {
			target = [ 
				col + getRandomInteger( 0, 6 ) -3 ,
				row + getRandomInteger( 0, 6 ) -3
			] ;
			alreadyTargetted = false ;
			for( let i = 0 ; i < targets.length ; i++ ){
     			if(	targets[i][0] === target[0]	&&
				targets[i][1] === target[1]
				) {
					alreadyTargetted = true ;
					console.log( "duplicate flagged at " + `${j}` + " vs " + `${i}` + "    [" + target + "]     (discarded)" ) ;
				} ;
			} ; 
		} while( alreadyTargetted === true ) ;

		targets.push( target ) ;
		enumerateTargets = enumerateTargets + "\n[" + target + "]" ;
        } ;

	console.log( "Targetting Pattern:  " + `${firePattern}` + "\nGrid Coordinates:  [" + ` ${col} , ${row} ` + "]\nSalvo Coordinates:\n" + enumerateTargets ) ;
	return targets ;
} ;

function firePattern_fireForEffect( col, row, mode ){
	var firePattern = 'Fire For Effect' ;
	var targets = [] ;
	var enumerateTargets = "" ;

	// Since center is previously hit target, no need to re-target that grid square
	//
	switch( mode ) {
		case 1 :
		case 'vertical' :
		case 'longitude' :
		case 'meridian' :
			// Target assignments for ship known to have bearing North/South
			targets.push( [ col+0, row+3 ] ) ;
			targets.push( [ col+0, row+2 ] ) ;
			targets.push( [ col+0, row+1 ] ) ;
			targets.push( [ col+0, row-1 ] ) ;
			targets.push( [ col+0, row-2 ] ) ;
			targets.push( [ col+0, row-3 ] ) ;
			break;
		case 2 :
		case 'horizontal' :
		case 'latitude' :
		case 'parallel' :
			// Target assignments for ship known to have bearing East/West
			targets.push( [ col+3, row+0 ] ) ;
			targets.push( [ col+2, row+0 ] ) ;
			targets.push( [ col+1, row+0 ] ) ;
			targets.push( [ col-1, row+0 ] ) ;
			targets.push( [ col-2, row+0 ] ) ;
			targets.push( [ col-3, row+0 ] ) ;
			break;
		// case 0 :
		// case 'probe' :
		default :
			// Limit salvo to help identify ship orientation
			targets.push( [ col+0, row+1 ] ) ;
			targets.push( [ col+0, row-1 ] ) ;
			targets.push( [ col+1, row+0 ] ) ;
			targets.push( [ col-1, row+0 ] ) ;
	} ;

	for( i=0 ; i < targets.length ; i++ ){
		enumerateTargets = enumerateTargets + "\n[" + targets[i] + "]" ;
	} ;
	console.log( "Targetting Pattern:  " + `${firePattern}` + "\nGrid Coordinates:  [" + ` ${col} , ${row} ` + "]\nSalvo Coordinates:\n" + enumerateTargets ) ;
	return targets ;
} ;

export {
	getRandomInteger, 
	firePattern_square, 
	firePattern_X, 
	firePattern_crossHairs, 
	firePattern_diagonalRight, 
	firePattern_diagonalLeft, 
	firePattern_barsHorizontal, 
	firePattern_barsVertical, 
	firePattern_onTargRand, 
	firePattern_fireForEffect 
} ;

