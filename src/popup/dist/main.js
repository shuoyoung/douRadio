define("douRadio/popup/1.0.0/main",["./models/song","backbone"],function(a){{var b=(chrome.extension.connect({name:"douRadio"}),a("./models/song")),c=new b({title:"豆瓣电台",artist:" 小豆"}),d=requrew("./view/popup");new d({model:c})}this.song.set({title:"我们不要伤心了"})}),define("douRadio/popup/1.0.0/models/song",["backbone"],function(a,b,c){var d=a("backbone"),e=d.Model.extend({});c.exports=e});
