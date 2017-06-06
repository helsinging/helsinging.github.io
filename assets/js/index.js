function makeid()
{
    var text = "";
    var possible = "0123456789abcdef";

    for( var i=0; i < 32; i++ )
	text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;    
}

var fakeurl = 'http://www.gravatar.com/avatar/41f84bab4a852971eb1d26a287acb763';
var members = [
    {'name-en': 'Miao Jiang',  'name-cn': '江淼', 'role': 'Director', 'face': fakeurl},
    {'name-en': 'Suheng Shi',  'name-cn': '石苏恒', 'role': 'Pianist', 'face': fakeurl},
    // {'name-en': 'Han Xiao',  'name-cn': '肖晗', 'role': 'Tenor', 'face': fakeurl}
];

$(document).ready(function(){
    var root = $('#current-members');
    
    members.forEach(function(m, i){
	var div	= '<div class="person">';
	div += '<svg class="face" width=50 height=50 data-jdenticon-hash="';
	div += makeid() + '"></svg>';
	div += '<div class="info">' + m['name-en'] + '</a><br>';
	div += m.role + '</div>';
	root.append(div);
    })    
    jdenticon();
})

