(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.redis',\n    ignoreCase: true,\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    keywords: [\n        \"APPEND\", \"AUTH\", \"BGREWRITEAOF\", \"BGSAVE\", \"BITCOUNT\", \"BITFIELD\", \"BITOP\", \"BITPOS\", \"BLPOP\", \"BRPOP\", \"BRPOPLPUSH\",\n        \"CLIENT\", \"KILL\", \"LIST\", \"GETNAME\", \"PAUSE\", \"REPLY\", \"SETNAME\", \"CLUSTER\", \"ADDSLOTS\", \"COUNT-FAILURE-REPORTS\",\n        \"COUNTKEYSINSLOT\", \"DELSLOTS\", \"FAILOVER\", \"FORGET\", \"GETKEYSINSLOT\", \"INFO\", \"KEYSLOT\", \"MEET\", \"NODES\", \"REPLICATE\",\n        \"RESET\", \"SAVECONFIG\", \"SET-CONFIG-EPOCH\", \"SETSLOT\", \"SLAVES\", \"SLOTS\", \"COMMAND\", \"COUNT\", \"GETKEYS\", \"CONFIG\", \"GET\",\n        \"REWRITE\", \"SET\", \"RESETSTAT\", \"DBSIZE\", \"DEBUG\", \"OBJECT\", \"SEGFAULT\", \"DECR\", \"DECRBY\", \"DEL\", \"DISCARD\", \"DUMP\", \"ECHO\",\n        \"EVAL\", \"EVALSHA\", \"EXEC\", \"EXISTS\", \"EXPIRE\", \"EXPIREAT\", \"FLUSHALL\", \"FLUSHDB\", \"GEOADD\", \"GEOHASH\", \"GEOPOS\", \"GEODIST\",\n        \"GEORADIUS\", \"GEORADIUSBYMEMBER\", \"GETBIT\", \"GETRANGE\", \"GETSET\", \"HDEL\", \"HEXISTS\", \"HGET\", \"HGETALL\", \"HINCRBY\", \"HINCRBYFLOAT\",\n        \"HKEYS\", \"HLEN\", \"HMGET\", \"HMSET\", \"HSET\", \"HSETNX\", \"HSTRLEN\", \"HVALS\", \"INCR\", \"INCRBY\", \"INCRBYFLOAT\", \"KEYS\", \"LASTSAVE\",\n        \"LINDEX\", \"LINSERT\", \"LLEN\", \"LPOP\", \"LPUSH\", \"LPUSHX\", \"LRANGE\", \"LREM\", \"LSET\", \"LTRIM\", \"MGET\", \"MIGRATE\", \"MONITOR\",\n        \"MOVE\", \"MSET\", \"MSETNX\", \"MULTI\", \"PERSIST\", \"PEXPIRE\", \"PEXPIREAT\", \"PFADD\", \"PFCOUNT\", \"PFMERGE\", \"PING\", \"PSETEX\",\n        \"PSUBSCRIBE\", \"PUBSUB\", \"PTTL\", \"PUBLISH\", \"PUNSUBSCRIBE\", \"QUIT\", \"RANDOMKEY\", \"READONLY\", \"READWRITE\", \"RENAME\", \"RENAMENX\",\n        \"RESTORE\", \"ROLE\", \"RPOP\", \"RPOPLPUSH\", \"RPUSH\", \"RPUSHX\", \"SADD\", \"SAVE\", \"SCARD\", \"SCRIPT\", \"FLUSH\", \"LOAD\", \"SDIFF\",\n        \"SDIFFSTORE\", \"SELECT\", \"SETBIT\", \"SETEX\", \"SETNX\", \"SETRANGE\", \"SHUTDOWN\", \"SINTER\", \"SINTERSTORE\", \"SISMEMBER\", \"SLAVEOF\",\n        \"SLOWLOG\", \"SMEMBERS\", \"SMOVE\", \"SORT\", \"SPOP\", \"SRANDMEMBER\", \"SREM\", \"STRLEN\", \"SUBSCRIBE\", \"SUNION\", \"SUNIONSTORE\", \"SWAPDB\",\n        \"SYNC\", \"TIME\", \"TOUCH\", \"TTL\", \"TYPE\", \"UNSUBSCRIBE\", \"UNLINK\", \"UNWATCH\", \"WAIT\", \"WATCH\", \"ZADD\", \"ZCARD\", \"ZCOUNT\", \"ZINCRBY\",\n        \"ZINTERSTORE\", \"ZLEXCOUNT\", \"ZRANGE\", \"ZRANGEBYLEX\", \"ZREVRANGEBYLEX\", \"ZRANGEBYSCORE\", \"ZRANK\", \"ZREM\", \"ZREMRANGEBYLEX\",\n        \"ZREMRANGEBYRANK\", \"ZREMRANGEBYSCORE\", \"ZREVRANGE\", \"ZREVRANGEBYSCORE\", \"ZREVRANK\", \"ZSCORE\", \"ZUNIONSTORE\", \"SCAN\", \"SSCAN\",\n        \"HSCAN\", \"ZSCAN\"\n    ],\n    operators: [\n    // NOT SUPPORTED\n    ],\n    builtinFunctions: [\n    // NOT SUPPORTED\n    ],\n    builtinVariables: [\n    // NOT SUPPORTED\n    ],\n    pseudoColumns: [\n    // NOT SUPPORTED\n    ],\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            { include: '@pseudoColumns' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@scopes' },\n            [/[;,.]/, 'delimiter'],\n            [/[()]/, '@brackets'],\n            [/[\\w@#$]+/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@operators': 'operator',\n                        '@builtinVariables': 'predefined',\n                        '@builtinFunctions': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n            [/[<>=!%&+\\-*/|~^]/, 'operator'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white']\n        ],\n        pseudoColumns: [\n            [/[$][A-Za-z_][\\w@#$]*/, {\n                    cases: {\n                        '@pseudoColumns': 'predefined',\n                        '@default': 'identifier'\n                    }\n                }],\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*/, 'number'],\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\n        ],\n        strings: [\n            [/'/, { token: 'string', next: '@string' }],\n            [/\"/, { token: 'string.double', next: '@stringDouble' }]\n        ],\n        string: [\n            [/[^']+/, 'string'],\n            [/''/, 'string'],\n            [/'/, { token: 'string', next: '@pop' }],\n        ],\n        stringDouble: [\n            [/[^\"]+/, 'string.double'],\n            [/\"\"/, 'string.double'],\n            [/\"/, { token: 'string.double', next: '@pop' }]\n        ],\n        scopes: [\n        // NOT SUPPORTED\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3JlZGlzL3JlZGlzLmpzLmpzIiwic291cmNlcyI6WyIvaG9tZS90cm95LmdpYmIvY29kZS9vcGVuX3NvdXJjZS93ZWJ2aXovbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9yZWRpcy9yZWRpcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBicmFja2V0czogW1xuICAgICAgICBbJ3snLCAnfSddLFxuICAgICAgICBbJ1snLCAnXSddLFxuICAgICAgICBbJygnLCAnKSddXG4gICAgXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiAnXFwnJywgY2xvc2U6ICdcXCcnIH0sXG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcucmVkaXMnLFxuICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScsIHRva2VuOiAnZGVsaW1pdGVyLnNxdWFyZScgfSxcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScsIHRva2VuOiAnZGVsaW1pdGVyLnBhcmVudGhlc2lzJyB9XG4gICAgXSxcbiAgICBrZXl3b3JkczogW1xuICAgICAgICBcIkFQUEVORFwiLCBcIkFVVEhcIiwgXCJCR1JFV1JJVEVBT0ZcIiwgXCJCR1NBVkVcIiwgXCJCSVRDT1VOVFwiLCBcIkJJVEZJRUxEXCIsIFwiQklUT1BcIiwgXCJCSVRQT1NcIiwgXCJCTFBPUFwiLCBcIkJSUE9QXCIsIFwiQlJQT1BMUFVTSFwiLFxuICAgICAgICBcIkNMSUVOVFwiLCBcIktJTExcIiwgXCJMSVNUXCIsIFwiR0VUTkFNRVwiLCBcIlBBVVNFXCIsIFwiUkVQTFlcIiwgXCJTRVROQU1FXCIsIFwiQ0xVU1RFUlwiLCBcIkFERFNMT1RTXCIsIFwiQ09VTlQtRkFJTFVSRS1SRVBPUlRTXCIsXG4gICAgICAgIFwiQ09VTlRLRVlTSU5TTE9UXCIsIFwiREVMU0xPVFNcIiwgXCJGQUlMT1ZFUlwiLCBcIkZPUkdFVFwiLCBcIkdFVEtFWVNJTlNMT1RcIiwgXCJJTkZPXCIsIFwiS0VZU0xPVFwiLCBcIk1FRVRcIiwgXCJOT0RFU1wiLCBcIlJFUExJQ0FURVwiLFxuICAgICAgICBcIlJFU0VUXCIsIFwiU0FWRUNPTkZJR1wiLCBcIlNFVC1DT05GSUctRVBPQ0hcIiwgXCJTRVRTTE9UXCIsIFwiU0xBVkVTXCIsIFwiU0xPVFNcIiwgXCJDT01NQU5EXCIsIFwiQ09VTlRcIiwgXCJHRVRLRVlTXCIsIFwiQ09ORklHXCIsIFwiR0VUXCIsXG4gICAgICAgIFwiUkVXUklURVwiLCBcIlNFVFwiLCBcIlJFU0VUU1RBVFwiLCBcIkRCU0laRVwiLCBcIkRFQlVHXCIsIFwiT0JKRUNUXCIsIFwiU0VHRkFVTFRcIiwgXCJERUNSXCIsIFwiREVDUkJZXCIsIFwiREVMXCIsIFwiRElTQ0FSRFwiLCBcIkRVTVBcIiwgXCJFQ0hPXCIsXG4gICAgICAgIFwiRVZBTFwiLCBcIkVWQUxTSEFcIiwgXCJFWEVDXCIsIFwiRVhJU1RTXCIsIFwiRVhQSVJFXCIsIFwiRVhQSVJFQVRcIiwgXCJGTFVTSEFMTFwiLCBcIkZMVVNIREJcIiwgXCJHRU9BRERcIiwgXCJHRU9IQVNIXCIsIFwiR0VPUE9TXCIsIFwiR0VPRElTVFwiLFxuICAgICAgICBcIkdFT1JBRElVU1wiLCBcIkdFT1JBRElVU0JZTUVNQkVSXCIsIFwiR0VUQklUXCIsIFwiR0VUUkFOR0VcIiwgXCJHRVRTRVRcIiwgXCJIREVMXCIsIFwiSEVYSVNUU1wiLCBcIkhHRVRcIiwgXCJIR0VUQUxMXCIsIFwiSElOQ1JCWVwiLCBcIkhJTkNSQllGTE9BVFwiLFxuICAgICAgICBcIkhLRVlTXCIsIFwiSExFTlwiLCBcIkhNR0VUXCIsIFwiSE1TRVRcIiwgXCJIU0VUXCIsIFwiSFNFVE5YXCIsIFwiSFNUUkxFTlwiLCBcIkhWQUxTXCIsIFwiSU5DUlwiLCBcIklOQ1JCWVwiLCBcIklOQ1JCWUZMT0FUXCIsIFwiS0VZU1wiLCBcIkxBU1RTQVZFXCIsXG4gICAgICAgIFwiTElOREVYXCIsIFwiTElOU0VSVFwiLCBcIkxMRU5cIiwgXCJMUE9QXCIsIFwiTFBVU0hcIiwgXCJMUFVTSFhcIiwgXCJMUkFOR0VcIiwgXCJMUkVNXCIsIFwiTFNFVFwiLCBcIkxUUklNXCIsIFwiTUdFVFwiLCBcIk1JR1JBVEVcIiwgXCJNT05JVE9SXCIsXG4gICAgICAgIFwiTU9WRVwiLCBcIk1TRVRcIiwgXCJNU0VUTlhcIiwgXCJNVUxUSVwiLCBcIlBFUlNJU1RcIiwgXCJQRVhQSVJFXCIsIFwiUEVYUElSRUFUXCIsIFwiUEZBRERcIiwgXCJQRkNPVU5UXCIsIFwiUEZNRVJHRVwiLCBcIlBJTkdcIiwgXCJQU0VURVhcIixcbiAgICAgICAgXCJQU1VCU0NSSUJFXCIsIFwiUFVCU1VCXCIsIFwiUFRUTFwiLCBcIlBVQkxJU0hcIiwgXCJQVU5TVUJTQ1JJQkVcIiwgXCJRVUlUXCIsIFwiUkFORE9NS0VZXCIsIFwiUkVBRE9OTFlcIiwgXCJSRUFEV1JJVEVcIiwgXCJSRU5BTUVcIiwgXCJSRU5BTUVOWFwiLFxuICAgICAgICBcIlJFU1RPUkVcIiwgXCJST0xFXCIsIFwiUlBPUFwiLCBcIlJQT1BMUFVTSFwiLCBcIlJQVVNIXCIsIFwiUlBVU0hYXCIsIFwiU0FERFwiLCBcIlNBVkVcIiwgXCJTQ0FSRFwiLCBcIlNDUklQVFwiLCBcIkZMVVNIXCIsIFwiTE9BRFwiLCBcIlNESUZGXCIsXG4gICAgICAgIFwiU0RJRkZTVE9SRVwiLCBcIlNFTEVDVFwiLCBcIlNFVEJJVFwiLCBcIlNFVEVYXCIsIFwiU0VUTlhcIiwgXCJTRVRSQU5HRVwiLCBcIlNIVVRET1dOXCIsIFwiU0lOVEVSXCIsIFwiU0lOVEVSU1RPUkVcIiwgXCJTSVNNRU1CRVJcIiwgXCJTTEFWRU9GXCIsXG4gICAgICAgIFwiU0xPV0xPR1wiLCBcIlNNRU1CRVJTXCIsIFwiU01PVkVcIiwgXCJTT1JUXCIsIFwiU1BPUFwiLCBcIlNSQU5ETUVNQkVSXCIsIFwiU1JFTVwiLCBcIlNUUkxFTlwiLCBcIlNVQlNDUklCRVwiLCBcIlNVTklPTlwiLCBcIlNVTklPTlNUT1JFXCIsIFwiU1dBUERCXCIsXG4gICAgICAgIFwiU1lOQ1wiLCBcIlRJTUVcIiwgXCJUT1VDSFwiLCBcIlRUTFwiLCBcIlRZUEVcIiwgXCJVTlNVQlNDUklCRVwiLCBcIlVOTElOS1wiLCBcIlVOV0FUQ0hcIiwgXCJXQUlUXCIsIFwiV0FUQ0hcIiwgXCJaQUREXCIsIFwiWkNBUkRcIiwgXCJaQ09VTlRcIiwgXCJaSU5DUkJZXCIsXG4gICAgICAgIFwiWklOVEVSU1RPUkVcIiwgXCJaTEVYQ09VTlRcIiwgXCJaUkFOR0VcIiwgXCJaUkFOR0VCWUxFWFwiLCBcIlpSRVZSQU5HRUJZTEVYXCIsIFwiWlJBTkdFQllTQ09SRVwiLCBcIlpSQU5LXCIsIFwiWlJFTVwiLCBcIlpSRU1SQU5HRUJZTEVYXCIsXG4gICAgICAgIFwiWlJFTVJBTkdFQllSQU5LXCIsIFwiWlJFTVJBTkdFQllTQ09SRVwiLCBcIlpSRVZSQU5HRVwiLCBcIlpSRVZSQU5HRUJZU0NPUkVcIiwgXCJaUkVWUkFOS1wiLCBcIlpTQ09SRVwiLCBcIlpVTklPTlNUT1JFXCIsIFwiU0NBTlwiLCBcIlNTQ0FOXCIsXG4gICAgICAgIFwiSFNDQU5cIiwgXCJaU0NBTlwiXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAvLyBOT1QgU1VQUE9SVEVEXG4gICAgXSxcbiAgICBidWlsdGluRnVuY3Rpb25zOiBbXG4gICAgLy8gTk9UIFNVUFBPUlRFRFxuICAgIF0sXG4gICAgYnVpbHRpblZhcmlhYmxlczogW1xuICAgIC8vIE5PVCBTVVBQT1JURURcbiAgICBdLFxuICAgIHBzZXVkb0NvbHVtbnM6IFtcbiAgICAvLyBOT1QgU1VQUE9SVEVEXG4gICAgXSxcbiAgICB0b2tlbml6ZXI6IHtcbiAgICAgICAgcm9vdDogW1xuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcHNldWRvQ29sdW1ucycgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BudW1iZXJzJyB9LFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHN0cmluZ3MnIH0sXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2NvcGVzJyB9LFxuICAgICAgICAgICAgWy9bOywuXS8sICdkZWxpbWl0ZXInXSxcbiAgICAgICAgICAgIFsvWygpXS8sICdAYnJhY2tldHMnXSxcbiAgICAgICAgICAgIFsvW1xcd0AjJF0rLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0BrZXl3b3Jkcyc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpblZhcmlhYmxlcyc6ICdwcmVkZWZpbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAYnVpbHRpbkZ1bmN0aW9ucyc6ICdwcmVkZWZpbmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBbL1s8Pj0hJSYrXFwtKi98fl5dLywgJ29wZXJhdG9yJ10sXG4gICAgICAgIF0sXG4gICAgICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgICAgICAgIFsvXFxzKy8sICd3aGl0ZSddXG4gICAgICAgIF0sXG4gICAgICAgIHBzZXVkb0NvbHVtbnM6IFtcbiAgICAgICAgICAgIFsvWyRdW0EtWmEtel9dW1xcd0AjJF0qLywge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Bwc2V1ZG9Db2x1bW5zJzogJ3ByZWRlZmluZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgXSxcbiAgICAgICAgbnVtYmVyczogW1xuICAgICAgICAgICAgWy8wW3hYXVswLTlhLWZBLUZdKi8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvWyRdWystXSpcXGQqKFxcLlxcZCopPy8sICdudW1iZXInXSxcbiAgICAgICAgICAgIFsvKChcXGQrKFxcLlxcZCopPyl8KFxcLlxcZCspKShbZUVdW1xcLStdP1xcZCspPy8sICdudW1iZXInXVxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdzOiBbXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0BzdHJpbmcnIH1dLFxuICAgICAgICAgICAgWy9cIi8sIHsgdG9rZW46ICdzdHJpbmcuZG91YmxlJywgbmV4dDogJ0BzdHJpbmdEb3VibGUnIH1dXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmluZzogW1xuICAgICAgICAgICAgWy9bXiddKy8sICdzdHJpbmcnXSxcbiAgICAgICAgICAgIFsvJycvLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICBbLycvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH1dLFxuICAgICAgICBdLFxuICAgICAgICBzdHJpbmdEb3VibGU6IFtcbiAgICAgICAgICAgIFsvW15cIl0rLywgJ3N0cmluZy5kb3VibGUnXSxcbiAgICAgICAgICAgIFsvXCJcIi8sICdzdHJpbmcuZG91YmxlJ10sXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5kb3VibGUnLCBuZXh0OiAnQHBvcCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgc2NvcGVzOiBbXG4gICAgICAgIC8vIE5PVCBTVVBQT1JURURcbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js\n");

/***/ })

}]);