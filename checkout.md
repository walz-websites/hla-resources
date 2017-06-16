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
		var htmlString = '<h3>Billing Details</h3><p class="half first"><label for="">First Name</label><input id="input-b-f-name" type="text" value="' + read("b_f_name") + '"></p><p class="half"><label for="">Last Name</label><input id="input-b-l-name" type="text" value="' + read("b_l_name") + '"></p><p class="full"><label for="">Organization Name</label><input id="input-b-o-name" type="text" value="' + read("b_o_name") + '"></p><p class="half first"><label for="">Email Address</label><input id="input-b-email" type="text" value="' + read("b_email") + '"></p><p class="half"><label for="">Phone</label><input id="input-b-phone" type="text" value="' + read("b_phone") + '"></p><p class="full">{% include select-country.html type="b" %}</p><p class="full"><label for="">Address</label><input id="input-b-address-1" value="' + read("b_address_1") + '" type="text" placeholder="Street Address" style="margin-bottom:5px;"><input id="input-b-address-2" value="' + read("b_address_2") + '" type="text" placeholder="Apartment, suite, unit etc. (optional)"></p><p class="full"><label for="">Town / City</label><input id="input-b-city" value="' + read("b_city") + '" type="text"></p><p class="half first" id="b_state"><label for="billing_state" class="">State</label><select id="input-b-state" name="billing_state" id="billing_state" class="state_select select2-hidden-accessible" data-placeholder="" tabindex="-1" aria-hidden="true"><br><option value="">Select an option…</option><option value="AL" ' + selected("AL",pastval) +'>Alabama</option><option value="AK" ' + selected("AK",pastval) +'>Alaska</option><option value="AZ" ' + selected("AZ",pastval) +'>Arizona</option><option value="AR" ' + selected("AR",pastval) +'>Arkansas</option><option value="CA" ' + selected("CA",pastval) +'>California</option><option value="CO" ' + selected("CO",pastval) +'>Colorado</option><option value="CT" ' + selected("CT",pastval) +'>Connecticut</option><option value="DE" ' + selected("DE",pastval) +'>Delaware</option><option value="DC" ' + selected("DC",pastval) +'>District Of Columbia</option><option value="FL" ' + selected("FL",pastval) +'>Florida</option><option value="GA" ' + selected("GA",pastval) +'>Georgia</option><option value="HI" ' + selected("HI",pastval) +'>Hawaii</option><option value="ID" ' + selected("ID",pastval) +'>Idaho</option><option value="IL" ' + selected("IL",pastval) +'>Illinois</option><option value="IN" ' + selected("IN",pastval) +'>Indiana</option><option value="IA" ' + selected("IA",pastval) +'>Iowa</option><option value="KS" ' + selected("KS",pastval) +'>Kansas</option><option value="KY" ' + selected("KY",pastval) +'>Kentucky</option><option value="LA" ' + selected("LA",pastval) +'>Louisiana</option><option value="ME" ' + selected("ME",pastval) +'>Maine</option><option value="MD" ' + selected("MD",pastval) +'>Maryland</option><option value="MA" ' + selected("MA",pastval) +'>Massachusetts</option><option value="MI" ' + selected("MI",pastval) +'>Michigan</option><option value="MN" ' + selected("MN",pastval) +'>Minnesota</option><option value="MS" ' + selected("MS",pastval) +'>Mississippi</option><option value="MO" ' + selected("MO",pastval) +'>Missouri</option><option value="MT" ' + selected("MT",pastval) +'>Montana</option><option value="NE" ' + selected("NE",pastval) +'>Nebraska</option><option value="NV" ' + selected("NV",pastval) +'>Nevada</option><option value="NH" ' + selected("NH",pastval) +'>New Hampshire</option><option value="NJ" ' + selected("NJ",pastval) +'>New Jersey</option><option value="NM" ' + selected("NM",pastval) +'>New Mexico</option><option value="NY" ' + selected("NY",pastval) +'>New York</option><option value="NC" ' + selected("NC",pastval) +'>North Carolina</option><option value="ND" ' + selected("ND",pastval) +'>North Dakota</option><option value="OH" ' + selected("OH",pastval) +'>Ohio</option><option value="OK" ' + selected("OK",pastval) +'>Oklahoma</option><option value="OR" ' + selected("OR",pastval) +'>Oregon</option><option value="PA" ' + selected("PA",pastval) +'>Pennsylvania</option><option value="RI" ' + selected("RI",pastval) +'>Rhode Island</option><option value="SC" ' + selected("SC",pastval) +'>South Carolina</option><option value="SD" ' + selected("SD",pastval) +'>South Dakota</option><option value="TN" ' + selected("TN",pastval) +'>Tennessee</option><option value="TX" ' + selected("TX",pastval) +'>Texas</option><option value="UT" ' + selected("UT",pastval) +'>Utah</option><option value="VT" ' + selected("VT",pastval) +'>Vermont</option><option value="VA" ' + selected("VA",pastval) +'>Virginia</option><option value="WA" ' + selected("WA",pastval) +'>Washington</option><option value="WV" ' + selected("WV",pastval) +'>West Virginia</option><option value="WI" ' + selected("WI",pastval) +'>Wisconsin</option><option value="WY" ' + selected("WY",pastval) +'>Wyoming</option><option value="AA" ' + selected("AA",pastval) +'>Armed Forces (AA)</option><option value="AE" ' + selected("AE",pastval) +'>Armed Forces (AE)</option><option value="AP" ' + selected("AP",pastval) +'>Armed Forces (AP)</option></select></p><p class="half"><label for="">ZIP</label><input id="input-b-zip" value="' + read("b_zip") + '" type="text"></p>';
			document.getElementById('checkout-billing').innerHTML = htmlString;
	}
	function show_shipping () {
		var pastval = read("s_state");
		var pastcval = read("s_country");
		var htmlString = '<p class="half first"><label for="">First Name</label><input id="input-s-f-name" type="text" value="' + read("s_f_name") + '"></p><p class="half"><label for="">Last Name</label><input id="input-s-l-name" type="text" value="' + read("s_l_name") + '"></p><p class="full"><label for="">Organization Name</label><input id="input-s-o-name" type="text" value="' + read("s_o_name") + '"></p><p class="half first"><label for="">Email Address</label><input id="input-s-email" type="text" value="' + read("s_email") + '"></p><p class="half"><label for="">Phone</label><input id="input-s-phone" type="text" value="' + read("s_phone") + '"></p><p class="full">{% include select-country.html type="s" %}</p><p class="full"><label for="">Address</label><input id="input-s-address-1" value="' + read("s_address_1") + '" type="text" placeholder="Street Address" style="margin-bottom:5px;"><input id="input-s-address-2" value="' + read("s_address_2") + '" type="text" placeholder="Apartment, suite, unit etc. (optional)"></p><p class="full"><label for="">Town / City</label><input id="input-s-city" value="' + read("s_city") + '" type="text"></p><p class="half first" id="s_state"><label for="billing_state" class="">State</label><select id="input-s-state" name="billing_state" id="billing_state" class="state_select select2-hidden-accessible" data-placeholder="" tabindex="-1" aria-hidden="true"><br><option value="">Select an option…</option><option value="AL" ' + selected("AL",pastval) +'>Alabama</option><option value="AK" ' + selected("AK",pastval) +'>Alaska</option><option value="AZ" ' + selected("AZ",pastval) +'>Arizona</option><option value="AR" ' + selected("AR",pastval) +'>Arkansas</option><option value="CA" ' + selected("CA",pastval) +'>California</option><option value="CO" ' + selected("CO",pastval) +'>Colorado</option><option value="CT" ' + selected("CT",pastval) +'>Connecticut</option><option value="DE" ' + selected("DE",pastval) +'>Delaware</option><option value="DC" ' + selected("DC",pastval) +'>District Of Columbia</option><option value="FL" ' + selected("FL",pastval) +'>Florida</option><option value="GA" ' + selected("GA",pastval) +'>Georgia</option><option value="HI" ' + selected("HI",pastval) +'>Hawaii</option><option value="ID" ' + selected("ID",pastval) +'>Idaho</option><option value="IL" ' + selected("IL",pastval) +'>Illinois</option><option value="IN" ' + selected("IN",pastval) +'>Indiana</option><option value="IA" ' + selected("IA",pastval) +'>Iowa</option><option value="KS" ' + selected("KS",pastval) +'>Kansas</option><option value="KY" ' + selected("KY",pastval) +'>Kentucky</option><option value="LA" ' + selected("LA",pastval) +'>Louisiana</option><option value="ME" ' + selected("ME",pastval) +'>Maine</option><option value="MD" ' + selected("MD",pastval) +'>Maryland</option><option value="MA" ' + selected("MA",pastval) +'>Massachusetts</option><option value="MI" ' + selected("MI",pastval) +'>Michigan</option><option value="MN" ' + selected("MN",pastval) +'>Minnesota</option><option value="MS" ' + selected("MS",pastval) +'>Mississippi</option><option value="MO" ' + selected("MO",pastval) +'>Missouri</option><option value="MT" ' + selected("MT",pastval) +'>Montana</option><option value="NE" ' + selected("NE",pastval) +'>Nebraska</option><option value="NV" ' + selected("NV",pastval) +'>Nevada</option><option value="NH" ' + selected("NH",pastval) +'>New Hampshire</option><option value="NJ" ' + selected("NJ",pastval) +'>New Jersey</option><option value="NM" ' + selected("NM",pastval) +'>New Mexico</option><option value="NY" ' + selected("NY",pastval) +'>New York</option><option value="NC" ' + selected("NC",pastval) +'>North Carolina</option><option value="ND" ' + selected("ND",pastval) +'>North Dakota</option><option value="OH" ' + selected("OH",pastval) +'>Ohio</option><option value="OK" ' + selected("OK",pastval) +'>Oklahoma</option><option value="OR" ' + selected("OR",pastval) +'>Oregon</option><option value="PA" ' + selected("PA",pastval) +'>Pennsylvania</option><option value="RI" ' + selected("RI",pastval) +'>Rhode Island</option><option value="SC" ' + selected("SC",pastval) +'>South Carolina</option><option value="SD" ' + selected("SD",pastval) +'>South Dakota</option><option value="TN" ' + selected("TN",pastval) +'>Tennessee</option><option value="TX" ' + selected("TX",pastval) +'>Texas</option><option value="UT" ' + selected("UT",pastval) +'>Utah</option><option value="VT" ' + selected("VT",pastval) +'>Vermont</option><option value="VA" ' + selected("VA",pastval) +'>Virginia</option><option value="WA" ' + selected("WA",pastval) +'>Washington</option><option value="WV" ' + selected("WV",pastval) +'>West Virginia</option><option value="WI" ' + selected("WI",pastval) +'>Wisconsin</option><option value="WY" ' + selected("WY",pastval) +'>Wyoming</option><option value="AA" ' + selected("AA",pastval) +'>Armed Forces (AA)</option><option value="AE" ' + selected("AE",pastval) +'>Armed Forces (AE)</option><option value="AP" ' + selected("AP",pastval) +'>Armed Forces (AP)</option></select></p><p class="half"><label for="">ZIP</label><input id="input-s-zip" value="' + read("s_zip") + '" type="text"></p>';
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
			html = '<label for="billing_state" class="">State</label><select id="input-' + type + '-state" name="billing_state" id="billing_state" class="state_select select2-hidden-accessible" data-placeholder="" tabindex="-1" aria-hidden="true"><br><option value="">Select an option…</option><option value="AL" ' + selected("AL",pastval) +'>Alabama</option><option value="AK" ' + selected("AK",pastval) +'>Alaska</option><option value="AZ" ' + selected("AZ",pastval) +'>Arizona</option><option value="AR" ' + selected("AR",pastval) +'>Arkansas</option><option value="CA" ' + selected("CA",pastval) +'>California</option><option value="CO" ' + selected("CO",pastval) +'>Colorado</option><option value="CT" ' + selected("CT",pastval) +'>Connecticut</option><option value="DE" ' + selected("DE",pastval) +'>Delaware</option><option value="DC" ' + selected("DC",pastval) +'>District Of Columbia</option><option value="FL" ' + selected("FL",pastval) +'>Florida</option><option value="GA" ' + selected("GA",pastval) +'>Georgia</option><option value="HI" ' + selected("HI",pastval) +'>Hawaii</option><option value="ID" ' + selected("ID",pastval) +'>Idaho</option><option value="IL" ' + selected("IL",pastval) +'>Illinois</option><option value="IN" ' + selected("IN",pastval) +'>Indiana</option><option value="IA" ' + selected("IA",pastval) +'>Iowa</option><option value="KS" ' + selected("KS",pastval) +'>Kansas</option><option value="KY" ' + selected("KY",pastval) +'>Kentucky</option><option value="LA" ' + selected("LA",pastval) +'>Louisiana</option><option value="ME" ' + selected("ME",pastval) +'>Maine</option><option value="MD" ' + selected("MD",pastval) +'>Maryland</option><option value="MA" ' + selected("MA",pastval) +'>Massachusetts</option><option value="MI" ' + selected("MI",pastval) +'>Michigan</option><option value="MN" ' + selected("MN",pastval) +'>Minnesota</option><option value="MS" ' + selected("MS",pastval) +'>Mississippi</option><option value="MO" ' + selected("MO",pastval) +'>Missouri</option><option value="MT" ' + selected("MT",pastval) +'>Montana</option><option value="NE" ' + selected("NE",pastval) +'>Nebraska</option><option value="NV" ' + selected("NV",pastval) +'>Nevada</option><option value="NH" ' + selected("NH",pastval) +'>New Hampshire</option><option value="NJ" ' + selected("NJ",pastval) +'>New Jersey</option><option value="NM" ' + selected("NM",pastval) +'>New Mexico</option><option value="NY" ' + selected("NY",pastval) +'>New York</option><option value="NC" ' + selected("NC",pastval) +'>North Carolina</option><option value="ND" ' + selected("ND",pastval) +'>North Dakota</option><option value="OH" ' + selected("OH",pastval) +'>Ohio</option><option value="OK" ' + selected("OK",pastval) +'>Oklahoma</option><option value="OR" ' + selected("OR",pastval) +'>Oregon</option><option value="PA" ' + selected("PA",pastval) +'>Pennsylvania</option><option value="RI" ' + selected("RI",pastval) +'>Rhode Island</option><option value="SC" ' + selected("SC",pastval) +'>South Carolina</option><option value="SD" ' + selected("SD",pastval) +'>South Dakota</option><option value="TN" ' + selected("TN",pastval) +'>Tennessee</option><option value="TX" ' + selected("TX",pastval) +'>Texas</option><option value="UT" ' + selected("UT",pastval) +'>Utah</option><option value="VT" ' + selected("VT",pastval) +'>Vermont</option><option value="VA" ' + selected("VA",pastval) +'>Virginia</option><option value="WA" ' + selected("WA",pastval) +'>Washington</option><option value="WV" ' + selected("WV",pastval) +'>West Virginia</option><option value="WI" ' + selected("WI",pastval) +'>Wisconsin</option><option value="WY" ' + selected("WY",pastval) +'>Wyoming</option><option value="AA" ' + selected("AA",pastval) +'>Armed Forces (AA)</option><option value="AE" ' + selected("AE",pastval) +'>Armed Forces (AE)</option><option value="AP" ' + selected("AP",pastval) +'>Armed Forces (AP)</option></select>';
		}else if (val == "Canada"){
			change = true;
			html = '<label for="billing_state" class="">Province</label><select id="input-' + type + '-state" name="billing_state" id="billing_state" class="state_select select2-hidden-accessible" data-placeholder="" tabindex="-1" aria-hidden="true"><br><option value="">Select an option…</option><option value="AB" ' + selected("AB",pastval) +'>Alberta</option><option value="BC" ' + selected("BC",pastval) +'>British Columbia</option><option value="MB" ' + selected("MB",pastval) +'>Manitoba</option><option value="NB" ' + selected("NB",pastval) +'>New Brunswick</option><option value="NL" ' + selected("NL",pastval) +'>Newfoundland and Labrador</option><option value="NT" ' + selected("NT",pastval) +'>Northwest Territories</option><option value="NS" ' + selected("NS",pastval) +'>Nova Scotia</option><option value="NU" ' + selected("NU",pastval) +'>Nunavut</option><option value="ON" ' + selected("ON",pastval) +'>Ontario</option><option value="PE" ' + selected("PE",pastval) +'>Prince Edward Island</option><option value="QC" ' + selected("QC",pastval) +'>Quebec</option><option value="SK" ' + selected("SK",pastval) +'>Saskatchewan</option><option value="YT" ' + selected("YT",pastval) +'>Yukon Territory</option></select>';
		}else{
			html = '<label for="">State</label><input id="input-' + type + '-state" value="' + read(type + "_state") + '" type="text">';
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
	function check_payment () {
		var total = my_total(JSON.parse(localStorage.getItem("items")));
		if (total>0) {
			get_payeezy_info(total);
		}else{
			document.getElementById('checkout-payment').innerHTML = "";
		};
		//setTimeout(check_payment(),10000);
	}
	function read (argument) {
		var data = JSON.parse(localStorage.getItem(argument)) || null;
		if(data != null){
			return data;
		}
		return "";
	}
	function submit () {
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
		if (b_f_name != "" && b_l_name != "" && b_email != "" && b_phone != "" && b_country != "" && b_address_1 != "" && b_city != "" && b_state != "" && b_zip != "") {
			if (document.getElementById("input-dif-ship").checked) {
				if (s_f_name != "" && s_l_name != "" && s_email != "" && s_phone != "" && s_country != "" && s_address_1 != "" && s_city != "" && s_state != "" && s_zip != "") {
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
						document.getElementById("{{ site.payeesyform }}").submit(); 
					}else{
						window.location.assign("{{ site.url }}{{ site.baseurl }}{{ site.thankyoutemp }}");
					};
				}else{
					document.getElementById('error').innerHTML = 'Error: Shipping information incomplete. <a onclick="dismiss_error();">Dismiss Error</a>';		
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
					document.getElementById("{{ site.payeesyform }}").submit(); 
				}else{
					window.location.assign("{{ site.url }}{{ site.baseurl }}{{ site.thankyoutemp }}");
				};

			};
		}else{
			document.getElementById('error').innerHTML = 'Error: Billing information incomplete. <a onclick="dismiss_error();">Dismiss Error</a>';
		};
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
	function get_payeezy_info (amount) {
		if (amount>0) {
			var url = '{{ site.payeesyscript }}?amount=' + amount;
			var xml = new XMLHttpRequest();
			xml.open('GET',url,true);
			xml.responseType = 'json';
			xml.onload = function() {
		      var status = xml.status;
		      if (status == 200) {
		        make_pay_button(xml.response);
		      } else {
		        make_pay_error();
		      }
		    };
		    xml.send();
	    };
	}
	function make_pay_button (data) {
		var string = '<form action="https://demo.globalgatewaye4.firstdata.com/pay" id="{{ site.payeesyform }}" method="post">';
  		string = string + '<input type="hidden" name="x_login" value="' + data.x_login + '" />';
  		string = string + '<input type="hidden" name="x_fp_sequence" value="' + data.x_fp_sequence + '" />';
  		string = string + '<input type="hidden" name="x_fp_hash" value="' + data.signature + '" />';
  		string = string + '<input type="hidden" name="x_amount" value="' + data.x_amount + '" />';
  		string = string + '<input type="hidden" name="x_currency_code" value="' + data.x_currency_code + '" />';
  		string = string + '<input type="hidden" name="x_fp_timestamp" value="' + data.x_fp_timestamp + '" />';
  		string = string + '<input type="hidden" name="x_show_form" value="PAYMENT_FORM" />';
  		string = string + '<input type="submit" value="test" /></form>';
		document.getElementById('checkout-payment').innerHTML = string;
	}
	function make_pay_error () {
		document.getElementById('error-or-continue').innerHTML = '<p>Error: needs internet connection (then refresh page).</p>';	
	}
	check_payment();
</script>