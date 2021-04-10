$(document).ready(function(){
	// data
	var logDiv = $( "#log" );
 
for ( var i = 0; i < 5; i++ ) {
  $( "button" ).eq( i ).on( "click", { value: i }, function( event ) {
    var msgs = [
      "button = " + $( this ).index(),
      "event.data.value = " + event.data.value,
      "i = " + i
    ];
    logDiv.append( msgs.join( ", " ) + "<br>" );
  });
}
// name space
$( "p" ).on( "test.something", function( event ) {
  alert( event.namespace );
});
$( ".button" ).click(function( event ) {
  $( "p" ).trigger( "test.something" );
});
// meta key
$( "#checkMetaKey" ).click(function( event ) {
  $( "#display" ).text( event.metaKey );
});
// time stamp
var last, diff;
$( ".div" ).click(function( event ) {
  if ( last ) {
    diff = event.timeStamp - last;
    $( ".div" ).append( "time since last event: " + diff + "<br>" );
  } else {
    $( ".div" ).append( "Click again.<br>" );
  }
  last = event.timeStamp;
});
// which
$( "#whichkey" ).on( "keydown", function( event ) {
  $( "#log" ).html( event.type + ": " +  event.which );
});
})
