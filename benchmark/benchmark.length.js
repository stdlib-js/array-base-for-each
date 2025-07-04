/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pow = require( '@stdlib/math-base-special-pow' );
var zeroTo = require( '@stdlib/array-base-zero-to' );
var pkg = require( './../package.json' ).name;
var forEach = require( './../lib' );


// FUNCTIONS //

/**
* Callback invoked for each ndarray element.
*
* @private
* @param {number} value - array element
* @throws {Error} unexpected error
*/
function clbk( value ) {
	if ( isnan( value ) ) {
		throw new Error( 'unexpected error' );
	}
}

/**
* Creates a benchmark function.
*
* @private
* @param {PositiveInteger} len - array length
* @returns {Function} benchmark function
*/
function createBenchmark( len ) {
	var x = zeroTo( len );
	return benchmark;

	/**
	* Benchmark function.
	*
	* @private
	* @param {Benchmark} b - benchmark instance
	*/
	function benchmark( b ) {
		var i;

		b.tic();
		for ( i = 0; i < b.iterations; i++ ) {
			forEach( x, clbk );
			if ( isnan( x[ i%len ] ) ) {
				b.fail( 'should not return NaN' );
			}
		}
		b.toc();
		if ( isnan( x[ i%len ] ) ) {
			b.fail( 'should not return NaN' );
		}
		b.pass( 'benchmark finished' );
		b.end();
	}
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var len;
	var min;
	var max;
	var f;
	var i;

	min = 1; // 10^min
	max = 6; // 10^max

	for ( i = min; i <= max; i++ ) {
		len = pow( 10, i );

		f = createBenchmark( len );
		bench( pkg+':dtype=generic,len='+len, f );
	}
}

main();
