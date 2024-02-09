const pino = require("pino");

const transport = pino.transport({
  targets: [
    {
      target: "pino/file",
      options: {
        destination: 1, // stdout
      },
    },
    {
      target: "pino/file",
      options: {
        destination: "./tmp/my-logs/test.log",
        mkdir: true,
        sync: true,
        fsync: true,
      },
    },
  ],
});

const logger = pino(transport);

async function work() {
  let i = 0;
  while (1) {
    await sleep(1000);
    logger.info(`tick ${i}`);
    i = i + 1;
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

work();
