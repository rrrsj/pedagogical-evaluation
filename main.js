window.onload = function(){
	var a=document.getElementsByClassName('radio radio-xs');
    var ok=0
    for(var i=0;i<a.length;i++)
    {
        var b=a[i].childNodes;
        var c=a[i].innerText;
        if(c.search("很好")!=-1&&ok==1)
        {
             b[3].click();
        }
        else if(c.search("好")!=-1&&c.search("很好")==-1&&ok==0)
        {
             ok=1;
             b[3].click();
        }
        else if(c.search("挑战性")!=-1)
        {
             b[2].click();
        }
        else if(c.search("推荐")!=-1&&c.search("不推荐")==-1)
        {
             b[2].click();
        }  
    }
    var text=document.querySelector("textarea");
    text.value="无";
    var button=document.querySelector("input[value='提交']");
    button.click();
}
