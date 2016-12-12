var myMap;
function initMap()
{
	ymaps.ready( init );

	function stringify( p )
	{
		var coords = p.geometry.getCoordinates()[ 0 ];
		var res = '';
		res = '[ ';
		for( var i = 0 , l = coords.length; i < l; i++ )
		{
			if( i > 0 )
			{
				res += ', ';
			}
			res += "[" + coords[ i ].toString() + "]";
		}
		res += ' ]';
		console.log( res );
	}

	function init()
	{
		myMap = new ymaps.Map( "map" , {
			center: [ 55.026493 , 82.997255 ] ,
			zoom: 17 ,
			type: "yandex#hybrid"
		} );
		myMap.behaviors.disable('scrollZoom');
		var polygon = new ymaps.GeoObject( {
				geometry: {
					type: "Polygon" ,
					coordinates: [ [ [ 55.0265 , 82.9973 ] , [ 55.0262 , 82.9973 ] , [ 55.0262 , 82.9970 ] , [ 55.0265 , 82.9970 ] , [ 55.0265 , 82.9973 ] ] ]
				} ,
				properties: {
					hintContent: "первый участок"
				}
			} , {
				fillColor: '#9ECF62' ,
				strokeColor: '000000' ,
				opacity: '0.7' ,
				strokeOpacity: '1.0' ,
				strokeWidth: '2.0'
			}
		);
		myMap.geoObjects
			.add( polygon );
		var polygon1 = new ymaps.GeoObject( {
				geometry: {
					type: "Polygon" ,
					coordinates: [
						[ [ 55.02674915262914 , 82.99720536441802 ] , [ 55.02680308165112 , 82.9976241398811 ] , [ 55.02670924498109 , 82.99764023313517 ] , [ 55.02667534666752 , 82.99724023313517 ] , [ 55.0265 , 82.9973 ] , [ 55.0265 , 82.997 ] , [ 55.0267 , 82.9969 ] , [ 55.02674915262914 , 82.99720536441802 ] ]
					]
				} ,
				properties: {
					hintContent: "второй участок"
				}
			} , {
				fillColor: '#E6803E' ,
				strokeColor: '000000' ,
				opacity: '0.7' ,
				strokeOpacity: '1.0' ,
				strokeWidth: '2.0'
			}
		);
		myMap.geoObjects
			.add( polygon1 );
		var polygon2 = new ymaps.GeoObject(
			{
				geometry:
				{
					type: "Polygon" ,
					coordinates: [ [ [ 55.0267 , 82.9969 ] , [ 55.0265 , 82.9970 ] , [ 55.0265 , 82.9965 ] , [ 55.0267 , 82.9966 ] , [ 55.0267 , 82.9969 ] ] ]
				} ,
				properties:
				{
					hintContent: "третий участок"
				}
			} ,
			{
				fillColor: '#D247DC' ,
				strokeColor: '000000' ,
				opacity: '0.7' ,
				strokeOpacity: '1.0' ,
				strokeWidth: '2.0'
			}
		);
		myMap.geoObjects
			.add( polygon2 );
		//polygon.editor.startDrawing();stringify( polygon1 );
		/*var placemark = new ymaps.Placemark( [ 55.025379 , 82.997146 ] , {
			balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />' ,
			iconContent: "Позиция панорамы google( см. ниже )"
		} , {
			preset: "islands#yellowStretchyIcon" ,
			balloonCloseButton: false ,
			hideIconOnBalloonOpen: false
		} );
		myMap.geoObjects.add( placemark );*/

	}
}
export { myMap , initMap }
