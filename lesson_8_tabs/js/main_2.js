$(document).ready(function() {
    $('#example').pieChart({  
        barColor: '#68b828',  // bar color
        trackColor: '#eee',   // background color        
        lineWidth: 3,         // line width        
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent)/10. + '');
        },
        animate: {          // custom animation
            duration: 2000,
            enabled: true
        },
    });
	
});