---
title: 'The ZeroMQ Protocol'
image: '/zeromqprot/0mq0.png'
alt: 'Urara'
created: 2023-08-06
updated: 2021-08-06
tags:
  - 'Hello World'
---

# WHY USE ZEROMQ??
https://zeromq.org/

---

### Speed and performance:
Zeromq is a very low-level fast asynchronous messaging library that can handle large amounts of connections and requests under seconds. It was able to get a transfer rate of 10,000 messages per 15 milliseconds, or between 66,000 and 70,000 messages/s under low-latency and it was able to beat rabbitmq , kafka and many other network libraries. ZeroMq fast transfer rates and handling along with golang's effecient concurency and multithreading will make the C2 faster than ever

---

### Lightweight and Efficient:
zeromq lightweight and low level library made in C++ uses as little resources as possible while maintaining the best performance

---

### Security:
zeromq uses CurveZMQ which is an authentication and encryption protocol for ZeroMQ. This can be used to authenticate and encrypt C2 comms fending off network analyst. Zeromq also uses zmtp which is special type of protocol used for communication. 

---

### Load balancing :
ZeroMq has a builtin load balancer, more workers will increase performance in the cost of resources.

---

PolyC2's Webserver and API will be handled by socketify. 

https://github.com/cirospaciari/socketify.py

Socketfiy is focussed on speed and simplicity , and its easy for developers to configure and use socketify. Socketfiy is very fast and faster than gin(golang), fiber(golang), django and fastapi. Socketify pypy3 is able to handle lots of requests per seconds and send over millions of request per seconds. Socketify makes it the ultimate web framework for C2 api and webservers. 

---
