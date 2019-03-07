const insertYourNameInHtmlPage = () => {
    $('#cookie-div').append(`<h1>My name is ${$.cookie('name')}</h1>`)
    $('#cookie-div').append(`<h1>My age is ${$.cookie('age')}</h1>`)
    $('#cookie-div').append(`<h1>My favorite food is ${$.cookie('food')}</h1>`)
}
insertYourNameInHtmlPage()