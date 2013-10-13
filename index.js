/*

index.js - "alldata-client-http": AllData HTTP client module

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

var events = require('events'),
    http = require('http'),
    util = require('util');

/*
  * `options`: _Object_
    * `hostname`: _String_ _(Default: `localhost`)_ HTTP hostname of the AllData 
            server.
    * `method`: _String_ _(Default: `POST`)_ HTTP method.
    * `path`: _String_ _(Default: `/`)_ HTTP request path.
    * `port`: _Number_ _(Default: 80)_ HTTP port of remote server.
*/
var AllDataClient = module.exports = function AllDataClient (options) {
    var self = this;
    events.EventEmitter.call(self);

    options = options || {};

    self.reqOptions = {
        hostname: options.hostname || "localhost",
        method: options.method || "POST",
        path: options.path || "/",
        port: options.port || 80
    };
};

util.inherits(AllDataClient, events.EventEmitter);

/*
  * `event`: _Object_ JavaScript object representing the event to store.
  * `callback`: _Function_ _(Default: undefined)_ An optional callback to call
          in case of success or failure.
*/
AllDataClient.prototype.put = function put (event, callback) {
    var self = this;

    var req;
    if (callback) {
        req = http.request(self.reqOptions, function (res) {
            // 201 Created is success
            if (res.statusCode == 201)
                return callback();
            
            var data = "";
            res.on('data', function (chunk) {
                data += chunk.toString('utf8');
            });
            res.on('error', function (e) {
                return callback(e);
            });

            res.on('end', function () {
                return callback(new Error(data));
            });
        });
    } else {
        req = http.request(self.reqOptions);
    }

    if (callback) {
        req.on('error', function (e) {
            return callback(e);
        });
    }

    req.write(JSON.stringify(event));
    req.end();
};