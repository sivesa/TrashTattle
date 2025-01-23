// utils/logging.ts
export enum LogLevel {
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

export const logMessage = (level: LogLevel, message: string, data?: unknown) => {
  const timestamp = new Date().toISOString();
  switch (level) {
    case LogLevel.INFO:
      console.info(`[${timestamp}] [INFO]: ${message}`, data || "");
      break;
    case LogLevel.WARN:
      console.warn(`[${timestamp}] [WARN]: ${message}`, data || "");
      break;
    case LogLevel.ERROR:
      console.error(`[${timestamp}] [ERROR]: ${message}`, data || "");
      break;
    default:
      console.log(`[${timestamp}] [LOG]: ${message}`, data || "");
  }
};

