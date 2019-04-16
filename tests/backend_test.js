const tape = require('tape');
const supertest = require('supertest');

tape("Tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});
