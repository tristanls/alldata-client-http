/*

new.js - new AllDataClient(options) test

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

var AllDataClient = require('../index.js');

var test = module.exports = {};

test['new AllDataClient() configures reqOptions with hostname from options'] = function (test) {
    test.expect(1);
    var allDataClient = new AllDataClient({hostname: "foo"});
    test.equal(allDataClient.reqOptions.hostname, "foo");
    test.done();
};

test['new AllDataClient() configures reqOptions with method from options'] = function (test) {
    test.expect(1);
    var allDataClient = new AllDataClient({method: "foo"});
    test.equal(allDataClient.reqOptions.method, "foo");
    test.done();
};

test['new AllDataClient() configures reqOptions with path from options'] = function (test) {
    test.expect(1);
    var allDataClient = new AllDataClient({path: "foo"});
    test.equal(allDataClient.reqOptions.path, "foo");
    test.done();
};

test['new AllDataClient() configures reqOptions with port from options'] = function (test) {
    test.expect(1);
    var allDataClient = new AllDataClient({port: 1337});
    test.equal(allDataClient.reqOptions.port, 1337);
    test.done();
};