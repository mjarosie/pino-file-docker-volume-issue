# pino/file not synchronising with Docker container

First run `npm install`.

Then run `docker compose up`, it will display the following:

```
cat: can't open '/tmp/my-logs/test.log': No such file or directory
```

Then run the node application: `node ./index.js`. It will start showing logs. The docker container will stop complaining about the file not existing, but it will not show logs being populated.

Once you stop the node application (that logs to the file) - the log file content will get "flushed" to the container.
