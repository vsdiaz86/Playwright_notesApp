#language: en

@notesApi
Feature: Manage Notes Api
    As a Notes Api user
    Wants to add, edit or delete notes
    So I can manage notes

    Scenario: Addying a new note by Api
        Given I am addying a new note by api
        Then I can see the new note by get request
