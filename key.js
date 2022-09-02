
module.exports={
   type: "service_account",
    project_id: "db-stp",
    private_key_id: process.env.KEY_PRIVATE_KEY_ID,
    private_key: process.env.KEY_PRIVATE_KEY ? process.env.KEY_PRIVATE_KEY.replace(/\n/gm, "\n") : undefined,
    client_email: process.env.KEY_CLIENT_EMAIL,
    client_id: process.env.KEY_CLIENT_ID,
    auth_uri:process.env.KEY_AUTH_URI,
    token_uri: process.env.KEY_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.KEY_AUTH_PROVIDER,
    client_x509_cert_url: process.env.KEY_CLI_CERT_URI
  }

  // module.exports(key)