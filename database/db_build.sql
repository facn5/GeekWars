BEGIN;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS qa CASCADE;
DROP TABLE IF EXISTS leaderboard CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(40) NOT NULL,
  password VARCHAR(200) NOT NULL,
  email TEXT NOT NULL,
  score TEXT DEFAULT 0
  );

CREATE TABLE IF NOT EXISTS qa (
  id SERIAL PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  option1 TEXT NOT NULL,
  option2 TEXT NOT NULL,
  option3 TEXT NOT NULL
  );

INSERT INTO qa (question,answer,option1,option2,option3) VALUES
('What is the purpose of CASCADE in SQL','To drop all the related fields/table to the current table','To get the top row','To clear the database','To clear the current row'),
('What is Javascript','Programing language','Scripting language','markdown','not this'),
('What is the first?','what','me','you','we');
('Which of the following isnt a Javascript datatype','String','Boolean','Object','document.write')
('What is HTML','a pssst language','a markup language','an encoding script',' a scripting language');
('What year was ES6 introudced','2015','2016','2017',' 2018');
('How can you print in JS','console.log()','console.writeline()','system.println()',' print()');
('What can you check in a string with in SQL','LIKE','INCLUDES','CHECK',' EXSISTS');
('What can you choose all from a table in SQL','*','^','+',' /*/');
('How can you import a module with NodeJS','require()','bring()','link()',' import()');

CREATE TABLE IF NOT EXISTS leaderboard (
  id SERIAL PRIMARY KEY,
  username_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
  questions_solved TEXT NOT NULL
  );

COMMIT;
