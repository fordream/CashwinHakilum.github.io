window.onload=init;var engLetters=null;var corpLetters=null;var engString=null;var engCharArr=null;var corpString=null;var corpCharArr=null;var engTextArea=null;var corpTextArea=null;var translateBtn=null;var translateBackBtn=null;function init(){	engLetters=['a','?','?','?','e','?','?','?','i','[gw]','[hkpx]','?','?','?','o','[dlt]','?','q','m','[bfjnrv]','u','?','?','?','[csy]','?'];corpLetters=['a','t','y','p','e','t','j','k','i','t','k','p','s','t','o','k','r','t','y','p','u','t','j','k','y','z'];engString="";engCharArr=[];corpString="";corpCharArr=[];engTextArea=document.getElementById("engTextArea");corpTextArea=document.getElementById("corpTextArea");translateBtn=document.getElementById("translateBtn");translateBtn.onclick=translate;translateBackBtn=document.getElementById("translateBackBtn");translateBackBtn.onclick=translateBack;engTextArea.value="* Attack!\n* Exterminate hostiles\n* For the Corpus\n* Assault\n* Warframes!\n* Engage battle mode";}function translate(){corpTextArea.value="";corpString="";corpCharArr=[];engString=engTextArea.value;engCharArr=engString.split("");for(var i=0;i<engCharArr.length;i++){ch=engCharArr[i];if(ch>='a'&&ch<='z'){ch=corpLetters[ord(ch)-ord('a')];}else if(ch>='A'&&ch<='Z'){ch=chr(ord(corpLetters[ord(ch)-ord('A')])-(ord('a')-ord('A')));}corpCharArr.push(ch);}corpString=corpCharArr.join("");corpTextArea.value=corpString;}function ord(c){return c.charCodeAt(0);}function chr(i){return String.fromCharCode(i);}function translateBack(){engTextArea.value="";engString="";engCharArr=[];corpString=corpTextArea.value;corpCharArr=corpString.split("");for(var i=0;i<corpCharArr.length;i++){ch=corpCharArr[i];if(ch>='a'&&ch<='z'){ch=engLetters[ord(ch)-ord('a')];}else if(ch>='A'&&ch<='Z'){ch=engLetters[ord(ch)-ord('A')];ch=ch.toUpperCase();}engCharArr.push(ch);}engString=engCharArr.join("");engTextArea.value=engString;}