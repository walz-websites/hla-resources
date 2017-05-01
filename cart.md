---
layout: page
title: Cart
permalink: /cart/
---
<div id="cart"></div>
<div id="cp936c80f096" style="margin: 10px 0" onclick="document.getElementById('pay_now_form_6f8c42b3cc').submit()"><div><div class='r-bg '><span class='r-fg r-fg-3'></span> <span class='r-fg r-fg-2'></span> <span class='r-fg r-fg-1'></span> <span class='r-fg r-fg-0'></span> </div><form action="https://demo.globalgatewaye4.firstdata.com/pay" id="pay_now_form_6f8c42b3cc" method="post"><input type="hidden" name="x_login" value="HCO-IGNIT-861" /><input type="hidden" name="x_show_form" value="PAYMENT_FORM" /><input type="hidden" name="x_fp_sequence" value="1493671159555286719" /><input type="hidden" name="x_fp_hash" value="PNB-1.0-52252aa99ef2676db84d76224be65dddfd2dbfa2" /><input type="hidden" name="x_amount" value="10" /><input type="hidden" name="x_currency_code" value="USD" /><input type="hidden" name="x_test_request" value="TRUE" /><input type="hidden" name="x_relay_response" value="" /><input type="hidden" name="donation_prompt" value="" /><input type="hidden" name="button_code" value="Pay Now Ignite Maple Grove DEMO0500" /><div class="cpwrap"><button type="button">Pay Now</button></div></form><div class='r-bg '><span class='r-fg r-fg-0'></span> <span class='r-fg r-fg-1'></span> <span class='r-fg r-fg-2'></span> <span class='r-fg r-fg-3'></span> </div></div></div><style type="text/css">div#cp936c80f096{width: 200px; background-color: #FF9900;}div#cp936c80f096:hover{cursor: pointer}div#cp936c80f096 * {background-color: #FFAA00;}div#cp936c80f096 form{margin:0; padding:0;text-align:center}div#cp936c80f096 div.cpwrap {width: 90%;border:0;margin:0 auto;padding: 0px; background-color: #FF9900}div#cp936c80f096 button{width: 95%;border:0;margin:0;padding: 3px 0; background-color: #FF9900;text-align: center; color: #FFFFFF; }div#cp936c80f096:hover button {text-decoration: underline}div#cp936c80f096 button:focus,div#cp936c80f096 button:visited,div#cp936c80f096 button:active{border:none;outline: none}div#cp936c80f096 button {font-size: 16px}div#cp936c80f096 div.cpwrap {border-left: 3px solid #FFAA00; border-right: 3px solid #FFAA00}div#cp936c80f096 .r-fg{background-color: #FFAA00; border-color: #FFAA00}div#cp936c80f096 .r-bg{background-color: white}div#cp936c80f096 .r-fg{border-style: solid; border-width: 0px 1px; overflow: hidden; display: block; height: 1px; font-size: 1px}div#cp936c80f096 .r-fg-0{margin-left: 1px; margin-right: 1px; border-width: 0px 1px !important; height: 1px !important}div#cp936c80f096 .r-fg-1{margin-left: 2px; margin-right: 2px}div#cp936c80f096 .r-fg-2{margin-left: 3px; margin-right: 3px}div#cp936c80f096 .r-fg-3{margin-left: 5px; margin-right: 5px}</style>

