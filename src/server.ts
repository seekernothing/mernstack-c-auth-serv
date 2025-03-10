import { Config } from "./config";

import app from "./config/app";

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
startServer();
