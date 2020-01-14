/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
//var FILL_ME_IN = 'Fill this value in';

/*describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});*/

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
   detectNetwork('39345678901234').should.equal('Diner\'s Club');
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  /*var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }*/
  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
})


describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert; // filled in correct function
 

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011847562837499').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011847562837499789').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6441847562837499').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    detectNetwork('6441847562837499789').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6451847562837499').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    detectNetwork('6451847562837499789').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6461847562837499').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    detectNetwork('6461847562837499789').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    detectNetwork('6471847562837499').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    detectNetwork('6471847562837499789').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    detectNetwork('6481847562837499').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    detectNetwork('6481847562837499789').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    detectNetwork('6491847562837499').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    detectNetwork('6491847562837499789').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6551847562837499').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6511847562837499789').should.equal('Discover');
  });
})



describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  it('has a prefix of 5018 and a length of 12', function() {
    detectNetwork('501884756283').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 13', function() {
    detectNetwork('5018847562831').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 14', function() {
    detectNetwork('50188475628312').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 15', function() {
    detectNetwork('501884756283123').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 16', function() {
    detectNetwork('5018847562831234').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 17', function() {
    detectNetwork('50188475628312345').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 18', function() {
    detectNetwork('501884756283123456').should.equal('Maestro');
  });
  it('has a prefix of 5018 and a length of 19', function() {
    detectNetwork('5018847562831234567').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function() {
    detectNetwork('502084756283').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 13', function() {
    detectNetwork('5020847562831').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 14', function() {
    detectNetwork('50208475628312').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 15', function() {
    detectNetwork('502084756283123').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 16', function() {
    detectNetwork('5020847562831234').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 17', function() {
    detectNetwork('50208475628312345').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 18', function() {
    detectNetwork('502084756283123456').should.equal('Maestro');
  });
  it('has a prefix of 5020 and a length of 19', function() {
    detectNetwork('5020847562831234567').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function() {
    detectNetwork('503884756283').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 13', function() {
    detectNetwork('5038847562831').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 14', function() {
    detectNetwork('50388475628312').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 15', function() {
    detectNetwork('503884756283123').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 16', function() {
    detectNetwork('5038847562831234').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 17', function() {
    detectNetwork('50388475628312345').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 18', function() {
    detectNetwork('503884756283123456').should.equal('Maestro');
  });
  it('has a prefix of 5038 and a length of 19', function() {
    detectNetwork('5038847562831234567').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function() {
    detectNetwork('630484756283').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 13', function() {
    detectNetwork('6304847562831').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 14', function() {
    detectNetwork('63048475628312').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 15', function() {
    detectNetwork('630484756283123').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 16', function() {
    detectNetwork('6304847562831234').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 17', function() {
    detectNetwork('63048475628312345').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 18', function() {
    detectNetwork('630484756283123456').should.equal('Maestro');
  });
  it('has a prefix of 6304 and a length of 19', function() {
    detectNetwork('6304847562831234567').should.equal('Maestro');
  });

});


describe('China UnionPay', function() {
  // Write full test coverage for the China UnionPay card

/*for (var prefix = 644; prefix <= 649; prefix++) {  
  (function(prefix) {    
    it('has a prefix of ' + prefix + ' and a length of 16');    
    it('has a prefix of ' + prefix + ' and a length of 19');  })(prefix)}
*/

//six digit prefixes------------------------------------------------------
  for (let i = 622126; i <= 622925; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 16', function() {
      detectNetwork(string + '7562831234').should.equal('China UnionPay');
    });
    }

  for (let i = 622126; i <= 622925; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 17', function() {
      detectNetwork(string + '75628312341').should.equal('China UnionPay');
    });
    }

    for (let i = 622126; i <= 622925; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 18', function() {
      detectNetwork(string + '756283123412').should.equal('China UnionPay');
    });
    }

    for (let i = 622126; i <= 622925; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 19', function() {
      detectNetwork(string + '7562831234123').should.equal('China UnionPay');
    });
    }

//three digit prefixes ------------------------------------------------------
    for (let i = 624; i <= 626; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 16', function() {
      detectNetwork(string + '7562831234123').should.equal('China UnionPay');
    });
    }

    for (let i = 624; i <= 626; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 17', function() {
      detectNetwork(string + '75628312341123').should.equal('China UnionPay');
    });
    }

    for (let i = 624; i <= 626; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 18', function() {
      detectNetwork(string + '756283123412123').should.equal('China UnionPay');
    });
    }

    for (let i = 624; i <= 626; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 19', function() {
      detectNetwork(string + '7562831234123123').should.equal('China UnionPay');
    });
    }

