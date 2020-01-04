
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

// HTML イベントを生成します。
// 生成したイベントは、ノードに対して dispatchEvent に渡すと実行できます。
// クリックイベントは 'click' を作らなくても、ノードが持つ click メソッドで代用できます。
function createEventNamed(name) {
    
    const event = document.createEvent('HTMLEvents');
    
    event.initEvent(name, true, true);
    
    return event;
}

function createDataURI(data, mime) {
    
    return 'data:' + mime + ';charset=utf8,' + encodeURI(data.join('\n'));
}

// 指定した URI をファイルとしてダウンロードします。その際のファイル名は filename とします。
// ファイル名を指定した場合、ダウンロードだけしかしない様子なので注意。
function downloadURI(uri, filename) {
    
    const actionNode = document.createElement('a');
    
    actionNode.href = uri;
    actionNode.download = filename;
    
    actionNode.click();
}

// 指定した URI のファイルを開きます。
// A タグにファイル名を指定せず、onclick で発動させることで、ポップアップブロックを回避します。
// window.open だけだとポップアップブロックが発動します。
function openURI(uri) {
    
    const actionNode = document.createElement('a');
    
    actionNode.href = uri;
    actionNode.click();
}
