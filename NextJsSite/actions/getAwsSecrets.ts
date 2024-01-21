import { ISiteConfig } from "@/types";
import { SecretsManager } from "@aws-sdk/client-secrets-manager";
import { decode } from "punycode";

const getAwsSecrets = async (): Promise<ISiteConfig | null> => {
  const awsRegion: string = process.env.SITE_SECRETS_REGION || "";
  const secretsArn: string = process.env.SITE_SECRETS_ARN || "";

  const client = new SecretsManager({
    region: awsRegion,
  });

  let decodedValue = null;

  try {
    const res = await client.getSecretValue({
      SecretId: secretsArn,
    });

    if ("SecretString" in res) {
      decodedValue = res.SecretString;
    } else {
      let buff = Buffer.from(res.SecretBinary as any, "base64");
      decodedValue = buff.toString("ascii");
    }
  } catch (err: any) {
    if (err.code === "DecryptionFailureException")
      // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
      // Deal with the exception here, and/or rethrow at your discretion.
      throw err;
    else if (err.code === "InternalServiceErrorException")
      // An error occurred on the server side.
      // Deal with the exception here, and/or rethrow at your discretion.
      throw err;
    else if (err.code === "InvalidParameterException")
      // You provided an invalid value for a parameter.
      // Deal with the exception here, and/or rethrow at your discretion.
      throw err;
    else if (err.code === "InvalidRequestException")
      // You provided a parameter value that is not valid for the current state of the resource.
      // Deal with the exception here, and/or rethrow at your discretion.
      throw err;
    else if (err.code === "ResourceNotFoundException")
      // We can't find the resource that you asked for.
      // Deal with the exception here, and/or rethrow at your discretion.
      throw err;
  }

  if (!decodedValue) {
    return null;
  }

  return JSON.parse(decodedValue) as ISiteConfig;
};

export default getAwsSecrets;
