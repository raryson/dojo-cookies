let cookieRegistry = $.cookie();

const monitorCookies = callback => setInterval(() => {
  if(Object.keys($.cookie()).reduce((anyChanged, cookieKey) => {
    return anyChanged || $.cookie(cookieKey) !== cookieRegistry[cookieKey];
  }, false)) {
    callback();
    cookieRegistry = $.cookie();
  }
}, 100);

const insertYourNameInHtmlPage = () => {
    $('#name').text($.cookie('name'));
    $('#age').text($.cookie('age'));
    $('#food').text($.cookie('food'));
}

insertYourNameInHtmlPage();
monitorCookies(insertYourNameInHtmlPage);