#language: en

@notesApi
Feature: Manage Notes Api
    As a Notes Api user
    Wants to add, edit or delete notes
    So I can manage notes

    Scenario: Addying a new note by Api
        Given I am addying a new note by api
        Then I can see the new note by get request

    Scenario: Editing a note by Api
        Given I already have a note added
        When I edit the data by a put api request

    Scenario: Deleting note by Api
        Given I already have a note
        When I delete the note by the api
        Then I cant find the note by a get request

