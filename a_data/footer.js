"use strict";

if( apartment_wp_footer.map_init ) {
    google.maps.event.addDomListener( window, 'load', apartment_wp_init );
}
   function apartment_wp_init() {
        
        if ( apartment_wp_footer.estate_map ) {
            var map_row = apartment_wp_footer.estate_map.split( ";");
            for( var i = 0; i < map_row.length; i++ ) {
                if( map_row[ i ].length > 0 ) {
                    //alert(map_row[ i ]);
                    var map_item = map_row[ i ].split(",");
                    //alert(map_item[0] + " " + map_item[1] + " " +map_item[2] + " " +map_item[3] + " " +map_item[4] );
                    mapInit( map_item[0], map_item[1], map_item[2], map_item[3], map_item[4], map_item[5], map_item[6] );
                }
            }
	}
	if ( apartment_wp_footer.street_view ) {
            //alert(apartment_wp_footer.street_view);
            var street_row = apartment_wp_footer.street_view.split(",");
            if(street_row.length == 3) {
                streetViewInitId( street_row[0], street_row[1], street_row[2] );
            } else if(street_row.length == 4) {
                //alert('here');
                streetViewInit(parseFloat(street_row[0]), parseFloat(street_row[1]), street_row[2], parseFloat(street_row[3]) );
            }
	}
        
        if ( apartment_wp_footer.contact_map ) {
            //alert(apartment_wp_footer.contact_map);
            var contact_row = apartment_wp_footer.contact_map.split(",");
            mapInit( parseFloat(contact_row[0] ), parseFloat(contact_row[1] ), contact_row[2], contact_row[3], contact_row[4], contact_row[5], contact_row[6] );
	}
        
        if ( apartment_wp_footer.locations ) {
            var locations = new Array();
            var location_row = apartment_wp_footer.locations.split(";");
            for( var i = 0; i < location_row.length; i++ ) {
                if( location_row[ i ].length > 0 ) {
                    //alert(location_row[ i ]);
                    var location_item = location_row[ i ].split("|");
                    locations.push( [ location_item[0], location_item[1], location_item[2], location_item[3], location_item[4], location_item[5], location_item[6] ] );
                }
            }
            offersMapInit("offers-map",locations, apartment_wp_footer.color);
	}
        
        if ( apartment_wp_footer.idx_locations == '1' ) {
            var pinicon = apartment_wp_footer.pinicon;
            var idx_locations = getIDXLocations("offers-map", pinicon );
        }

                    
}

if( apartment_wp_footer.widget_search ) {
    var termId = [ apartment_wp_footer.widget_search ];
    var sidebarTermId = [ apartment_wp_footer.widget_search ];
} else {
    var termId = [];
}

if( apartment_wp_footer.search_term ) {
    var search_terms = apartment_wp_footer.search_term.split( ",");
    for( var i = 0; i < search_terms.length; i++ ) {
        if( search_terms[ i ].length > 0 ) {
            termId[ i ] = search_terms[ i ];
        }
    }
    }
    
var emptyPin = apartment_wp_footer.emptypin
var lat = apartment_wp_footer.lat;
var lng = apartment_wp_footer.lng;

var ip;
var ipc = new Array();
var cLabel = apartment_wp_footer.clabel;
var thumbnailId = 0;
var ip2;
var ipc2 = new Array();
var ip3;
var ipc3 = new Array();

if( apartment_wp_footer.ipc_caption && apartment_wp_footer.ipc_key ) {
    
    ip = apartment_wp_footer.ip.split( "," );
    var caption_arr = apartment_wp_footer.ipc_caption.split( "," );;
    var key_arr = apartment_wp_footer.ipc_key.split( "," );
    for( var i = 0; i < caption_arr.length; i++ ) {
        ipc[ i ] = { caption: caption_arr[i], url: apartment_wp_footer.submit_delete, key: key_arr[i] };
        
    }
    thumbnailId = apartment_wp_footer.thumbnail_id;
}

if( apartment_wp_footer.ipc2_caption && apartment_wp_footer.ipc2_key ) {
    
    ip2 = apartment_wp_footer.ip2.split( "," );
    var caption2_arr = apartment_wp_footer.ipc2_caption.split( "," );;
    var key2_arr = apartment_wp_footer.ipc2_key.split( "," );
    for( var i = 0; i < caption2_arr.length; i++ ) {
        ipc2[ i ] = { caption: caption2_arr[i], url: apartment_wp_footer.submit_delete, key: key2_arr[i] };
        
    }
}

if( apartment_wp_footer.ipc3_caption && apartment_wp_footer.ipc3_key ) {
    
    ip3 = apartment_wp_footer.ip3.split( "," );
    var caption3_arr = apartment_wp_footer.ipc3_caption.split( "," );
    var key3_arr = apartment_wp_footer.ipc3_key.split( "," );
    for( var i = 0; i < caption3_arr.length; i++ ) {
        ipc3[ i ] = { caption: caption3_arr[i], url: apartment_wp_footer.submit_delete, key: key3_arr[i] };
        
    }
}


jQuery( document ).ready( function ( $ ) {
    if( apartment_wp_footer.show_login ) {
        $( "#login-modal" ).modal( 'toggle' );
        
    }
} );