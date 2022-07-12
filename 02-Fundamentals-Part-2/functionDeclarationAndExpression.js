    // function Declaration & Expression

        // Declaration -> can be called before the initialization
        const juice = makingJuice('orange', 'apple');
        function makingJuice(fruitOne, fruitTwo) {
            console.log(`making juice of ${fruitOne} and ${fruitTwo}`);
        }

        //Expression -> only can be called after the initialization
        const calcAge = function (birthYear) {
            const actualYear = new Date().getFullYear();
            return actualYear - birthYear;
        }
        const years = calcAge(2000)
        console.log(years);