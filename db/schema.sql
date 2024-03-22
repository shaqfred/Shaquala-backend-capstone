DROP DATABASE IF EXISTS journal_dev;

CREATE DATABASE journal_dev;

\c journal_dev;

CREATE TABLE journal(
    id SERIAL PRIMARY KEY,
    journal_Entry TEXT NOT NULL,
    journal_Mood TEXT NOT NULL,
    journal_Affirmation TEXT NOT NULL,
    start_date TIMESTAMP
);