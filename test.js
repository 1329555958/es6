/**
 * Created by weichunhe on 2015/10/13.
 */
var Jasmine = require('jasmine');
var jasmine = new Jasmine();
jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'appSpec.js',
        'requests/**/*[sS]pec.js',
        'utils/**/*[sS]pec.js',
        '**/*.js'
    ],
    helpers: [
        'helpers/**/*.js'
    ]
});

jasmine.onComplete(function (passed) {
    if (passed) {
        console.log('All specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }
});

//jasmine.configureDefaultReporter({
//    timer: new this.jasmine.Timer(),
//    print: function () {
//        process.stdout.write(util.format.apply(this, arguments));
//    },
//    showColors: true,
//    jasmineCorePath: this.jasmineCorePath
//});

jasmine.execute();