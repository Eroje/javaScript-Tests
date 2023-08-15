const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
  // Write hooks above the tests
  before(() => {
    path = './message.txt'; 
// Stop repetion by using before Hook, delete path from all it blocks
  });

  afterEach(() => {
    fs.unlinkSync(path);
// Stop repetion by using afterEach Hook, delete path from all it blocks
  });

  it('writes a string to text file at given path name', () => {
 
   // Setup
  
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   
 
 });
 
 it('writes an empty string to text file at given path name', () => {
 
   // Setup

   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
   
  
 });
});


