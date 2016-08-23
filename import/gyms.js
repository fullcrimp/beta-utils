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




class Crawler {
    constructor (address) {
        this.exceptions = [];
        this.address = address;
        this.localLinkPattern = /<a href="(.*\.html)">(.*)<\/a>/g;
    }

    /**
     *
     * @param page
     * @param pattern
     * @param exceptions
     */
    get (entryPage) {

    }


    getLocalReferences (page, exceptions) {
        this.exceptions = exceptions;

        return new Promise((resolve, reject) => {
            request(this.address + page, function(error, response, body) {
                if (error) {
                    reject(error);
                }
                resolve(body);
            });
        }).then((body) => {
            return this.search(body, this.localLinkPattern)}
        ).then((result) => {




            // console.log(result);
        });
    }



    search(str) {
        let match, matches = [];

        while ( match = this.pattern.exec(str) ) {
            if(this.exceptions.indexOf(match[1]) < 0 ) {
                matches.push(match[1]);
            }
        }
        return matches;
    }
}



let entryPoint = new Crawler('http://www.indoorclimbing.com/'),
    exceptions

entryPoint.get(
    'worldgyms.html',
    exceptions);


// function getPromise(sourcePrefix, sourceFileLink) {
//     return new Promise(function(resolve, reject) {
//         request(sourcePrefix + sourceFileLink, function(error, response, body) {
//             if (error) {
//                 reject(error);
//             }
//             resolve(body);
//         });
//     });
// }
//
// let p = getPromise(sourcePrefix, sourceFileLink);
//
// p.then(str => {
//     let patt = /<a href="(.*\.html)">(.*)<\/a>/g,
//         match,
//         placeLinkList = [];
//
//     while ( match = patt.exec(str) ) {
//         placeLinkList.push(match[1]);
//     }
//     return placeLinkList;
//
// }).then(placeLinkList => {
//     console.log(placeLinkList);
//     placeLinkList.forEach(placeLink => {
//
//     });
//     // return Promise.all();
// });