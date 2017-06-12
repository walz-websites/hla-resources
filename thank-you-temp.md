---
layout: page
title: Thank You
permalink: /thank-you-temp/
---
<div id="loading"><i class="loading fa fa-spinner fa-5x" aria-hidden="true"></i><h3>Sending Your Order Please Wait...</h3></div>
<br><br><br><br><br><br>

<script type="text/javascript">
	submit();

	function submit () {
		var url = 'https://script.google.com/macros/s/AKfycbxTQ-l3jzBY2-kVpGtDTmLCJutwLI3AIsYfFbVZKVv6cv4UNw-B/exec';
		var xml = new XMLHttpRequest();
		var params = parameters();
		xml.open('POST',url,true);
		
		xml.responseType = 'json';
		xml.onload = function() {
		      var status = xml.status;
		      if (status == 200) {
		        document.getElementById('loading').innerHTML = "<p>It Worked.</p>" + JSON.stringify(xml.response.id);
		      } else {
		        document.getElementById('loading').innerHTML = "<p>Error:</p>";
		      }
		    };
		xml.send(params);
	}
	function parameters () {
		var my_items = JSON.parse(localStorage.getItem("items")) || new Array();

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

		return JSON.stringify({total : total(my_items) , suggested_total : suggested_total(my_items) , billing : bill , shipping : ship , items : my_items , notes : JSON.parse(localStorage.getItem("notes"))});
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