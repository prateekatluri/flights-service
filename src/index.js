const express = require("express");
const { config } = require("./config");
const { logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(config.PORT, () => {
  console.log(`listening at port ${config.PORT}`);
  logger.info("running");
});
