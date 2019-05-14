
// 指定したノード内のテキストノードを取得します。
// テキストノード内のテキストは wholeText プロパティーで取得できます。
function getTextNodesIn(node) {
    
    let textNodes = new Array();
    
    for (let index = 0; index != node.childNodes.length; ++index) {
        
        const targetNode = node.childNodes[index];
        
        if (targetNode.wholeText) {
            
            textNodes.push(targetNode);
        }
    }
    
    return textNodes;
}
