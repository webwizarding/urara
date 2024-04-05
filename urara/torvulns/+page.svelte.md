# POST


This post will go through the vulnerabilites of tor/torbrowser, onion balance and the stem library. 
The vulnerabilties may not directly affect the onion relay protocol but nontheless Tor is not entirely secure.

---

## Tor/TorBrowser

The Tor/Torbrowser in total have 41 combined found vulnerabilties 
We will only be going over the important vulns I think is interesting

```
‎scripts/test/appveyor-irc-notify.py
```
CWE-327 (https://cwe.mitre.org/data/definitions/327.html)
Calling to a deprecated function like ssl.wrap_socket doesnt entirely specify the protocol and can result in an insecure default being used
Some ways we can try preventing this is avoiding calling ssl.wrap_socket without specifying the ssl_version

Using ssl.wrap_socket without specifying the ssl_version can lead to an outdated and weak security protocol It's crucial to encrypt sensitive data for protection Encryption standards need to stay current because attackers keep getting better at breaking them So your encryption should always be up to date and strong enough for the type of data you have

```
‎scripts/maint/add_c_file.py
```
CWE-23 (https://cwe.mitre.org/data/definitions/23.html)
Unsanitized input from a command line argument flows into open where it used as a path so it can become a path traversal vulnerability that can allow someone to write arbitrary files
With a vulnerability like this we can do something known as a directory traversal attack which main purpose is to access files and directories that are stored outside the intended folder
In this example it is a Zip-Slip type vulnerability that allows us to create and replace existing files which we can use something like this

```
curl http://localhost:8080/public/%2e%2e/%2e%2e/%2e%2e/%2e%2e/%2e%2e/root/.ssh/id_rsa
```
That will allow use to leak the private key of root and then using a malicious zip archive that holds path traversal filenames then when the zip archive is extracted it will result in traversing out the target folder and ending up in a /root/.ssh/ directory for example

```
torbrowser_launcher/common.py
```
CWE-502 (https://cwe.mitre.org/data/definitions/502.html)

Unsantized input from a command line argument flows into pickle.load where it can result in unsafe deserialization vulns
The vulnerability that can be found here is a process of converting an object into a sequence of bytes that can persist to a disk or database that can be sent through streams


---

## Onionbalance V3

This has a total of 20 reps and its primary function is to allow tor onion service requests to be distributed across multiple backend tor instances
and it provides load balancing while also making onion services more resilient and reliable by elimating single points of failure

```
versioneer.py:393
```
CWE-78 (https://cwe.mitre.org/data/definitions/78.html)
Unsanitized input from command line argument flows into subprocess.popen that can result in a command injection vulnerability
The vulnerability can be done by using an OS command injection attack that allows users to pass commands directly to the system shell attached to a legit request

---

## Stem (Python Tor Library)

This rep has 27 vulnerabilities
Stem is a Python controller library for Tor With it you can use Tor's control protocol to script against the Tor process or build things such as Nyx

```
docs/_static/example/words_with.py
```
CWE-400 (https://cwe.mitre.org/data/definitions/400.html)
User input from user input flows into re.compile can have a result of a ReDOS vuln
This vulnerability is mainly surrounded around the regex engine that uses regular expressions to make a system inaccessible to users
It can be done by using a regex regular expression string that includes 14 C's that the engine needs to take over 65k steps just to see if the string is a valid string
it will cause the CPU to be overloaded and work very slowly becoming a DOS

---
