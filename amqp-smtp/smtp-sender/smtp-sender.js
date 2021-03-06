#!/usr/bin/env node

/**
 * @file
 * Binding Component implementation automatically generated by
 * the Social Communication Platform.
 *
 * Characteristics:
 * - Type: SMTP sender.
 */

var mailer = require('./lib/mailer');
var conf = require('./conf/smtp-sender.conf');

/**
 * Sends a message to the Social Communication Platform Bus.
 * Protocol: AMQP.
 * @param {string} msg - The message to send.
 */
exports.post = function(msg) {

    opts = {
        from: 'Simple Notification Service <test@test.com>',
        to: conf.address,
        subject: 'new post' + ' happened at: ' + new Date(),
        body: msg
    }
    mailer.sendMail(opts);
};
