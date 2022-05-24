# Phase 3 Project
## Description
This is the frontend repository (or the physical webpage) for the Phase 3 Project.  

This project uses JavaScript and React to fetch the Trip and Item objects from the backend repository (the database),

which is then displayed, according to which Item belongs to what Trip.  

The Trip objects have full CRUD capability, but currently the Items can only be created and deleted.

## Visuals
[My Demonstration]https://www.youtube.com/watch?v=unShpDKaARg

## Installation
To install this **entire** application, you will need to **fork and clone** these two repositories:

[Backend Repository](https://github.com/SoraEagle/phase-3-sinatra-react-project)

[Frontend Repository](https://github.com/SoraEagle/phase-3-sinatra-react-frontend)

Afterwards, make sure to use `bundle install` to install the gems.
## Usage

### Run Backend (Server) Side
You can start your server with
```
bundle exec rake server
```
This will run your server on port 

To view some of the JSON data in the database, you can use either the [Trips](http://localhost:9292/trips) or [Items](http://localhost:9292/items) link.
### Run Frontent (Client) Side
**NOTICE**: Before running the frontend server for the first time, make sure to first run
```
npm install
```

You can start the frontend server with
```
npm start
```
or
```
npm start server
```
This will run the server on [this port](http://localhost:3000/).
## Roadmap
I currently have no plans to update this application...
## Contributing
Pull requests are welcome.  However, if you decide to make major edits, **do not claim this as your own work!**
Always reference the original work [here](https://github.com/SoraEagle/my-frontend)
## Licenses
No licenses