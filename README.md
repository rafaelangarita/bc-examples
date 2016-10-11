# BC Examples

Here, you can find some examples of BCs and dummy senders. These BCs were automatically generated by the Social Communication Platform. 
All examples use AMQP as the Social Communication Platform protocol and were generated for the Node.js environment.

###### AMQP to SMTP

- BCs:

This example has two BCs:

1) *amqp-subscriber BC*: it subscribes to an AMQP broker and sends events to the Social Communication Platform via AMQP. Note that there is no protocol mediation between the AMQP broker and the Social Communication Platform since they both talk AMQP; however, this BC is needed as a AMQP subscription endpoint.

2) *smtp-sender BC*: it receives AMQP messages from the Social Communication Platform and sends them using the SMTP protocol.

- Dummy Producer:

There is a AMQP producer written for Node.js.

###### HTTP to SMTP

This example has two BCs:

1) *http-endpoint BC*: it is an HTTP server exposing a POST method. It sends received messages to the Social Communication Platform via AMQP.
2) *smtp-sender BC*: it receives AMQP messages from the Social Communication Platform and sends them using the SMTP protocol.

- Dummy Producer:

There are two types of the HTTP producer: one sending **x-www-form-urlencoded** data; the other sending **json** data. Both types of producers are available in Java and un curl.

###### AMQP to HTTP

This example includes only one BC:

1) *http-sender BC*: it receives AMQP messages from the Social Communication Platform and sends them via HTTP to an HTTP server.

- Dummy Producer:

There is a AMQP producer written for Node.js.

- Dummy Receiver:

This example also includes a dummy HTTP receiver written for Node.js. It is an HTTP server with a POST method.

## BC Configuration

Configuration parameters depend on the type pf the BC; however, all configuration files are located in the conf folder inside the BC's root folder.

## BC Execution

The main file of BCs is called **start-bc** and it is located inside the BC's root folder. To execute a BC, you have to run this file. How to run it depends on the platform the BC was generated for.

- *Node.js BC execution*: node start-bc.js

To run the examples in this repository you have to:

- configure both sender and receiver BCs;
- run both BCs;
- run a dummy producer;

Then you can watch the console output of both BCs to see the sending and reception of messages.

## More

BCs written for Node.js are deployed following some of the best production practices described in:

- [Production best practices if you are using Node.js BCs](https://expressjs.com/en/advanced/best-practice-performance.html).

In particular, BCs are deployed using the Strong Loop Process Manager (don't forget to install the process manager as a service with the init system in case the server restarts). This way, BCs restart automatically if they crash. You can use the command `slc ctl ls` to see which BCs are running in the process manager. The output will look like this when running two of the example BCs:

```
Id          Name         Scale
 1     http-endpoint       1
 2      smtp-sender        1
 ```
 
 You can also find some additional services you can play with:
 
- [Slack](https://github.com/rafaelangarita/slack-sender).
- [Email subscriber and notifier](https://github.com/rafaelangarita/email-notification-service).
