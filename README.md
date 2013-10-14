# alldata-client-http

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

[![NPM version](https://badge.fury.io/js/alldata-client-http.png)](http://npmjs.org/package/alldata-client-http)

Client HTTP module for [AllData](https://github.com/tristanls/alldata), a distributed master-less write-once immutable event store database implementing "All Data" part of [Lambda Architecture](http://www.slideshare.net/nathanmarz/runaway-complexity-in-big-data-and-a-plan-to-stop-it).

## Usage

```javascript
var AllDataClient = require('alldata-client-http');
var allDataClient = new AllDataClient({
    hostname: "localhost",
    method: "POST",
    path: "/put",
    port: 80 
});

var event1 = {customer: 1, action: "site visit"};

allDataClient.put(event1);

var event2 = {customer: 1, action: "login"};

allDataClient.put(event2, function (error) {
    if (error) {
        console.log("Saving event2 failed: " + error.message);
    } else {
        console.log("Saving event2 succeeded.");
    }
});
```

## Test

    npm test

## Overview

AllDataClient is an HTTP client for [AllData](https://github.com/tristanls/alldata). Once configured, it sends HTTP requests for every event.

## Documentation

### AllDataClient

**Public API**

  * [new AllDataClient(options)](#new-alldataclientoptions)
  * [allDataClient.put(event, \[callback\])](#alldataclientputevent-callback)

#### new AllDataClient(options)

  * `options`: _Object_
    * `hostname`: _String_ _(Default: `localhost`)_ HTTP hostname of the AllData server.
    * `method`: _String_ _(Default: `POST`)_ HTTP method.
    * `path`: _String_ _(Default: `/`)_ HTTP request path.
    * `port`: _Number_ _(Default: 80)_ HTTP port of remote server.

Creates a new instance of AllDataClient.

#### allDataClient.put(event, [callback])

  * `event`: _Object_ JavaScript object representing the event to store.
  * `callback`: _Function_ _(Default: undefined)_ An optional callback to call
          in case of success or failure.

Attempts to store the `event` in AllData service via HTTP. If a `callback` is provided it will be called with an `Error` instance if an error occurs or with no parameters otherwise.

```javascript
allDataClient.put({foo: 'bar'}, function (error) {
    if (error) console.log('put failed: ' + error.message);
});
```

## Sources

  - [Runaway complexity in Big Data And a plan to stop it](http://www.slideshare.net/nathanmarz/runaway-complexity-in-big-data-and-a-plan-to-stop-it).