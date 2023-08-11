DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;
removethis
USE project2_db;

CREATE TABLE Events (
    title varchar (255),
    eventDate varchar(255),
    eventTime varchar(255),
    venue varchar(255),
);

CREATE TABLE Users (
    userID int,
    userName varchar(255),
    email varchar(255),
    City varchar(255)
);