<script type="text/javascript">
	show_cart();
	function show_cart () {
		var items = JSON.parse(localStorage.getItem("items")) || new Array();
		if (items.length >= 1) {
			var htmlString = '<table class="cart-table-m cart-table"><tbody><tr><th></th><th></th><th>Item</th><th>Quantity</th><th>Suggested Donation</th><th>Donation</th></tr>';
			for (var i = 0; i < items.length; i++) {
				var amount = 0;
				if (items[i].donation) {
					amount =  Number(items[i].suggested_donation) * Number(items[i].quantity);
				};
				htmlString = htmlString + '<tr class="cart-table-row"><td><a class="cart_remove" onclick="remove_item(' + i + ');">x</a></td><td>' + '<img class="cart-item-image" src="{{ site.url }}{{ site.baseurl }}/images/' + items[i].image + '"/>' + '</td><td><dl><dt>Item</dt><dd>' + if_cart_donation(items[i].use,'<a href="{{ site.url }}{{ site.baseurl }}' + items[i].url + '">') + items[i].item + if_cart_donation(items[i].use,'</a><br>') + if_cart_donation(items[i].use,selected(items[i].use,i)) + '</dd></dl></td><td>' + if_cart_donation(items[i].use,'<dl><dt>Quantity</dt><dd><input id="quantity_' + i + '" class="input-text qty text" step="1" min="1" max="99999" name="quantity" value="' + items[i].quantity + '" title="Qty" size="4" pattern="[0-9]*" inputmode="numeric" type="number" onclick="document.getElementById(\'update_cart\').classList.add(\'update_cart\');"></dd></dl>') + '</td><td>' + if_cart_donation(items[i].use,'<dl><dt>Suggested Donation</dt><dd>$' + (Number(items[i].suggested_donation) * Number(items[i].quantity)).toFixed(2).toString() + '</dd></dl>') + '</td><td><dl><dt>Donation</dt><dd>$' + amount.toFixed(2).toString() + "</dd></dl></td></tr>";
			};
			htmlString = htmlString + '<tr><td></td><td></td><td></td><td></td><td></td><td><input type="submit" id="update_cart" class="" onclick="update_cart();" value="Update Cart"></td></tr></tbody></table><a class="shop-buttons float-left" onclick="empty_cart();">Empty Cart</a>';

			htmlString = htmlString + '<div id="cart-totals">' + ask_for_donations(total(items)) + '<h3>Cart Totals</h3><p>Shipping is included with suggested donation. For Expedited Shipping (Must call us with details) (651)-484-1040.</p><table class="cart-table"><tbody><tr><td>Suggested Total</td><td>$' + suggested_total(items).toFixed(2).toString() + '</td></tr><tr><td>Total</td><td>$' + total(items).toFixed(2).toString() + '</td></tr></tbody></table></div>';
			document.getElementById('cart').innerHTML = htmlString;
		}else{
			document.getElementById('cart').innerHTML = '<h3 style="text-align: center;color: #7f7f7f;">Empty Cart</h3>';
		};
	}
	
	function update_cart () {
		var items = JSON.parse(localStorage.getItem("items")) || new Array();
		for (var i = 0; i < items.length; i++) {
			if (items[i].use != "none") {
				items[i].use = document.getElementById("use_"+i).value;
				items[i].quantity = document.getElementById("quantity_"+i).value;
			};
		};
		localStorage.setItem("items", JSON.stringify(items));
		show_cart();
	}
	
	function remove_item (id) {
		update_cart();
		var items = JSON.parse(localStorage.getItem("items")) || new Array();
		items.splice(id, 1);
		localStorage.setItem("items", JSON.stringify(items));
		show_cart();
	}

	function total (items) {
		var amount = 0;
		for (var i = items.length - 1; i >= 0; i--) {
			if (items[i].donation) {
				amount = amount + (Number(items[i].suggested_donation) * Number(items[i].quantity));
			};
		};
		return amount;
	}

	function suggested_total (items) {
		var amount = 0;
		for (var i = items.length - 1; i >= 0; i--) {
			if (items[i].use != "none") {
				amount = amount + (Number(items[i].suggested_donation) * Number(items[i].quantity));
			};
		};
		return amount;
	}

	function if_cart_donation (argument,text) {
		if (argument != "none") {
			return text;
		}else{
			return '';
		};
	}

	function selected (argument,i) {
		var select =  new Array("","","","","","","","");
		if (argument == '-- Please Select --') {
			select[0] =  ' selected="selected"';
		};
		if (argument == 'Family/Personal') {
			select[1] =  ' selected="selected"';
		};
		if (argument == 'Community') {
			select[2] =  ' selected="selected"';
		};
		if (argument == 'Church') {
			select[3] =  ' selected="selected"';
		};
		if (argument == 'College') {
			select[4] =  ' selected="selected"';
		};
		if (argument == 'High School') {
			select[5] =  ' selected="selected"';
		};
		if (argument == 'Pregnancy Resource Center') {
			select[6] =  ' selected="selected"';
		};
		if (argument == 'Sidewalk Counseling') {
			select[7] =  ' selected="selected"';
		};
		return '<select id="use_' + i + '" class="use" type="select" name="use" onclick="document.getElementById(\'update_cart\').classList.add(\'update_cart\');"><option value="-- Please Select --"' + select[0] + '>-- Please Select --</option><option value="Family/Personal"' + select[1] + '>Family/Personal</option><option value="Community"' + select[2] + '>Community</option><option value="Church"' + select[3] + '>Church</option><option value="College"' + select[4] + '>College</option><option value="High School"' + select[5] + '>High School</option><option value="Pregnancy Resource Center"' + select[6] + '>Pregnancy Resource Center</option><option value="Sidewalk Counseling"' + select[7] + '>Sidewalk Counseling</option></select>';
	}

	function ask_for_donations (amount) {
		if (amount == 0) {
			return '<p>HLA materials are available free of charge. Your donation today helps us support those who cannot afford a financial gift at this time.</p><span>$</span><input id="cart_donations" class="input-text qty text" step="0.01" min="0.01" max="99999" name="quantity" title="Donation" size="4" pattern="[0-9]*" inputmode="numeric" type="number"><a id="cart_donation" class="" onclick="add_donation_to_cart();">Add Donation</a>';
		}else{
			return "";
		};
	}

	function add_donation_to_cart () {
		var line_item = new Object();
		line_item.item = "Donation";
		line_item.id_number = "#0001";
		line_item.url = "{{ page.url }}";
		line_item.image = "{{ site.cart_donations_image }}";
		line_item.donation = "true";
		line_item.suggested_donation = document.getElementById("cart_donations").value;
		line_item.quantity = "1";
		line_item.use = "none";
		var items = JSON.parse(localStorage.getItem("items")) || new Array();
		items.push(line_item);
		var myJSON = JSON.stringify(items);
		localStorage.setItem("items", myJSON);
		show_cart();
	}
	function empty_cart () {
		localStorage.removeItem("items");
		show_cart();
	}
</script>