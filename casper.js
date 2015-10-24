/*==============================================================================*/
/* Casper generated Fri Oct 23 2015 20:47:05 GMT-0400 (EDT) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1437, height: 762};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('http://www.10best.com/awards/travel/best-app-website-for-booking-your-stay/priceline/');
   casper.waitForSelector(x("//a[normalize-space(text())='Working...']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Working...']"));
           this.click(x("//a[normalize-space(text())='Working...']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Working...']"));
   });
   casper.waitForSelector(".panel:nth-child(1) .t1",
       function success() {
           test.assertExists(".panel:nth-child(1) .t1");
           this.click(".panel:nth-child(1) .t1");
       },
       function fail() {
           test.assertExists(".panel:nth-child(1) .t1");
   });
   casper.waitForSelector(x("//*[contains(text(), \'Thanks for Voting\')]"),
       function success() {
           test.assertExists(x("//*[contains(text(), \'Thanks for Voting\')]"));
         },
       function fail() {
           test.assertExists(x("//*[contains(text(), \'Thanks for Voting\')]"));
   });

   casper.run(function() {test.done();});
});