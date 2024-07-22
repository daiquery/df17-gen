# ADS-B Lat/Lng Hex Message Generator for Dump1090

## HTML / User Interface (UNFINISHED):

```bash
$ python -m http.server <PORT> # Use inside of directory.
```

> Opens `index.html` on specified port, containing form for ADS-B message generation. 

## CLI

Ensure **Node.js** is installed.

```bash
$ node cli_input.js
```

> Examples will be provided in each input field, please follow steps provided.

## TODO (CONTRIB)

- Expand to support varying ADS-B messages
- Increment lat/lng to move planes
- Create a **false stream** for each plane.