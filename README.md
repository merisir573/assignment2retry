NOTE: I was unsure wether or not the README had to be in English or not, just in case I am writing in English.

Github Link:
https://github.com/merisir573/assignment2retry

Swagger Link:

http://localhost:4000/swagger (Gateway)

http://localhost:3000/swagger (Midterm API)(NOTE: Needs to be deployed first)

Video Link:
https://youtu.be/WBiZBQctDqY (NOTE: The video is send only, if it doesn't work, please send an E-Mail so I can change it to public)

---My Design---

My design is relatively straightforward, we first build our API as images into Docker and then we use the docker compose file to deploy the gateway, I made a POST function so that we can deploy any given API through Docker using the name and port we specify.

---Assumptions Made---

A huge assumption I made was remembering a dialogue about two weeks ago in class wherein one of my fellow classmates asked how we could do three endpoints if we made one for our Midterm, at which point our professor stated that we should just deploy the one we made. The reason this is an assumption is because this isn't reflected in the PDF and thus I'm going purely by memory.

However, to mitigate any potential problems caused by this assumption, I made a POST function for the gateway so as to be able to deploy any name and port specified. I'm not sure if this is technically how it's suppose to work, so this can be considered an assumption on my end.

Aside from this, there weren't really any assumptions I had to make as the process was relatively straightforward.

---Issues I Encountered---

One big issue that I encountered had to do with Visual Code Studio itself. I had made the midterm project in a folder such that there wasn't really a proper root folder where I could make the gateway API as well as write the docker-compose in. This caused issues as Visual Code Studio and Docker gave me errors about renaming the original midterm folder or permissions while trying to build images.

Aside from that, there weren't any issues that I encountered as far as I can remember, it was a relatively straightforward process.
