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
  qustion TEXT NOT NULL,
  answer TEXT NOT NULL,
  option1 TEXT NOT NULL,
  option2 TEXT NOT NULL,
  option3 TEXT NOT NULL
  );

INSERT INTO qa (question,answer,option1,option2,option3) VALUES
('What is the purpose of CASCADE in SQL','To drop all the related fields/table to the current table','To get the top row','To clear the database','To clear the current row'),
('What is Javascript','Programing language','Scripting language','markdown','not this'),
('What is the first?','what','me','you','we')

CREATE TABLE IF NOT EXISTS leaderboard (
  id SERIAL PRIMARY KEY,
  username_id INTEGER REFERENCES users(id) ON UPDATE CASCADE,
  questions_solved TEXT NOT NULL
  );

COMMIT;
