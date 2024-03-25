DROP DATABASE IF EXISTS journals_dev;

CREATE DATABASE journals_dev;

\c journals_dev;

CREATE TABLE journals(
    id SERIAL PRIMARY KEY,
    journal_entry TEXT NOT NULL,
    journal_mood TEXT NOT NULL,
    journal_affirmation TEXT NOT NULL,
    entry_date DATE NOT NULL DEFAULT CURRENT_DATE
);