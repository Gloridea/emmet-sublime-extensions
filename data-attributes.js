emmet.define('knockoutResolver', function(require, _) {
    require('abbreviationParser').addPostprocessor(function(tree) {
        tree.findAll(function(node) {
        	node._attributes.forEach(function(attr) {
        		if (attr.name.indexOf("@") === 0) {
	        		attr.name = "data-" + attr.name.substr(1);
        		}
        	});
        });
    });
});