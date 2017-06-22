---
layout: page
title: Thank You
permalink: /thank-you-temp-0451910951845610497409794/
---
<div id="loading"><i class="loading fa fa-spinner fa-5x" aria-hidden="true"></i><h3>Sending Your Order Please Wait...</h3></div>
<br><br><br><br><br><br>

<script type="text/javascript">
	submit();

	function getUrlVars() {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	      vars[key] = value;
	    });
	    return vars;
	}
	function submit () {
		var my_items = JSON.parse(localStorage.getItem("items")) || null;
		if(my_items != null){
			var url = 'https://script.google.com/macros/s/AKfycbxTQ-l3jzBY2-kVpGtDTmLCJutwLI3AIsYfFbVZKVv6cv4UNw-B/exec';
			var xml = new XMLHttpRequest();
			var params = parameters(my_items);
			xml.open('POST',url,true);
			
			xml.responseType = 'json';
			xml.onload = function() {
			      var status = xml.status;
			      if (status == 200) {
			        document.getElementById('loading').innerHTML = thankyou(params,JSON.stringify(xml.response.id));
			      } else {
			        document.getElementById('loading').innerHTML = "<p>Error:</p>";
			      }
			    };
			xml.send(params);
		}else{
			document.getElementById('loading').innerHTML = '<p>Sorry your order has already been submitted. If you are just trying to remove your billing (not including any credit card information) and shipping information <a id="removed" onclick="remove_b_s();">click here</a>.</p>';
		}
	}
	function thankyou (data,id) {
		data = JSON.parse(data);
		var html = '<p>Request# ' + id + '</p>';
		html = html + '<table  class="cart-table-m cart-table"><tbody><tr><th></th><th>Item</th><th>Quantity</th><th>Suggested Donation</th><th>Donation</th></tr>';

		for (var i = 0; i < data.items.length; i++) {
			var amount = 0;
			if(if_cart_donation(data.items[i].donation,"donation") == "donation"){
				amount = Number(data.items[i].suggested_donation) * Number(data.items[i].quantity);
			}

			html= html + '<tr class="cart-table-row"><td>' + '<img class="cart-item-image" src="{{ site.baseurl }}/images/' + data.items[i].image + '"/>' + '</td><td>' + data.items[i].item + '<br>' + data.items[i].use + '</td><td>' + i + '</td><td>$' + (Number(data.items[i].suggested_donation) * Number(data.items[i].quantity)).toFixed(2).toString() + '</td><td>$' + amount.toFixed(2).toString() + "</td></tr>";
		};
		html = html + '<tr><td></td><td></td><td></td><td>$' + data.suggested_total.toFixed(2).toString() + '</td><td>$' + data.total.toFixed(2).toString() + '</td></tr></tbody></table>';

		html = html + '<p>Your billing (not including any credit card information) and shipping information has been saved to this browser to allow for faster checkout next time. If you would like to delete this information <a id="removed" onclick="remove_b_s();">click here</a>.</p>';
		var tmp = localStorage.getItem("after_checkout") || "";
		html = html + tmp;
		localStorage.removeItem("items");
		localStorage.removeItem("notes");
		localStorage.removeItem("after_checkout");
		return html;
	}
	function remove_b_s(){
		localStorage.removeItem("s_f_name");
		localStorage.removeItem("s_l_name");
		localStorage.removeItem("s_o_name");
		localStorage.removeItem("s_email");
		localStorage.removeItem("s_phone");
		localStorage.removeItem("s_country");
		localStorage.removeItem("s_address_1");
		localStorage.removeItem("s_address_2");
		localStorage.removeItem("s_city");
		localStorage.removeItem("s_state");
		localStorage.removeItem("s_zip");

		localStorage.removeItem("b_f_name");
		localStorage.removeItem("b_l_name");
		localStorage.removeItem("b_o_name");
		localStorage.removeItem("b_email");
		localStorage.removeItem("b_phone");
		localStorage.removeItem("b_country");
		localStorage.removeItem("b_address_1");
		localStorage.removeItem("b_address_2");
		localStorage.removeItem("b_city");
		localStorage.removeItem("b_state");
		localStorage.removeItem("b_zip");

		document.getElementById('removed').innerHTML = "(All information was removed)";
	}
	function if_cart_donation (argument,text) {
		if (argument != "none") {
			return text;
		}else{
			return '';
		};
	}
	function parameters (my_items) {
		var ship = new Object();
		ship.s_f_name = JSON.parse(localStorage.getItem("s_f_name"));
		ship.s_l_name = JSON.parse(localStorage.getItem("s_l_name"));
		ship.s_o_name = JSON.parse(localStorage.getItem("s_o_name"));
		ship.s_email = JSON.parse(localStorage.getItem("s_email"));
		ship.s_phone = JSON.parse(localStorage.getItem("s_phone"));
		ship.s_country = JSON.parse(localStorage.getItem("s_country"));
		ship.s_address_1 = JSON.parse(localStorage.getItem("s_address_1"));
		ship.s_address_2 = JSON.parse(localStorage.getItem("s_address_2"));
		ship.s_city = JSON.parse(localStorage.getItem("s_city"));
		ship.s_state = JSON.parse(localStorage.getItem("s_state"));
		ship.s_zip = JSON.parse(localStorage.getItem("s_zip"));

		var bill = new Object();
		bill.b_f_name = JSON.parse(localStorage.getItem("b_f_name"));
		bill.b_l_name = JSON.parse(localStorage.getItem("b_l_name"));
		bill.b_o_name = JSON.parse(localStorage.getItem("b_o_name"));
		bill.b_email = JSON.parse(localStorage.getItem("b_email"));
		bill.b_phone = JSON.parse(localStorage.getItem("b_phone"));
		bill.b_country = JSON.parse(localStorage.getItem("b_country"));
		bill.b_address_1 = JSON.parse(localStorage.getItem("b_address_1"));
		bill.b_address_2 = JSON.parse(localStorage.getItem("b_address_2"));
		bill.b_city = JSON.parse(localStorage.getItem("b_city"));
		bill.b_state = JSON.parse(localStorage.getItem("b_state"));
		bill.b_zip = JSON.parse(localStorage.getItem("b_zip"));

		var cardNum = getUrlVars()["Card_Number"];

		return JSON.stringify({total : total(my_items) , suggested_total : suggested_total(my_items) , billing : bill , shipping : ship , items : my_items , notes : JSON.parse(localStorage.getItem("notes")), card : cardNum.substr(cardNum.length - 4)});
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
</script>