DROP DATABASE IF EXISTS journal_dev;

CREATE DATABASE journal_dev;

\c journal_dev;

CREATE TABLE journal(
    id SERIAL PRIMARY KEY,
    journal TEXT NOT NULL,
    journalMood TEXT NOT NULL,
    journalAffirmation TEXT NOT NULL,
    start_date TIMESTAMP
);