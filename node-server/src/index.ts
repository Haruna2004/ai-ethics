import { app } from "./app/app.service";
import { envConfig } from "./core/config";

export const startApp = async () => {
  app.listen(envConfig.port, () => {
    console.log(`server running on port ${envConfig.port}`);
  });
};

startApp();
