#!/usr/bin/env node

//libs
const request = require('request');

// variables
const sourcePrefix = 'http://www.indoorclimbing.com/',
    sourceFileLink = 'worldgyms.html',
    placeLinkExceprions = ['worldgyms.html',
        'climbing_walls.html',
        'climbing_training.html',
        'Climbing_Knots.html',
        'climbing_gear.html'];



/**
 *
 * @param sourcePrefix
 * @param sourceFileLink
 * @returns {Promise}
 */

function getPromise(sourcePrefix, sourceFileLink) {
    return new Promise(function(resolve, reject) {
        request(sourcePrefix + sourceFileLink, function(error, response, body) {
            if (error) {
                reject(error);
            }
            resolve(body);
        });
    });
}

let p = getPromise(sourcePrefix, sourceFileLink);

p.then(str => {
    let patt = /<a href="(.*\.html)">(.*)<\/a>/g,
        match,
        placeLinkList = [];

    while ( match = patt.exec(str) ) {
        placeLinkList.push(match[1]);
    }
    return placeLinkList;

}).then(placeLinkList => {
    console.log(placeLinkList);
    placeLinkList.forEach(placeLink => {

    });
    // return Promise.all();
});