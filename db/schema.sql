DROP DATABASE IF EXISTS journalss_dev;

CREATE DATABASE journalss_dev;

\c journalss_dev;

CREATE TABLE journalss(
    id SERIAL PRIMARY KEY,
    journal_entry TEXT NOT NULL,
    journal_mood TEXT NOT NULL,
    journal_affirmation TEXT NOT NULL,
    start_date DATE DEFAULT CURRENT_DATE
);