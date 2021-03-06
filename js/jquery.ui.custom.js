﻿/* ------------------------------------------------------------------------
	Title: jQuery UI widgets
	Author: Promovis Web Dev
	Web: http://www.promovis.ro
	Version: 1.1
------------------------------------------------------------------------- */
			$(function(){
				// Accordion
				$("#accordion").accordion({ header: "h3", collapsible:true, active: false, autoHeight: false, fillSpace: false, event: "click"});
				// Tabs
				$('#tabs').tabs();
				// Button
				$("#radio1").buttonset();
				$("button, input:submit, a", ".butoane").button();
				// Dialog			
				$('#dialog').dialog({
					autoOpen: false,
					width: 600,
					buttons: {
						"Ok": function() { 
							$(this).dialog("close"); 
						}, 
						"Cancel": function() { 
							$(this).dialog("close"); 
						} 
					}
				});
				// Dialog Link
				$('#dialog_link').click(function(){
					$('#dialog').dialog('open');
					return false;
				});
				// Datepicker
				$('#datepicker').datepicker({
				});
				// Slider
				$('#slider').slider({
					range: true,
					values: [17, 67]
				});
				// Progressbar
				$("#progressbar").progressbar({
					value: 20 
				});
				//hover states on the static widgets
				$('#dialog_link, ul#icons li').hover(
					function() { $(this).addClass('ui-state-hover'); }, 
					function() { $(this).removeClass('ui-state-hover'); }
				);
			});