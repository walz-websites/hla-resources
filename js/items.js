---
---
function list_items () {
  var items = new Array();
  {% for post in site.categories.item %}
    {% if post.store %}
      var item = {
        issues:"{{ post.issues }}".replace(/, /g, ",").replace(/ /g, "-"),
        item_type:"{{ post.type }}".replace(/, /g, ",").replace(/ /g, "-"),
        target_age:"{{ post.target-age }}".replace(/, /g, ",").replace(/ /g, "-"),
        target_audience:"{{ post.target-audience }}".replace(/, /g, ",").replace(/ /g, "-"),
        item_language:"{{ post.language }}".replace(/, /g, ",").replace(/ /g, "-"),
        item_title:"{{ post.title }}",
        pic:"{{ post.front-pic }}",
        url:"{{ post.url }}",
        loc:"{{ post.loc }}",
        id:"{{ post.id }}",
        size:"{{ post.size }}",
        price:{amount:"{{ post.price.amount }}",text:"{{ post.price.text }}"}
      };
      items.push(item);
    {% endif %}
  {% endfor %}
  return items;
}
function find_item (id) {
  var items = list_items();
  var item = null;
  for (var i = 0; i < items.length; i++) { 
    if (items[i].id === id) { 
      item = items[i];
      break;
    } 
  }
  return item;
}
function item_sug_price (id,info) {
  var item = find_item(id);
  var val = item.price[info];
  if (val == "") {
    var values = {
      Publication:{amount:{{ site.price.publication.amount }},text:"{{ site.price.publication.text }}"},
      Fact_Sheet:{amount:{{ site.price.fact-sheet.amount }},text:"{{ site.price.fact-sheet.text }}"},
      Poster:{amount:{{ site.price.poster.amount }},text:"{{ site.price.poster.text }}"},
      Bumper_Sticker:{amount:{{ site.price.bumper-sticker.amount }},text:"{{ site.price.bumper-sticker.text }}"},
      Other:{amount:{{ site.price.other.amount }},text:"{{ site.price.other.text }}"},
      DVD:{amount:{{ site.price.dvd.amount }},text:"{{ site.price.dvd.text }}"}
    };
    val = values[item.item_type.replace(/-/g, "_")][info];
  };
  return val;
}
function item_find_val (id,tmp) {
  var item = find_item(id);
  return item[tmp];
}