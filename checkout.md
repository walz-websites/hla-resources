---
layout: page
title: Checkout
permalink: /checkout/
---
<div id="checkout-billing" class="checkout-form"></div>
<div id="checkout-notes" class="checkout-form"></div>
<div id="checkout-continue" class="checkout-form"></div>
<div id="checkout-payment" class="checkout-form"></div>

<script type="text/javascript">
	start();
	function start () {
		var items = localStorage.getItem("items") || null;
		if (items != null) {
			show_billing();		
			show_notes();
			show_shipping();
			show_continue();
		};
	}
	function show_billing () {
		var pastval = read("b_state");
		var pastcval = read("b_country");
		var htmlString = '<h3>Billing Details</h3><p class="half first"><label for="">First Name<span class="required">*</span></label><input id="input-b-f-name" type="text" value="' + read("b_f_name") + '"></p><p class="half"><label for="">Last Name<span class="required">*</span></label><input id="input-b-l-name" type="text" value="' + read("b_l_name") + '"></p><p class="full"><label for="">Organization Name</label><input id="input-b-o-name" type="text" value="' + read("b_o_name") + '"></p><p class="half first"><label for="">Email Address<span class="required">*</span></label><input id="input-b-email" type="text" value="' + read("b_email") + '"></p><p class="half"><label for="">Phone<span class="required">*</span></label><input id="input-b-phone" type="text" value="' + read("b_phone") + '"></p><p class="full">{% include select-country.html type="b" %}</p><p class="full"><label for="">Address<span class="required">*</span></label><input id="input-b-address-1" value="' + read("b_address_1") + '" type="text" placeholder="Street Address" style="margin-bottom:5px;"><input id="input-b-address-2" value="' + read("b_address_2") + '" type="text" placeholder="Apartment, suite, unit etc. (optional)"></p><p class="full"><label for="">Town / City<span class="required">*</span></label><input id="input-b-city" value="' + read("b_city") + '" type="text"></p><p class="half first" id="b_state"><label for="billing_state" class="">State<span class="required">*</span></label><select id="input-b-state" name="billing_state" id="billing_state" class="state_select select2-hidden-accessible" data-placeholder="" tabindex="-1" aria-hidden="true"><br><option value="">Select an option…</option><option value="Alabama" ' + selected("Alabama",pastval) +'>Alabama</option><option value="Alaska" ' + selected("Alaska",pastval) +'>Alaska</option><option value="Arizona" ' + selected("Arizona",pastval) +'>Arizona</option><option value="Arkansas" ' + selected("Arkansas",pastval) +'>Arkansas</option><option value="California" ' + selected("California",pastval) +'>California</option><option value="Colorado" ' + selected("Colorado",pastval) +'>Colorado</option><option value="Connecticut" ' + selected("Connecticut",pastval) +'>Connecticut</option><option value="Delaware" ' + selected("Delaware",pastval) +'>Delaware</option><option value="District Of Columbia" ' + selected("District Of Columbia",pastval) +'>District Of Columbia</option><option value="Florida" ' + selected("Florida",pastval) +'>Florida</option><option value="Georgia" ' + selected("Georgia",pastval) +'>Georgia</option><option value="Hawaii" ' + selected("Hawaii",pastval) +'>Hawaii</option><option value="Idaho" ' + selected("Idaho",pastval) +'>Idaho</option><option value="Illinois" ' + selected("Illinois",pastval) +'>Illinois</option><option value="Indiana" ' + selected("Indiana",pastval) +'>Indiana</option><option value="Iowa" ' + selected("Iowa",pastval) +'>Iowa</option><option value="Kansas" ' + selected("Kansas",pastval) +'>Kansas</option><option value="Kentucky" ' + selected("Kentucky",pastval) +'>Kentucky</option><option value="Louisiana" ' + selected("Louisiana",pastval) +'>Louisiana</option><option value="Maine" ' + selected("Maine",pastval) +'>Maine</option><option value="Maryland" ' + selected("Maryland",pastval) +'>Maryland</option><option value="Massachusetts" ' + selected("Massachusetts",pastval) +'>Massachusetts</option><option value="Michigan" ' + selected("Michigan",pastval) +'>Michigan</option><option value="Minnesota" ' + selected("Minnesota",pastval) +'>Minnesota</option><option value="Mississippi" ' + selected("Mississippi",pastval) +'>Mississippi</option><option value="Missouri" ' + selected("Missouri",pastval) +'>Missouri</option><option value="Montana" ' + selected("Montana",pastval) +'>Montana</option><option value="Nebraska" ' + selected("Nebraska",pastval) +'>Nebraska</option><option value="Nevada" ' + selected("Nevada",pastval) +'>Nevada</option><option value="New Hampshire" ' + selected("New Hampshire",pastval) +'>New Hampshire</option><option value="New Jersey" ' + selected("New Jersey",pastval) +'>New Jersey</option><option value="New Mexico" ' + selected("New Mexico",pastval) +'>New Mexico</option><option value="New York" ' + selected("New York",pastval) +'>New York</option><option value="North Carolina" ' + selected("North Carolina",pastval) +'>North Carolina</option><option value="North Dakota" ' + selected("North Dakota",pastval) +'>North Dakota</option><option value="Ohio" ' + selected("Ohio",pastval) +'>Ohio</option><option value="Oklahoma" ' + selected("Oklahoma",pastval) +'>Oklahoma</option><option value="Oregon" ' + selected("Oregon",pastval) +'>Oregon</option><option value="Pennsylvania" ' + selected("Pennsylvania",pastval) +'>Pennsylvania</option><option value="Rhode Island" ' + selected("Rhode Island",pastval) +'>Rhode Island</option><option value="South Carolina" ' + selected("South Carolina",pastval) +'>South Carolina</option><option value="South Dakota" ' + selected("South Dakota",pastval) +'>South Dakota</option><option value="Tennessee" ' + selected("Tennessee",pastval) +'>Tennessee</option><option value="Texas" ' + selected("Texas",pastval) +'>Texas</option><option value="Utah" ' + selected("Utah",pastval) +'>Utah</option><option value="Vermont" ' + selected("Vermont",pastval) +'>Vermont</option><option value="Virginia" ' + selected("Virginia",pastval) +'>Virginia</option><option value="Washington" ' + selected("Washington",pastval) +'>Washington</option><option value="West Virginia" ' + selected("West Virginia",pastval) +'>West Virginia</option><option value="Wisconsin" ' + selected("Wisconsin",pastval) +'>Wisconsin</option><option value="Wyoming" ' + selected("Wyoming",pastval) +'>Wyoming</option><option value="Armed Forces (AA)" ' + selected("Armed Forces (AA)",pastval) +'>Armed Forces (AA)</option><option value="Armed Forces (AE)" ' + selected("Armed Forces (AE)",pastval) +'>Armed Forces (AE)</option><option value="Armed Forces (AP)" ' + selected("Armed Forces (AP)",pastval) +'>Armed Forces (AP)</option></select></p><p class="half"><label for="">ZIP<span class="required">*</span></label><input id="input-b-zip" value="' + read("b_zip") + '" type="text"></p>';
			document.getElementById('checkout-billing').innerHTML = htmlString;
	}
	function show_shipping () {
		var pastval = read("s_state");
		var pastcval = read("s_country");
		var htmlString = '<p class="half first"><label for="">First Name<span class="required">*</span></label><input id="input-s-f-name" type="text" value="' + read("s_f_name") + '"></p><p class="half"><label for="">Last Name<span class="required">*</span></label><input id="input-s-l-name" type="text" value="' + read("s_l_name") + '"></p><p class="full"><label for="">Organization Name</label><input id="input-s-o-name" type="text" value="' + read("s_o_name") + '"></p><p class="half first"><label for="">Email Address<span class="required">*</span></label><input id="input-s-email" type="text" value="' + read("s_email") + '"></p><p class="half"><label for="">Phone<span class="required">*</span></label><input id="input-s-phone" type="text" value="' + read("s_phone") + '"></p><p class="full">{% include select-country.html type="s" %}</p><p class="full"><label for="">Address<span class="required">*</span></label><input id="input-s-address-1" value="' + read("s_address_1") + '" type="text" placeholder="Street Address" style="margin-bottom:5px;"><input id="input-s-address-2" value="' + read("s_address_2") + '" type="text" placeholder="Apartment, suite, unit etc. (optional)"></p><p class="full"><label for="">Town / City<span class="required">*</span></label><input id="input-s-city" value="' + read("s_city") + '" type="text"></p><p class="half first" id="s_state"><label for="billing_state" class="">State<span class="required">*</span></label><select id="input-s-state" name="billing_state" id="billing_state" class="state_select select2-hidden-accessible" data-placeholder="" tabindex="-1" aria-hidden="true"><br><option value="">Select an option…</option><option value="Alabama" ' + selected("Alabama",pastval) +'>Alabama</option><option value="Alaska" ' + selected("Alaska",pastval) +'>Alaska</option><option value="Arizona" ' + selected("Arizona",pastval) +'>Arizona</option><option value="Arkansas" ' + selected("Arkansas",pastval) +'>Arkansas</option><option value="California" ' + selected("California",pastval) +'>California</option><option value="Colorado" ' + selected("Colorado",pastval) +'>Colorado</option><option value="Connecticut" ' + selected("Connecticut",pastval) +'>Connecticut</option><option value="Delaware" ' + selected("Delaware",pastval) +'>Delaware</option><option value="District Of Columbia" ' + selected("District Of Columbia",pastval) +'>District Of Columbia</option><option value="Florida" ' + selected("Florida",pastval) +'>Florida</option><option value="Georgia" ' + selected("Georgia",pastval) +'>Georgia</option><option value="Hawaii" ' + selected("Hawaii",pastval) +'>Hawaii</option><option value="Idaho" ' + selected("Idaho",pastval) +'>Idaho</option><option value="Illinois" ' + selected("Illinois",pastval) +'>Illinois</option><option value="Indiana" ' + selected("Indiana",pastval) +'>Indiana</option><option value="Iowa" ' + selected("Iowa",pastval) +'>Iowa</option><option value="Kansas" ' + selected("Kansas",pastval) +'>Kansas</option><option value="Kentucky" ' + selected("Kentucky",pastval) +'>Kentucky</option><option value="Louisiana" ' + selected("Louisiana",pastval) +'>Louisiana</option><option value="Maine" ' + selected("Maine",pastval) +'>Maine</option><option value="Maryland" ' + selected("Maryland",pastval) +'>Maryland</option><option value="Massachusetts" ' + selected("Massachusetts",pastval) +'>Massachusetts</option><option value="Michigan" ' + selected("Michigan",pastval) +'>Michigan</option><option value="Minnesota" ' + selected("Minnesota",pastval) +'>Minnesota</option><option value="Mississippi" ' + selected("Mississippi",pastval) +'>Mississippi</option><option value="Missouri" ' + selected("Missouri",pastval) +'>Missouri</option><option value="Montana" ' + selected("Montana",pastval) +'>Montana</option><option value="Nebraska" ' + selected("Nebraska",pastval) +'>Nebraska</option><option value="Nevada" ' + selected("Nevada",pastval) +'>Nevada</option><option value="New Hampshire" ' + selected("New Hampshire",pastval) +'>New Hampshire</option><option value="New Jersey" ' + selected("New Jersey",pastval) +'>New Jersey</option><option value="New Mexico" ' + selected("New Mexico",pastval) +'>New Mexico</option><option value="New York" ' + selected("New York",pastval) +'>New York</option><option value="North Carolina" ' + selected("North Carolina",pastval) +'>North Carolina</option><option value="North Dakota" ' + selected("North Dakota",pastval) +'>North Dakota</option><option value="Ohio" ' + selected("Ohio",pastval) +'>Ohio</option><option value="Oklahoma" ' + selected("Oklahoma",pastval) +'>Oklahoma</option><option value="Oregon" ' + selected("Oregon",pastval) +'>Oregon</option><option value="Pennsylvania" ' + selected("Pennsylvania",pastval) +'>Pennsylvania</option><option value="Rhode Island" ' + selected("Rhode Island",pastval) +'>Rhode Island</option><option value="South Carolina" ' + selected("South Carolina",pastval) +'>South Carolina</option><option value="South Dakota" ' + selected("South Dakota",pastval) +'>South Dakota</option><option value="Tennessee" ' + selected("Tennessee",pastval) +'>Tennessee</option><option value="Texas" ' + selected("Texas",pastval) +'>Texas</option><option value="Utah" ' + selected("Utah",pastval) +'>Utah</option><option value="Vermont" ' + selected("Vermont",pastval) +'>Vermont</option><option value="Virginia" ' + selected("Virginia",pastval) +'>Virginia</option><option value="Washington" ' + selected("Washington",pastval) +'>Washington</option><option value="West Virginia" ' + selected("West Virginia",pastval) +'>West Virginia</option><option value="Wisconsin" ' + selected("Wisconsin",pastval) +'>Wisconsin</option><option value="Wyoming" ' + selected("Wyoming",pastval) +'>Wyoming</option><option value="Armed Forces (AA)" ' + selected("Armed Forces (AA)",pastval) +'>Armed Forces (AA)</option><option value="Armed Forces (AE)" ' + selected("Armed Forces (AE)",pastval) +'>Armed Forces (AE)</option><option value="Armed Forces (AP)" ' + selected("Armed Forces (AP)",pastval) +'>Armed Forces (AP)</option></select></p><p class="half"><label for="">ZIP<span class="required">*</span></label><input id="input-s-zip" value="' + read("s_zip") + '" type="text"></p>';
			document.getElementById('checkout-shipping').innerHTML = htmlString;
	}
	function show_notes () {
		var htmlString = '<div><h3><label><input id="input-dif-ship" onclick="dif_ship();" class="checkbox" value="1" type="checkbox">Ship to a different address?</label></h3></div><div id="checkout-shipping"></div><p class="full"><label>Order notes</label><textarea  id="input-note" placeholder="Notes on your order, e.g. special notes concerning delivery." rows="2" cols="5"></textarea></p><h3>Sign up for our emails.</h3><p><label><input  id="input-weekly-wire" class="checkbox" value="1" type="checkbox"> HLA Weekly Wire</label></p><br><p><label><input id="input-pha-news" class="checkbox" value="1" type="checkbox"> PHA Newsletter</label></p>';
		
		document.getElementById('checkout-notes').innerHTML = htmlString;
	}
	function dif_ship () {
		if (document.getElementById("input-dif-ship").checked) {
			document.getElementById("checkout-shipping").style = "display: block;";
		}else{
			document.getElementById("checkout-shipping").style = "display: none;";
		};
	}
	function show_continue () {
		var htmlString = '<p id="error" class="full"></p><p class="full">Total Donation: $' + my_total(JSON.parse(localStorage.getItem("items"))).toFixed(2).toString() + '</p><p id="error-or-continue" class="full"><a class="shop-buttons" onclick="submit();">Request Product</a></p>';
		
		document.getElementById('checkout-continue').innerHTML = htmlString;
	}
	function countryChange (type) {
		var val = document.getElementById('input-' + type + '-country').value;
		var change = false;
		var html = "";
		var pastval = read(type + "_state");
		if (val == "United States (US)"){
			change = true;
			html = '<label for="billing_state" class="">State<span class="required">*</span></label><select id="input-' + type + '-state" name="billing_state" id="billing_state" class="state_select select2-hidden-accessible" data-placeholder="" tabindex="-1" aria-hidden="true"><br><option value="">Select an option…</option><option value="Alabama" ' + selected("Alabama",pastval) +'>Alabama</option><option value="Alaska" ' + selected("Alaska",pastval) +'>Alaska</option><option value="Arizona" ' + selected("Arizona",pastval) +'>Arizona</option><option value="Arkansas" ' + selected("Arkansas",pastval) +'>Arkansas</option><option value="California" ' + selected("California",pastval) +'>California</option><option value="Colorado" ' + selected("Colorado",pastval) +'>Colorado</option><option value="Connecticut" ' + selected("Connecticut",pastval) +'>Connecticut</option><option value="Delaware" ' + selected("Delaware",pastval) +'>Delaware</option><option value="District Of Columbia" ' + selected("District Of Columbia",pastval) +'>District Of Columbia</option><option value="Florida" ' + selected("Florida",pastval) +'>Florida</option><option value="Georgia" ' + selected("Georgia",pastval) +'>Georgia</option><option value="Hawaii" ' + selected("Hawaii",pastval) +'>Hawaii</option><option value="Idaho" ' + selected("Idaho",pastval) +'>Idaho</option><option value="Illinois" ' + selected("Illinois",pastval) +'>Illinois</option><option value="Indiana" ' + selected("Indiana",pastval) +'>Indiana</option><option value="Iowa" ' + selected("Iowa",pastval) +'>Iowa</option><option value="Kansas" ' + selected("Kansas",pastval) +'>Kansas</option><option value="Kentucky" ' + selected("Kentucky",pastval) +'>Kentucky</option><option value="Louisiana" ' + selected("Louisiana",pastval) +'>Louisiana</option><option value="Maine" ' + selected("Maine",pastval) +'>Maine</option><option value="Maryland" ' + selected("Maryland",pastval) +'>Maryland</option><option value="Massachusetts" ' + selected("Massachusetts",pastval) +'>Massachusetts</option><option value="Michigan" ' + selected("Michigan",pastval) +'>Michigan</option><option value="Minnesota" ' + selected("Minnesota",pastval) +'>Minnesota</option><option value="Mississippi" ' + selected("Mississippi",pastval) +'>Mississippi</option><option value="Missouri" ' + selected("Missouri",pastval) +'>Missouri</option><option value="Montana" ' + selected("Montana",pastval) +'>Montana</option><option value="Nebraska" ' + selected("Nebraska",pastval) +'>Nebraska</option><option value="Nevada" ' + selected("Nevada",pastval) +'>Nevada</option><option value="New Hampshire" ' + selected("New Hampshire",pastval) +'>New Hampshire</option><option value="New Jersey" ' + selected("New Jersey",pastval) +'>New Jersey</option><option value="New Mexico" ' + selected("New Mexico",pastval) +'>New Mexico</option><option value="New York" ' + selected("New York",pastval) +'>New York</option><option value="North Carolina" ' + selected("North Carolina",pastval) +'>North Carolina</option><option value="North Dakota" ' + selected("North Dakota",pastval) +'>North Dakota</option><option value="Ohio" ' + selected("Ohio",pastval) +'>Ohio</option><option value="Oklahoma" ' + selected("Oklahoma",pastval) +'>Oklahoma</option><option value="Oregon" ' + selected("Oregon",pastval) +'>Oregon</option><option value="Pennsylvania" ' + selected("Pennsylvania",pastval) +'>Pennsylvania</option><option value="Rhode Island" ' + selected("Rhode Island",pastval) +'>Rhode Island</option><option value="South Carolina" ' + selected("South Carolina",pastval) +'>South Carolina</option><option value="South Dakota" ' + selected("South Dakota",pastval) +'>South Dakota</option><option value="Tennessee" ' + selected("Tennessee",pastval) +'>Tennessee</option><option value="Texas" ' + selected("Texas",pastval) +'>Texas</option><option value="Utah" ' + selected("Utah",pastval) +'>Utah</option><option value="Vermont" ' + selected("Vermont",pastval) +'>Vermont</option><option value="Virginia" ' + selected("Virginia",pastval) +'>Virginia</option><option value="Washington" ' + selected("Washington",pastval) +'>Washington</option><option value="West Virginia" ' + selected("West Virginia",pastval) +'>West Virginia</option><option value="Wisconsin" ' + selected("Wisconsin",pastval) +'>Wisconsin</option><option value="Wyoming" ' + selected("Wyoming",pastval) +'>Wyoming</option><option value="Armed Forces (AA)" ' + selected("Armed Forces (AA)",pastval) +'>Armed Forces (AA)</option><option value="Armed Forces (AE)" ' + selected("Armed Forces (AE)",pastval) +'>Armed Forces (AE)</option><option value="Armed Forces (AP)" ' + selected("Armed Forces (AP)",pastval) +'>Armed Forces (AP)</option></select>';
		}else if (val == "Canada"){
			change = true;
			html = '<label for="billing_state" class="">Province<span class="required">*</span></label><select id="input-' + type + '-state" name="billing_state" id="billing_state" class="state_select select2-hidden-accessible" data-placeholder="" tabindex="-1" aria-hidden="true"><br><option value="">Select an option…</option><option value="Alberta" ' + selected("Alberta",pastval) +'>Alberta</option><option value="British Columbia" ' + selected("British Columbia",pastval) +'>British Columbia</option><option value="Manitoba" ' + selected("Manitoba",pastval) +'>Manitoba</option><option value="New Brunswick" ' + selected("New Brunswick",pastval) +'>New Brunswick</option><option value="Newfoundland and Labrador" ' + selected("Newfoundland and Labrador",pastval) +'>Newfoundland and Labrador</option><option value="Northwest Territories" ' + selected("Northwest Territories",pastval) +'>Northwest Territories</option><option value="Nova Scotia" ' + selected("Nova Scotia",pastval) +'>Nova Scotia</option><option value="Nunavut" ' + selected("Nunavut",pastval) +'>Nunavut</option><option value="Ontario" ' + selected("Ontario",pastval) +'>Ontario</option><option value="Prince Edward Island" ' + selected("Prince Edward Island",pastval) +'>Prince Edward Island</option><option value="Quebec" ' + selected("Quebec",pastval) +'>Quebec</option><option value="Saskatchewan" ' + selected("Saskatchewan",pastval) +'>Saskatchewan</option><option value="Yukon Territory" ' + selected("Yukon Territory",pastval) +'>Yukon Territory</option></select>';
		}else{
			html = '<label for="">State<span class="required">*</span></label><input id="input-' + type + '-state" value="' + read(type + "_state") + '" type="text">';
		}
		document.getElementById(type + '_state').innerHTML = html;
	}
	function selected (arga,argb) {
		if(arga == argb){
			return 'selected="selected"';
		}else if((arga == "United States (US)" && argb == "") || (argb == "United States (US)" && arga == "")){
			return 'selected="selected"';
		}else{
			return '';
		}
	}
	
	function read (argument) {
		var data = JSON.parse(localStorage.getItem(argument)) || null;
		if(data != null){
			return data;
		}
		return "";
	}
	function submit () {
		document.getElementById('error-or-continue').innerHTML = '<i style="-webkit-animation-name: spin;-webkit-animation-duration: 800ms;-webkit-animation-iteration-count: infinite;-webkit-animation-timing-function: linear;-moz-animation-name: spin;-moz-animation-duration: 800ms;-moz-animation-iteration-count: infinite;-moz-animation-timing-function: linear;-ms-animation-name: spin;-ms-animation-duration: 800ms;-ms-animation-iteration-count: infinite;-ms-animation-timing-function: linear;-o-transition: rotate(3600deg);" class="fa fa-spinner" aria-hidden="true"></i> Loading...';
		var total = my_total(JSON.parse(localStorage.getItem("items")));
		if (total>0) {
			get_payeezy_info(total);
		}else{
			continue_submit(); 
		}
	}
	function continue_submit () {
		var b_f_name = document.getElementById("input-b-f-name").value;
		var b_l_name = document.getElementById("input-b-l-name").value;
		var b_o_name = document.getElementById("input-b-o-name").value;
		var b_email = document.getElementById("input-b-email").value;
		var b_phone = document.getElementById("input-b-phone").value;
		var b_country = document.getElementById("input-b-country").value;
		var b_address_1 = document.getElementById("input-b-address-1").value;
		var b_address_2 = document.getElementById("input-b-address-2").value;
		var b_city = document.getElementById("input-b-city").value;
		var b_state = document.getElementById("input-b-state").value;
		var b_zip = document.getElementById("input-b-zip").value;

		var s_f_name = document.getElementById("input-s-f-name").value;
		var s_l_name = document.getElementById("input-s-l-name").value;
		var s_o_name = document.getElementById("input-s-o-name").value;
		var s_email = document.getElementById("input-s-email").value;
		var s_phone = document.getElementById("input-s-phone").value;
		var s_country = document.getElementById("input-s-country").value;
		var s_address_1 = document.getElementById("input-s-address-1").value;
		var s_address_2 = document.getElementById("input-s-address-2").value;
		var s_city = document.getElementById("input-s-city").value;
		var s_state = document.getElementById("input-s-state").value;
		var s_zip = document.getElementById("input-s-zip").value;
		if (b_f_name != "" && b_l_name != "" && check_email(b_email) && b_phone != "" && b_country != "" && b_address_1 != "" && b_city != "" && b_state != "" && b_zip != "") {
			if (document.getElementById("input-dif-ship").checked) {
				if (s_f_name != "" && s_l_name != "" && check_email(s_email) && s_phone != "" && s_country != "" && s_address_1 != "" && s_city != "" && s_state != "" && s_zip != "") {
					localStorage.setItem("b_f_name", JSON.stringify(b_f_name));
					localStorage.setItem("b_l_name", JSON.stringify(b_l_name));
					localStorage.setItem("b_o_name", JSON.stringify(b_o_name));
					localStorage.setItem("b_email", JSON.stringify(b_email));
					localStorage.setItem("b_phone", JSON.stringify(b_phone));
					localStorage.setItem("b_country", JSON.stringify(b_country));
					localStorage.setItem("b_address_1", JSON.stringify(b_address_1));
					localStorage.setItem("b_address_2", JSON.stringify(b_address_2));
					localStorage.setItem("b_city", JSON.stringify(b_city));
					localStorage.setItem("b_state", JSON.stringify(b_state));
					localStorage.setItem("b_zip", JSON.stringify(b_zip));

					localStorage.setItem("s_f_name", JSON.stringify(s_f_name));
					localStorage.setItem("s_l_name", JSON.stringify(s_l_name));
					localStorage.setItem("s_o_name", JSON.stringify(s_o_name));
					localStorage.setItem("s_email", JSON.stringify(s_email));
					localStorage.setItem("s_phone", JSON.stringify(s_phone));
					localStorage.setItem("s_country", JSON.stringify(s_country));
					localStorage.setItem("s_address_1", JSON.stringify(s_address_1));
					localStorage.setItem("s_address_2", JSON.stringify(s_address_2));
					localStorage.setItem("s_city", JSON.stringify(s_city));
					localStorage.setItem("s_state", JSON.stringify(s_state));
					localStorage.setItem("s_zip", JSON.stringify(s_zip));
					
					var notes = new Object();
					notes.note = document.getElementById("input-note").value;
					notes.ww = document.getElementById("input-weekly-wire").checked;
					notes.pha = document.getElementById("input-pha-news").checked;
					localStorage.setItem("notes", JSON.stringify(notes));

					var total = my_total(JSON.parse(localStorage.getItem("items")));
					if (total>0) {
						var string = "";
						string = string + '<input type="hidden" name="x_first_name" 		value="' + b_f_name + '" />';
	  					string = string + '<input type="hidden" name="x_last_name"  		value="' + b_l_name + '" />';
	  					string = string + '<input type="hidden" name="x_company"    		value="' + b_o_name + '" />';
	  					string = string + '<input type="hidden" name="x_address"    		value="' + b_address_1 + " " + b_address_2 + '" />';
	  					string = string + '<input type="hidden" name="x_city"       		value="' + b_city + '" />';
	  					string = string + '<input type="hidden" name="x_state"      		value="' + b_state + '" />';
	  					string = string + '<input type="hidden" name="x_zip"        		value="' + b_zip + '" />';
	  					string = string + '<input type="hidden" name="x_country"    		value="' + b_country + '" />';
	  					string = string + '<input type="hidden" name="x_phone"      		value="' + b_phone + '" />';
	  					string = string + '<input type="hidden" name="x_email"      		value="' + b_email + '" />';

	  					string = string + '<input type="hidden" name="x_ship_to_first_name" value="' + s_f_name + '" />';
	  					string = string + '<input type="hidden" name="x_ship_to_last_name"  value="' + s_l_name + '" />';
	  					string = string + '<input type="hidden" name="x_ship_to_company"    value="' + s_o_name + '" />';
	  					string = string + '<input type="hidden" name="x_ship_to_address"    value="' + s_address_1 + " " + s_address_2 + '" />';
	  					string = string + '<input type="hidden" name="x_ship_to_city"       value="' + s_city + '" />';
	  					string = string + '<input type="hidden" name="x_ship_to_state"      value="' + s_state + '" />';
	  					string = string + '<input type="hidden" name="x_ship_to_zip"        value="' + s_zip + '" />';
	  					string = string + '<input type="hidden" name="x_ship_to_country"    value="' + s_country + '" />';

						document.getElementById("payeesyformuser").innerHTML = string;
						document.getElementById("{{ site.payeesyform }}").submit(); 
					}else{
						window.location.assign("{{ site.baseurl }}{{ site.thankyoutemp }}/?Card_Number=null");
					};
				}else{
					if(s_f_name == ""){
						document.getElementById("input-s-f-name").style = "border: solid red 2px;";
					}
					if(s_l_name == ""){
						document.getElementById("input-s-l-name").style = "border: solid red 2px;";
					}
					if(!check_email(s_email)){
						document.getElementById("input-s-email").style = "border: solid red 2px;";
					}
					if(s_phone == ""){
						document.getElementById("input-s-phone").style = "border: solid red 2px;";
					}
					if(s_country == ""){
						document.getElementById("input-s-country").style = "border: solid red 2px;";
					}
					if(s_address_1 == ""){
						document.getElementById("input-s-address-1").style = "border: solid red 2px;";
					}
					if(s_city == ""){
						document.getElementById("input-s-city").style = "border: solid red 2px;";
					}
					if(s_state == ""){
						document.getElementById("input-s-state").style = "border: solid red 2px;";
					}
					if(s_zip == ""){
						document.getElementById("input-s-zip").style = "border: solid red 2px;";
					}
					window.scrollTo(0, 0);		
				}
			}else{
				localStorage.setItem("b_f_name", JSON.stringify(b_f_name));
				localStorage.setItem("b_l_name", JSON.stringify(b_l_name));
				localStorage.setItem("b_o_name", JSON.stringify(b_o_name));
				localStorage.setItem("b_email", JSON.stringify(b_email));
				localStorage.setItem("b_phone", JSON.stringify(b_phone));
				localStorage.setItem("b_country", JSON.stringify(b_country));
				localStorage.setItem("b_address_1", JSON.stringify(b_address_1));
				localStorage.setItem("b_address_2", JSON.stringify(b_address_2));
				localStorage.setItem("b_city", JSON.stringify(b_city));
				localStorage.setItem("b_state", JSON.stringify(b_state));
				localStorage.setItem("b_zip", JSON.stringify(b_zip));

				localStorage.setItem("s_f_name", JSON.stringify(b_f_name));
				localStorage.setItem("s_l_name", JSON.stringify(b_l_name));
				localStorage.setItem("s_o_name", JSON.stringify(b_o_name));
				localStorage.setItem("s_email", JSON.stringify(b_email));
				localStorage.setItem("s_phone", JSON.stringify(b_phone));
				localStorage.setItem("s_country", JSON.stringify(b_country));
				localStorage.setItem("s_address_1", JSON.stringify(b_address_1));
				localStorage.setItem("s_address_2", JSON.stringify(b_address_2));
				localStorage.setItem("s_city", JSON.stringify(b_city));
				localStorage.setItem("s_state", JSON.stringify(b_state));
				localStorage.setItem("s_zip", JSON.stringify(b_zip));
					
				var notes = new Object();
				notes.note = document.getElementById("input-note").value;
				notes.ww = document.getElementById("input-weekly-wire").checked;
				notes.pha = document.getElementById("input-pha-news").checked;
				localStorage.setItem("notes", JSON.stringify(notes));

				var total = my_total(JSON.parse(localStorage.getItem("items")));
				if (total>0) {
					var string = "";
					string = string + '<input type="hidden" name="x_first_name" 		value="' + b_f_name + '" />';
  					string = string + '<input type="hidden" name="x_last_name"  		value="' + b_l_name + '" />';
  					string = string + '<input type="hidden" name="x_company"    		value="' + b_o_name + '" />';
  					string = string + '<input type="hidden" name="x_address"    		value="' + b_address_1 + " " + b_address_2 + '" />';
  					string = string + '<input type="hidden" name="x_city"       		value="' + b_city + '" />';
  					string = string + '<input type="hidden" name="x_state"      		value="' + b_state + '" />';
  					string = string + '<input type="hidden" name="x_zip"        		value="' + b_zip + '" />';
  					string = string + '<input type="hidden" name="x_country"    		value="' + b_country + '" />';
  					string = string + '<input type="hidden" name="x_phone"      		value="' + b_phone + '" />';
  					string = string + '<input type="hidden" name="x_email"      		value="' + b_email + '" />';

  					string = string + '<input type="hidden" name="x_ship_to_first_name" value="' + b_f_name + '" />';
  					string = string + '<input type="hidden" name="x_ship_to_last_name"  value="' + b_l_name + '" />';
  					string = string + '<input type="hidden" name="x_ship_to_company"    value="' + b_o_name + '" />';
  					string = string + '<input type="hidden" name="x_ship_to_address"    value="' + b_address_1 + " " + s_address_2 + '" />';
  					string = string + '<input type="hidden" name="x_ship_to_city"       value="' + b_city + '" />';
  					string = string + '<input type="hidden" name="x_ship_to_state"      value="' + b_state + '" />';
  					string = string + '<input type="hidden" name="x_ship_to_zip"        value="' + b_zip + '" />';
  					string = string + '<input type="hidden" name="x_ship_to_country"    value="' + b_country + '" />';

					document.getElementById("payeesyformuser").innerHTML = string;
					document.getElementById("{{ site.payeesyform }}").submit(); 
				}else{
					window.location.assign("{{ site.baseurl }}{{ site.thankyoutemp }}/?Card_Number=null");
				};

			};
		}else{
			if(b_f_name == ""){
				document.getElementById("input-b-f-name").style = "border: solid red 2px;";
			}
			if(b_l_name == ""){
				document.getElementById("input-b-l-name").style = "border: solid red 2px;";
			}
			if(!check_email(b_email)){
				document.getElementById("input-b-email").style = "border: solid red 2px;";
			}
			if(b_phone == ""){
				document.getElementById("input-b-phone").style = "border: solid red 2px;";
			}
			if(b_country == ""){
				document.getElementById("input-b-country").style = "border: solid red 2px;";
			}
			if(b_address_1 == ""){
				document.getElementById("input-b-address-1").style = "border: solid red 2px;";
			}
			if(b_city == ""){
				document.getElementById("input-b-city").style = "border: solid red 2px;";
			}
			if(b_state == ""){
				document.getElementById("input-b-state").style = "border: solid red 2px;";
			}
			if(b_zip == ""){
				document.getElementById("input-b-zip").style = "border: solid red 2px;";
			}
			window.scrollTo(0, 0);
		};
	}
	function check_email(email){
		if(email.indexOf("@") != -1 && email.indexOf(".") != -1){
			return true;
		}else{
			return false;
		}
	}
	function dismiss_error () {
		document.getElementById('error').innerHTML = '';
	}
	function my_total (items) {
		var amount = 0;
		for (var i = items.length - 1; i >= 0; i--) {
			if (items[i].donation) {
				amount = amount + (Number(items[i].suggested_donation) * Number(items[i].quantity));
			};
		};
		return amount;
	}
	function get_payeezy_info (cost) {
		if (cost>0) {
			cost = cost.toFixed(2);
			var url = '{{ site.payeesyscript }}';
			var xml = new XMLHttpRequest();
			xml.open('POST',url,true);
			xml.responseType = 'json';
		    xml.onreadystatechange = function()
			{
			    if(this.readyState == 4){
			    	var status = xml.status;
				    if (status == 200) {
				    	make_pay_button(xml.response);
				    } else {
				        make_pay_error();
				    }
			    }
			}
		    xml.send(JSON.stringify({amount : cost}));
	    };

	}
	function make_pay_button (data) {
		var string = '<form action="https://checkout.globalgatewaye4.firstdata.com/payment" id="{{ site.payeesyform }}" method="post">';
  		string = string + '<input type="hidden" name="x_login" value="' + data.x_login + '" />';
  		string = string + '<input type="hidden" name="x_fp_sequence" value="' + data.x_fp_sequence + '" />';
  		string = string + '<input type="hidden" name="x_fp_hash" value="' + data.signature + '" />';
  		string = string + '<input type="hidden" name="x_amount" value="' + data.x_amount + '" />';
  		string = string + '<input type="hidden" name="x_currency_code" value="' + data.x_currency_code + '" />';
  		string = string + '<input type="hidden" name="x_fp_timestamp" value="' + data.x_fp_timestamp + '" />';
  		string = string + '<input type="hidden" name="x_type" value="AUTH_ONLY" />';

  		var items = JSON.parse(localStorage.getItem("items")) || new Array();
  		if (items.length >= 1) {
			for (var i = 0; i < items.length; i++) {
				var amount = 0;
				if (items[i].donation) {
					amount = items[i].suggested_donation;
				};
				if(parseInt(items[i].quantity) > 0){
  					string = string + '<input type="hidden" name="x_line_item" value="' + items[i].id_number + '<|>' + items[i].item + '<|>' + items[i].item + '<|>' + parseInt(items[i].quantity) + '<|>' + amount + '<|>N<|>' + items[i].id_number + '<|><|><|><|><|><|><|><|>' + parseInt(items[i].quantity) * amount + '" />';
  				}
  			}
  		}
  		
  		string = string + '<div id="payeesyformuser"></div>';

  		string = string + '<input type="hidden" name="x_show_form" value="PAYMENT_FORM" />';
  		string = string + '<input type="submit" value="pay" /></form>';
		document.getElementById('checkout-payment').innerHTML = string;
		continue_submit();
	}
	function make_pay_error () {
		document.getElementById('error-or-continue').innerHTML = 'Error: needs internet connection (then refresh page).';
	}
</script> 