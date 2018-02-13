
if (1)
document.write('<LINK HREF="javascript_enabled.css" REL="stylesheet" TYPE="text/css">');

function swapClass(node, classa, classb)
	{
	if (node.className==classa)
		{ node.className=classb; }
	else if (node.className==classb)
		{ 
		node.className=classa; 
		}
	}

function disclose(me)
	{
	if (me.src.indexOf("collapse.png") != -1)
		{ 
		me.src = "expand.png"; 
		}
	else
		{ 
		me.src = "collapse.png"; 
		}

	var table_node = me.parentNode.parentNode.parentNode;
	var rows = table_node.childNodes;
	for (var i = 0; i < rows.length; i++)
		{
		row = rows[i];
		swapClass(row, 'hideSection', 'showSection');
		swapClass(row, 'hideSectionNormalCell', 'showSectionNormalCell');
		if ((row.className == 'hideSectionNormalCell') || (row.className == 'showSectionNormalCell'))
			{
			var rule_id_str = row.id;
                	var rule_id = rule_id_str.substring (6, 10);
                	var table_break = document.getElementById (rule_id);
                	if (table_break)
                		swapClass (table_break, 'hideSection', 'showSection');
			}
		}
	}
