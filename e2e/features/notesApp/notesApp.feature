#language: en

@notesApp
Feature: Manage Notes
    As a Notes App user
    Wants to add, edit or delete notes
    So I can manage notes

    Scenario: Addying a new note
        Given I am already on the Notes App main page
        When I click on the add note button
        And I fill the field title with the value 'Test note'
        And I fill the field body with the value 'Content of a test note'
        And I click on the save button
        Then I can see a new note with the title 'Test note'
        And I can see a new note with the content 'Content of a test note'

    Scenario: Editing note informations
        Given I am already have a note added with the title 'Test note'
        When I click on the edit button
        And I fill the field title with the value 'Updated note'
        And I fill the field body with the value 'Content of the updated note'
        And I click on the save button
        Then I can see a new note with the title 'Updated note'
        And I can see a new note with the content 'Content of the updated note'

    Scenario: Deleting note
        Given I am already have a note added with the title 'Updated note'
        When I click on the delete button
        Then I cannot see a note with the title 'Updated note'


