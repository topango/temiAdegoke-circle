Feature: Test patient journey in booking knee replacement appointment

        As a user
        i want to be able to Test patient journey in booking an appointment

        Background: User is on the home page
                Given Patient navigate to the circle website wanting a knee replacement
                

        Scenario: Verify patient is able to get consultant availability and location for knee replacement appointment
                When Patient enters their location and date of leave
                Then Patient is able to get a consultant availability and location provided to make decision 






