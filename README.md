# Sample App

### Run

```
yarn
yarn build
yarn start
```

### Dev

```
yarn
yarn watch
```

In new terminal window:

```
yarn dev
```

## Docker

Build:

```
docker build -t <hub-user>/<repo-name>[:<tag>] .
```

Run:

```
docker run -p 80:80 <hub-user>/<repo-name>[:<tag>]
```
