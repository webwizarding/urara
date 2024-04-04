# POST
### Summary: 
Argonhosting is a cheap hosting service that advertises powerful ddos protection, good security, and good hosting 

### Drama: 
They claim their billing page is customized by them but its just a premade one from something like stripe
On their discord, they display that their hosting is by them but discovering behind their website hosting and a client Minecraft server hosting it reveals they resell hosturly servers
Updates will follow...

Vulns below have supposedly been fixed but no sign of any damage control has been done but the covering up of these vulnerabilities

--- 

### MISTAKE 1 Ip history 
They tried protecting their server by putting cloudflare UAM on it but it makes no difference because we are able to look up the IP History of the domain and you can clearly see the origin server that hosted the server before cloudflare was put on

---

### MISTAKE 2 UFW 
They didn’t enable UFW so the host/domain can easily be found with related servers including the origin servers 
This allows us to get a lot of information of the host without doing any work but if it had UFW properly setup it would be a different story 

---

### MISTAKE 3 MariaDB 
Going back to the UFW mistake we can find the server that contains the database 
With finding the server we can portscan or find the port that receives the database information/OS information 
In this instance we made a special request to get the information of the server which came to this

```
3306 / TCP
MariaDB10.6.12-MariaDB-0ubuntu0.22.04.1
MariaDB:
  Protocol Version: 10
  Version: 10.6.12-MariaDB-0ubuntu0.22.04.1
  Capabilities: 63486
  Server Language: 45
  Server Status: 2
  Extended Server Capabilities: 33279
  Authentication Plugin: mysql_native_password
```

MariaDB is a fork of MySQL as MySQL is quite old so it still has the same exploits or vulnerabilities 
A vulnerability we can exploit is a mariaDB/MySQL DB password brute force which looks like this 

```
Warning: MaxLen = 8 is too large for the current hash type, reduced to 5
words: 16382  time: 0:00:00:02  w/s: 6262  current: citcH
words: 24573  time: 0:00:00:04  w/s: 4916  current: rap
words: 40956  time: 0:00:00:07  w/s: 5498  current: matc3
words: 49147  time: 0:00:00:09  w/s: 5030  current: 4429
words: 65530  time: 0:00:00:12  w/s: 5354  current: ch141
words: 73721  time: 0:00:00:14  w/s: 5021  current: v3n
words: 90104  time: 0:00:00:17  w/s: 5277  current: pun2
[*] Cracked! --> pass
words: 98295  time: 0:00:00:18  w/s: 5434  current: 43gs
Session aborted
```

The other vulnerabilities are as listed (MariaDB/MySQL Related):
CVE:2012-5627
CVE:2013-1861

---

### MISTAKE 4 Common Vulns 
Returning to the fact the origin server and host related servers are exposed you can find CVE’s that are related to the hardware or server 

These are the CVE’s they’re vulnerable to:
CVE-2021-23017
CVE-2021-3618
