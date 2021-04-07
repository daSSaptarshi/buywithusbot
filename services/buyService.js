const buyService = function (prevQuestion, answer) {
    const questionBank =
    {
        askZip: 'Tell me the zip code of your area',
        askBudget: 'Choose your budget range',
        askBhk: 'How many BHK do you need?',
        askBathroom: 'How many Bathroom do you require?',
        askCity: 'Please choose the city you want to buy',
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
                            actionItems: ['Thank you for contacting us', 'Our agent will be contact you shortly'],
                            actionElement: 'text'
                        }
                    }
                }
            }
        }
    }
}

module.exports = buyService