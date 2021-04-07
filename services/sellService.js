const sellService = function (prevQuestion, answer) {
    const questionBank =
    {
        askZip: 'Tell me the zip code of your area',
        askBudget: 'Choose your expected price band',
        askBhk: 'How many BHK does your property have?',
        askBathroom: 'How many Bathroom does your property have??',
        askCity: 'Please choose the city whre your property is located',
    }

    // For budget
    if (prevQuestion == questionBank.askZip) {
        return {
            question: questionBank.askBudget,
            actionType: 'click',
            actionItems: budgetArray,
            actionElement: 'button'
        }
    }
    else {
        // For BHK
        if (prevQuestion.toLowerCase() == questionBank.askBudget.toLowerCase()) {
            if (budgetArray.filter(item => item == answer).length > 0) {
                // Budget validated
                // ask BHK
                return {
                    question: questionBank.askBhk,
                    actionType: 'click',
                    actionItems: bhkArray,
                    actionElement: 'button'
                }
            }
            else {
                return { "sdvdsvsd": "sdvdsvsv" }
            }
        }
        else {
            //For Bathroom
            if (prevQuestion.toLowerCase() == questionBank.askBhk.toLowerCase()) {
                if (bhkArray.filter(item => item == answer).length > 0) {
                    // BHK Validated
                    // ask Bathroom
                    return {
                        question: questionBank.askBathroom,
                        actionType: 'click',
                        actionItems: ['1', '2', '3'],
                        actionElement: 'button'
                    }
                }
            }
            else {
                //For City
                if (prevQuestion.toLowerCase() == questionBank.askBathroom.toLowerCase()) {
                    // Bathroom Validated
                    // ask city
                    return {
                        question: questionBank.askCity,
                        actionType: 'click',
                        actionItems: cityArray,
                        actionElement: 'button'
                    }
                }
                else {
                    //For Time
                    if (prevQuestion.toLowerCase() == questionBank.askCity.toLowerCase()) {
                        // Bathroom Validated
                        // ask city
                        return {
                            question: '',
                            actionType: 'answer',
                            actionItems: ['Thank you for contacting us', 'One of our agent will be in touch with you soon'],
                            actionElement: 'text'
                        }
                    }
                }
            }
        }
    }
}

module.exports = sellService;