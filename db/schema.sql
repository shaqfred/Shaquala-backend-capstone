DROP DATABASE IF EXISTS journal_dev;

CREATE DATABASE journal_dev;

\c journal_dev;

CREATE TABLE journal(
    id SERIAL PRIMARY KEY,
    journal_entry TEXT NOT NULL,
    journal_mood TEXT NOT NULL,
    journal_affirmation TEXT NOT NULL,
    journal_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);