//four digit prefixes ------------------------------------------------------
    for (let i = 6282; i <= 6288; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 16', function() {
      detectNetwork(string + '756283123412').should.equal('China UnionPay');
    });
    }

    for (let i = 6282; i <= 6288; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 17', function() {
      detectNetwork(string + '7562831234113').should.equal('China UnionPay');
    });
    }

    for (let i = 6282; i <= 6288; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 18', function() {
      detectNetwork(string + '75628312341212').should.equal('China UnionPay');
    });
    }

    for (let i = 6282; i <= 6288; i++) {
    var string = i.toString();
    it('has a prefix of ' + string + ' and a length of 19', function() {
      detectNetwork(string + '756283123412312').should.equal('China UnionPay');
    });
    }
//end of loops

});

describe('Switch', function() {
  // Write full test coverage for the Switch card
it('has a prefix of 4903 and a length of 16', function() {
    detectNetwork('4903847562831234').should.equal('Switch');
});
it('has a prefix of 4903 and a length of 18', function() {
    detectNetwork('490384756283123478').should.equal('Switch');
});
it('has a prefix of 4903 and a length of 19', function() {
    detectNetwork('4903847562831234789').should.equal('Switch');
});

it('has a prefix of 4905 and a length of 16', function() {
    detectNetwork('4905847562831234').should.equal('Switch');
});
it('has a prefix of 4905 and a length of 18', function() {
    detectNetwork('490584756283123478').should.equal('Switch');
});
it('has a prefix of 4905 and a length of 19', function() {
    detectNetwork('4905847562831234789').should.equal('Switch');
});

it('has a prefix of 4911 and a length of 16', function() {
    detectNetwork('4911847562831234').should.equal('Switch');
});
it('has a prefix of 4911 and a length of 18', function() {
    detectNetwork('491184756283123478').should.equal('Switch');
});
it('has a prefix of 4911 and a length of 19', function() {
    detectNetwork('4911847562831234789').should.equal('Switch');
});

it('has a prefix of 4936 and a length of 16', function() {
    detectNetwork('4936847562831234').should.equal('Switch');
});
it('has a prefix of 4936 and a length of 18', function() {
    detectNetwork('493684756283123478').should.equal('Switch');
});
it('has a prefix of 4936 and a length of 19', function() {
    detectNetwork('4936847562831234789').should.equal('Switch');
});

it('has a prefix of 4905 and a length of 16', function() {
    detectNetwork('4905847562831234').should.equal('Switch');
});
it('has a prefix of 4905 and a length of 18', function() {
    detectNetwork('490584756283123478').should.equal('Switch');
});
it('has a prefix of 4905 and a length of 19', function() {
    detectNetwork('4905847562831234789').should.equal('Switch');
});

it('has a prefix of 6333 and a length of 16', function() {
    detectNetwork('6333847562831234').should.equal('Switch');
});
it('has a prefix of 6333 and a length of 18', function() {
    detectNetwork('633384756283123478').should.equal('Switch');
});
it('has a prefix of 6333 and a length of 19', function() {
    detectNetwork('6333847562831234789').should.equal('Switch');
});

it('has a prefix of 6759 and a length of 16', function() {
    detectNetwork('6759847562831234').should.equal('Switch');
});
it('has a prefix of 6759 and a length of 18', function() {
    detectNetwork('675984756283123478').should.equal('Switch');
});
it('has a prefix of 6759 and a length of 19', function() {
    detectNetwork('6759847562831234789').should.equal('Switch');
});

it('has a prefix of 564182 and a length of 16', function() {
    detectNetwork('5641828475628312').should.equal('Switch');
});
it('has a prefix of 564182 and a length of 18', function() {
    detectNetwork('564182847562831234').should.equal('Switch');
});
it('has a prefix of 564182 and a length of 19', function() {
    detectNetwork('5641828475628312347').should.equal('Switch');
});

it('has a prefix of 633110 and a length of 16', function() {
    detectNetwork('6331108475628312').should.equal('Switch');
});
it('has a prefix of 633110 and a length of 18', function() {
    detectNetwork('633110847562831234').should.equal('Switch');
});
it('has a prefix of 633110 and a length of 19', function() {
    detectNetwork('6331108475628312347').should.equal('Switch');
});

});