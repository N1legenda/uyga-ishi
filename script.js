function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
         mo = now.getMonth(),
         dnum = now.getDate(),
         yr = now.getFullYear(),
         hou = now.getHours(),
         min = now.getMinutes(),
         sec = now.getSeconds(),
         pe = "kunduzgi";

         if (hou == 0) {
            hou = 12;
         }
         if (hou < 12) {
            hou = hou - 12;
            pe = "Kechki";
         }

         Number.prototype.pad = function(digits) {
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
         }
         
         var months  = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr"];
         var week = ["Duwamba","Sewamba","chorwamba","Paywamba","Juma","Yakwamba"];
         var ids = ["dayname","month","daynum","year","Hour","minutes","seconds","period"];
         var values = [week[dname],months[mo],dnum.pad(2),yr,hou.pad(2),min.pad(2),sec.pad(2),pe];
         for (let i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).firstChild.nodeValue = values[i];
            
         }
        }

function initClock() {
  updateClock();
    window.setInterval("initClock()", 1);
}