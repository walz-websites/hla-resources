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
		var htmlString = '<h3>Billing Details</h3><p class="half first"><label for="">First Name</label><input id="input-b-f-name" type="text" value="' + read("b_f_name") + '"></p><p class="half"><label for="">Last Name</label><input id="input-b-l-name" type="text" value="' + read("b_l_name") + '"></p><p class="full"><label for="">Organization Name</label><input id="input-b-o-name" type="text" value="' + read("b_o_name") + '"></p><p class="half first"><label for="">Email Address</label><input id="input-b-email" type="text" value="' + read("b_email") + '"></p><p class="half"><label for="">Phone</label><input id="input-b-phone" type="text" value="' + read("b_phone") + '"></p><p class="full">{{ include select-country.html type="b" }}</p><p class="full"><label for="">Address</label><input id="input-b-address-1" value="' + read("b_address_1") + '" type="text" placeholder="Street Address" style="margin-bottom:5px;"><input id="input-b-address-2" value="' + read("b_address_2") + '" type="text" placeholder="Apartment, suite, unit etc. (optional)"></p><p class="full"><label for="">Town / City</label><input id="input-b-city" value="' + read("b_city") + '" type="text"></p><p class="half first"><label for="">State</label><input id="input-b-state" value="' + read("b_state") + '" type="text"></p><p class="half"><label for="">ZIP</label><input id="input-b-zip" value="' + read("b_zip") + '" type="text"></p>';
			document.getElementById('checkout-billing').innerHTML = htmlString;
	}
	function show_shipping () {
		var htmlString = '<h3>Shipping Details</h3><p class="half first"><label for="">First Name</label><input id="input-s-f-name" type="text" value="' + read("s_f_name") + '"></p><p class="half"><label for="">Last Name</label><input id="input-s-l-name" type="text" value="' + read("s_l_name") + '"></p><p class="full"><label for="">Organization Name</label><input id="input-s-o-name" type="text" value="' + read("s_o_name") + '"></p><p class="half first"><label for="">Email Address</label><input id="input-s-email" type="text" value="' + read("s_email") + '"></p><p class="half"><label for="">Phone</label><input id="input-s-phone" type="text" value="' + read("s_phone") + '"></p><p class="full"><label for="">Country</label><select id="input-s-country" name="billing_country" class="country_to_state country_select select2-hidden-accessible" tabindex="-1" aria-hidden="true" style="width: 98%;" value="' + read("s_country") + '"><option value="">Select a country…</option>	<option value="AX">Åland Islands</option>	<option value="AF">Afghanistan</option>	<option value="AL">Albania</option>	<option value="DZ">Algeria</option>	<option value="AS">American Samoa</option>	<option value="AD">Andorra</option>	<option value="AO">Angola</option>	<option value="AI">Anguilla</option>	<option value="AQ">Antarctica</option>	<option value="AG">Antigua and Barbuda</option>	<option value="AR">Argentina</option>	<option value="AM">Armenia</option>	<option value="AW">Aruba</option>	<option value="AU">Australia</option>	<option value="AT">Austria</option>	<option value="AZ">Azerbaijan</option>	<option value="BS">Bahamas</option>	<option value="BH">Bahrain</option>	<option value="BD">Bangladesh</option>	<option value="BB">Barbados</option>	<option value="BY">Belarus</option>	<option value="PW">Belau</option>	<option value="BE">Belgium</option>	<option value="BZ">Belize</option>	<option value="BJ">Benin</option>	<option value="BM">Bermuda</option>	<option value="BT">Bhutan</option>	<option value="BO">Bolivia</option>	<option value="BQ">Bonaire, Saint Eustatius and Saba</option>	<option value="BA">Bosnia and Herzegovina</option>	<option value="BW">Botswana</option>	<option value="BV">Bouvet Island</option>	<option value="BR">Brazil</option>	<option value="IO">British Indian Ocean Territory</option>	<option value="VG">British Virgin Islands</option>	<option value="BN">Brunei</option>	<option value="BG">Bulgaria</option>	<option value="BF">Burkina Faso</option>	<option value="BI">Burundi</option>	<option value="KH">Cambodia</option>	<option value="CM">Cameroon</option>	<option value="CA">Canada</option>	<option value="CV">Cape Verde</option>	<option value="KY">Cayman Islands</option>	<option value="CF">Central African Republic</option>	<option value="TD">Chad</option>	<option value="CL">Chile</option>	<option value="CN">China</option>	<option value="CX">Christmas Island</option>	<option value="CC">Cocos (Keeling) Islands</option>	<option value="CO">Colombia</option>	<option value="KM">Comoros</option>	<option value="CG">Congo (Brazzaville)</option>	<option value="CD">Congo (Kinshasa)</option>	<option value="CK">Cook Islands</option>	<option value="CR">Costa Rica</option>	<option value="HR">Croatia</option>	<option value="CU">Cuba</option>	<option value="CW">Curaçao</option>	<option value="CY">Cyprus</option>	<option value="CZ">Czech Republic</option>	<option value="DK">Denmark</option>	<option value="DJ">Djibouti</option>	<option value="DM">Dominica</option>	<option value="DO">Dominican Republic</option>	<option value="EC">Ecuador</option>	<option value="EG">Egypt</option>	<option value="SV">El Salvador</option>	<option value="GQ">Equatorial Guinea</option>	<option value="ER">Eritrea</option>	<option value="EE">Estonia</option>	<option value="ET">Ethiopia</option>	<option value="FK">Falkland Islands</option>	<option value="FO">Faroe Islands</option>	<option value="FJ">Fiji</option>	<option value="FI">Finland</option>	<option value="FR">France</option>	<option value="GF">French Guiana</option>	<option value="PF">French Polynesia</option>	<option value="TF">French Southern Territories</option>	<option value="GA">Gabon</option>	<option value="GM">Gambia</option>	<option value="GE">Georgia</option>	<option value="DE">Germany</option>	<option value="GH">Ghana</option>	<option value="GI">Gibraltar</option>	<option value="GR">Greece</option>	<option value="GL">Greenland</option>	<option value="GD">Grenada</option>	<option value="GP">Guadeloupe</option>	<option value="GU">Guam</option>	<option value="GT">Guatemala</option>	<option value="GG">Guernsey</option>	<option value="GN">Guinea</option>	<option value="GW">Guinea-Bissau</option>	<option value="GY">Guyana</option>	<option value="HT">Haiti</option>	<option value="HM">Heard Island and McDonald Islands</option>	<option value="HN">Honduras</option>	<option value="HK">Hong Kong</option>	<option value="HU">Hungary</option>	<option value="IS">Iceland</option>	<option value="IN">India</option>	<option value="ID">Indonesia</option>	<option value="IR">Iran</option>	<option value="IQ">Iraq</option>	<option value="IE">Ireland</option>	<option value="IM">Isle of Man</option>	<option value="IL">Israel</option>	<option value="IT">Italy</option>	<option value="CI">Ivory Coast</option>	<option value="JM">Jamaica</option>	<option value="JP">Japan</option>	<option value="JE">Jersey</option>	<option value="JO">Jordan</option>	<option value="KZ">Kazakhstan</option>	<option value="KE">Kenya</option>	<option value="KI">Kiribati</option>	<option value="KW">Kuwait</option>	<option value="KG">Kyrgyzstan</option>	<option value="LA">Laos</option>	<option value="LV">Latvia</option>	<option value="LB">Lebanon</option>	<option value="LS">Lesotho</option>	<option value="LR">Liberia</option>	<option value="LY">Libya</option>	<option value="LI">Liechtenstein</option>	<option value="LT">Lithuania</option>	<option value="LU">Luxembourg</option>	<option value="MO">Macao S.A.R., China</option>	<option value="MK">Macedonia</option>	<option value="MG">Madagascar</option>	<option value="MW">Malawi</option>	<option value="MY">Malaysia</option>	<option value="MV">Maldives</option>	<option value="ML">Mali</option>	<option value="MT">Malta</option>	<option value="MH">Marshall Islands</option>	<option value="MQ">Martinique</option>	<option value="MR">Mauritania</option>	<option value="MU">Mauritius</option>	<option value="YT">Mayotte</option>	<option value="MX">Mexico</option>	<option value="FM">Micronesia</option>	<option value="MD">Moldova</option>	<option value="MC">Monaco</option>	<option value="MN">Mongolia</option>	<option value="ME">Montenegro</option>	<option value="MS">Montserrat</option>	<option value="MA">Morocco</option>	<option value="MZ">Mozambique</option>	<option value="MM">Myanmar</option>	<option value="NA">Namibia</option>	<option value="NR">Nauru</option>	<option value="NP">Nepal</option>	<option value="NL">Netherlands</option>	<option value="NC">New Caledonia</option>	<option value="NZ">New Zealand</option>	<option value="NI">Nicaragua</option>	<option value="NE">Niger</option>	<option value="NG">Nigeria</option>	<option value="NU">Niue</option>	<option value="NF">Norfolk Island</option>	<option value="KP">North Korea</option>	<option value="MP">Northern Mariana Islands</option>	<option value="NO">Norway</option>	<option value="OM">Oman</option>	<option value="PK">Pakistan</option>	<option value="PS">Palestinian Territory</option>	<option value="PA">Panama</option>	<option value="PG">Papua New Guinea</option>	<option value="PY">Paraguay</option>	<option value="PE">Peru</option>	<option value="PH">Philippines</option>	<option value="PN">Pitcairn</option>	<option value="PL">Poland</option>	<option value="PT">Portugal</option>	<option value="PR">Puerto Rico</option>	<option value="QA">Qatar</option>	<option value="RE">Reunion</option>	<option value="RO">Romania</option>	<option value="RU">Russia</option>	<option value="RW">Rwanda</option>	<option value="ST">São Tomé and Príncipe</option>	<option value="BL">Saint Barthélemy</option>	<option value="SH">Saint Helena</option>	<option value="KN">Saint Kitts and Nevis</option>	<option value="LC">Saint Lucia</option>	<option value="SX">Saint Martin (Dutch part)</option>	<option value="MF">Saint Martin (French part)</option>	<option value="PM">Saint Pierre and Miquelon</option>	<option value="VC">Saint Vincent and the Grenadines</option>	<option value="WS">Samoa</option>	<option value="SM">San Marino</option>	<option value="SA">Saudi Arabia</option>	<option value="SN">Senegal</option>	<option value="RS">Serbia</option>	<option value="SC">Seychelles</option>	<option value="SL">Sierra Leone</option>	<option value="SG">Singapore</option>	<option value="SK">Slovakia</option>	<option value="SI">Slovenia</option>	<option value="SB">Solomon Islands</option>	<option value="SO">Somalia</option>	<option value="ZA">South Africa</option>	<option value="GS">South Georgia/Sandwich Islands</option>	<option value="KR">South Korea</option>	<option value="SS">South Sudan</option>	<option value="ES">Spain</option>	<option value="LK">Sri Lanka</option>	<option value="SD">Sudan</option>	<option value="SR">Suriname</option>	<option value="SJ">Svalbard and Jan Mayen</option>	<option value="SZ">Swaziland</option>	<option value="SE">Sweden</option>	<option value="CH">Switzerland</option>	<option value="SY">Syria</option>	<option value="TW">Taiwan</option>	<option value="TJ">Tajikistan</option>	<option value="TZ">Tanzania</option>	<option value="TH">Thailand</option>	<option value="TL">Timor-Leste</option>	<option value="TG">Togo</option>	<option value="TK">Tokelau</option>	<option value="TO">Tonga</option>	<option value="TT">Trinidad and Tobago</option>	<option value="TN">Tunisia</option>	<option value="TR">Turkey</option>	<option value="TM">Turkmenistan</option>	<option value="TC">Turks and Caicos Islands</option>	<option value="TV">Tuvalu</option>	<option value="UG">Uganda</option>	<option value="UA">Ukraine</option>	<option value="AE">United Arab Emirates</option>	<option value="GB">United Kingdom (UK)</option>	<option value="US" selected="selected">United States (US)</option>	<option value="UM">United States (US) Minor Outlying Islands</option>	<option value="VI">United States (US) Virgin Islands</option>	<option value="UY">Uruguay</option>	<option value="UZ">Uzbekistan</option>	<option value="VU">Vanuatu</option>	<option value="VA">Vatican</option>	<option value="VE">Venezuela</option>	<option value="VN">Vietnam</option>	<option value="WF">Wallis and Futuna</option>	<option value="EH">Western Sahara</option>	<option value="YE">Yemen</option>	<option value="ZM">Zambia</option>	<option value="ZW">Zimbabwe</option></select></p><p class="full"><label for="">Address</label><input id="input-s-address-1" value="' + read("s_address_1") + '" type="text" placeholder="Street Address" style="margin-bottom:5px;"><input id="input-s-address-2" value="' + read("s_address_2") + '" type="text" placeholder="Apartment, suite, unit etc. (optional)"></p><p class="full"><label for="">Town / City</label><input id="input-s-city" value="' + read("s_city") + '" type="text"></p><p class="half first"><label for="">State</label><input id="input-s-state" value="' + read("s_state") + '" type="text"></p><p class="half"><label for="">ZIP</label><input id="input-s-zip" value="' + read("s_zip") + '" type="text"></p>';
			document.getElementById('checkout-shipping').innerHTML = htmlString;
	}
	function show_notes () {
		var htmlString = '<div><p><label><input id="input-dif-ship" onclick="dif_ship();" class="checkbox" value="1" type="checkbox"> Ship to a different address?</label></p></div><div id="checkout-shipping"></div><p class="full"><label>Order notes</label><textarea  id="input-note" placeholder="Notes on your order, e.g. special notes concerning delivery." rows="2" cols="5"></textarea></p><h3>Sign up for our emails.</h3><p><label><input  id="input-weekly-wire" class="checkbox" value="1" type="checkbox"> HLA Weekly Wire</label></p><br><p><label><input id="input-pha-news" class="checkbox" value="1" type="checkbox"> PHA Newsletter</label></p>';
		
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
	
	function check_payment () {
		var total = my_total(JSON.parse(localStorage.getItem("items")));
		if (total>0) {
			get_payeezy_info(total);
		}else{
			document.getElementById('checkout-payment').innerHTML = "";
		};
		setTimeout(check_payment(),10000);
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
						document.getElementById("pay_now_form_6f8c42b3cc").submit(); 
					}else{
						window.location.assign("{{ site.url }}{{ site.baseurl }}/thank-you-temp");
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
					document.getElementById("pay_now_form_6f8c42b3cc").submit(); 
				}else{
					window.location.assign("{{ site.url }}{{ site.baseurl }}/thank-you-temp");
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
			var url = 'https://script.google.com/macros/s/AKfycbyWpKQdW8LbheeCZ5KiHZJOz0nj--hGsBUQWUsYeq3Y6vP3Ht76/exec?amount=' + amount;
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
		var string = '<form action="https://demo.globalgatewaye4.firstdata.com/pay" id="pay_now_form_6f8c42b3cc" method="post">';
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