const generalService = function(prevQuestion, answer)
{
    const questionBank =
    {
        askZip: 'Tell me the zip code of your area',
        askQuery: 'Please type your query and submit.',
    }

    // For Query
    if (prevQuestion == questionBank.askZip) {
        return {
            question: questionBank.askQuery,
            actionType: 'view',
            actionItems: ['We got you.'],
            actionElement: 'text'
        }
    }
    else if(prevQuestion == questionBank.askQuery)
    {
        return {
            question: '',
            actionType: 'answer',
            actionItems: ['Thank you for connecting us', 'Our agent will be in touch with you shortly'],
            actionElement: 'text'
        }
    }
}

module.exports = generalService;