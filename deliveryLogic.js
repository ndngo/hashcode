let deliveryLogic = function(totalPizzas, teams, allPizzas) {
    // First need to determine combination of teams that will fully satisfy the totalPizzas since we cannot have left over pizzas
    // Check if it is possible to cater to a team of 4 first
    console.log("THIS IS THE DELIVERY CODE")
    var pizzasLeft = totalPizzas

    var pizzasDelivered = 0

    var pizzaInformation = {}

    // Will traverse the team sizes backwards to focus on the larger teams first
    for (let index = teams.length - 1; index >= 0 && pizzasLeft > 0; index--) {

        // If the number of teams for this team size is 0 or less then we skip it entirely
        if (teams[index]['numOfTeams'] <= 0) {
            continue
        }
        // Gets the remainder of pizzas after catering to the current team size
        var leftOverPizza = pizzasLeft % teams[index]['sizeOfTeam']

        // If the remainder is not equal to 0 and is less than the smallest team size then we will have unused pizzas if we were to cater to this team size
        if (leftOverPizza > 0 && leftOverPizza < teams[0]['sizeOfTeam']) {
            continue
        }

        // This will check how many pizzas will be 
        var potentialPizzasForTeamSize = Math.floor(pizzasLeft / teams[index]['sizeOfTeam'])

        var numberOfTeamsToGetPizza = Math.min(potentialPizzasForTeamSize, teams[index]['numOfTeams'])
        var pizzasLeft = pizzasLeft - (numberOfTeamsToGetPizza * teams[index]['sizeOfTeam'])
        var pizzasForTeam = teams[index]['sizeOfTeam']


        var pizzaTypeForTeam = []
        // Now we can start to determine the pizzas to maximize unique ingredients for the team
        while (numberOfTeamsToGetPizza > 0) {
            var chosenPizzas = []
            var uniqueIngredients = []
            for (let index = 0; index <= allPizzas.length && pizzasForTeam > 0; index++) {
                if (allPizzas[index] !== undefined) {
                    var uniqueIngredientCount = 0
                    for (let eachIngredient = 0; eachIngredient < allPizzas[index]['ingredientNames'].length; eachIngredient++) {
                        if (!uniqueIngredients.includes(allPizzas[index]['ingredientNames'][eachIngredient])) {
                            uniqueIngredientCount++;
                        }
                    }

                    if (uniqueIngredientCount <= 0) {
                        continue
                    }
                    for (let eachIngredient = 0; eachIngredient < allPizzas[index]['ingredientNames'].length; eachIngredient++) {
                        if (!uniqueIngredients.includes(allPizzas[index]['ingredientNames'][eachIngredient])) {
                            uniqueIngredients.push(allPizzas[index]['ingredientNames'][eachIngredient])
                        }
                    }

                    chosenPizzas.push(index)
                    allPizzas[index] = undefined
                    pizzasForTeam--;
                }
            }
            pizzaTypeForTeam.push(chosenPizzas)
            // 0 1 2
            // 3 4 5
            // 3 0 1 2
            // 3 3 4 5
            // [[0,1,2],[3,4,5]]

            // {3: [[0, 1, 2],[3,4,5]], }
            // 

            pizzaInformation[teams[index]['sizeOfTeam']] = pizzaTypeForTeam
            numberOfTeamsToGetPizza--;
        }

        pizzasDelivered += 1
    }

    return {
        pizzasDelivered: pizzasDelivered,
        pizzaInformation: pizzaInformation
    }

}

module.exports.deliveryLogic = deliveryLogic;