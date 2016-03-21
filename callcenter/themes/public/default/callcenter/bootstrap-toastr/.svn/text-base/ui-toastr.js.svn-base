var UIToastr = function () {

    return {
        //main function to initiate the module
        init: function () {

            var i = -1,
                toastCount = 0,
                $toastlast,
                getMessage = function () {
                    var msgs = ['Hello, some notification sample goes here',
                        '<div><input class="form-control input-small" value="textbox"/>&nbsp;<a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes" target="_blank">Check this out</a></div><div><button type="button" id="okBtn" class="btn blue">Close me</button><button type="button" id="surpriseBtn" class="btn default" style="margin: 0 8px 0 8px">Surprise me</button></div>',
                        'Did you like this one ? :)',
                        'Totally Awesome!!!',
                        'Yeah, this is the Metronic!',
                        'Explore the power of Metronic. Purchase it now!'
                    ];
                    i++;
                    if (i === msgs.length) {
                        i = 0;
                    }

                    return msgs[i];
                };

            $('#menu').click(function () {
				var shortCutFunction = "success";
				toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "positionClass": "toast-top-right",
				  "onclick": null,
				  "showDuration": "1000",
				  "hideDuration": "1000",
				  "timeOut": "5000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
				}
				var msg = 'a as das';
				var title = 'dsa as da';
				//$("#toastrOptions").text("Command: toastr[" + shortCutFunction + "](\"" + msg + (title ? "\", \"" + title : '') + "\")\n\ntoastr.options = " + JSON.stringify(toastr.options, null, 2));
                //toastr[shortCutFunction]("Gnome & Growl type non-blocking notifications", "Toastr Notifications");
				var $toast = toastr[shortCutFunction]("Gnome & Growl type non-blocking notifications", "Toastr Notifications");
            });
            $('#cleartoasts').click(function () {
                toastr.clear();
            });

        }

    };

}();