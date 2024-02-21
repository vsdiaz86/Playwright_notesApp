#language: en

@notesApp
Feature: Manage Notes
    As a Notes App user
    Wants to add, edit or delete notes
    So I can manage notes

    Scenario: Addying a new note
        Given I am already on the Notes App main page
        When I click on the add note button
        And I fill the field title with the value 'Title `~!@#$%^&*()_-+={}[]|\:;"<>,.?/'
        And I fill the field body with the value 'Body `~!@#$%^&*()_-+={}[]|\:;"<>,.?/'
        And I click on the save button
