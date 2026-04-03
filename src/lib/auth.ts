import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: {
    provider: "sqlite",
    url: process.env.DATABASE_URL || "file:./sqlite.db",
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // Set to true in production
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
  user: {
    additionalFields: {
      tenantId: {
        type: "string",
        required: false,
      },
      tenantName: {
        type: "string", 
        required: false,
      },
      tenantCode: {
        type: "string",
        required: false,
      },
      roleName: {
        type: "string",
        required: false,
        defaultValue: "user",
      },
      roleDescription: {
        type: "string",
        required: false,
      },
      enabledFeatures: {
        type: "string", // JSON string of feature array
        required: false,
      },
      activeModuleFeatures: {
        type: "string", // JSON string of module features
        required: false,
      },
      active: {
        type: "boolean",
        required: false,
        defaultValue: true,
      },
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
});