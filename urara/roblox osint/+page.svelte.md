---
title: 'Roblox Osint'
image: '/hello-world/urara.webp'
alt: 'Urara'
created: 2023-11-23
updated: 2021-11-23
tags:
  - 'Hello World'
---

# POST

### ROBLOX?

What information can we pull from a normal user on a roblox game? lets get into it

*This topic was researched a while ago so it may not be applicable but its nice to know
Short post too!!!
————————————————


### General Location Finding

We can actually pull information on the device to find out where the user is generally
By using the 'GetCountryRegionForPlayerAsync' it already gives us a general Country/Region in which the user is from
To continue this triangulation of the user we can also use 'PolyService:GetPolicyInfoForPlayerAsync()' 
to be able to "returns policy information about a player which is based on geolocation, age group and platform"
This can give us many things like if the player can interact with paid random item generators, if they can see social media links,
if they can trade virtual items and if they are subject to chinese policies can give us even more hints where the user is from

The even crazy thing is that we are also able to use 'DeviceGravityChanged' which is able to detect if the force of gravity
changes on the devices accelerometer, this can also be done to detect gravitational anomalies that allow us to trianglate a closer 
area to where they are depending on earthse gravity field anomalies depending on miligals (-50 to 50)

————————————————

### User Data

We are able to utilize roblox's api to retreive account information, Metadata, Phone Information, Promotion Channel, StarCodeAffliate, Roblox badges
and Email Information
This is vital to find out more about the user
To be able to have this work we must use the 'HttpService' to be intertwined with the roblox account api

Another small thing I want to mention is the 'UserInputService' that is able to give us information about the detection and capture of different types of input
from the users device 

————————————————
 
### SOURCES

```
https://developer.roblox.com/en-us/api-reference/class/UserInputService
https://developer.roblox.com/en-us/api-reference/lua-docs/os
https://developer.roblox.com/en-us/api-reference/class/LocalizationService
https://developer.roblox.com/en-us/api-reference/class/HttpService
https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetCountryRegionForPlayerAsync
https://developer.roblox.com/en-us/api-reference/class/UserInputService
https://accountinformation.roblox.com/docs#!/PhoneInformation/post_v1_phone
```

————————————————
