function print5() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
  }
  
  
    print5();
    print5();

    var element = Document.getElementById('new-heading');
    element.firstChild.nodeValue = 'New-heading';

    function myLoadFunction() {
      var element = document.getElementById('pageheading');
     element.firstChild.nodeValue = 'New Heading';
    }