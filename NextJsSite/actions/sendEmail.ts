"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import getAwsSecrets from "./getAwsSecrets";

export const sendEmail = async (formData: FormData, reCaptchaToken: string) => {
  const siteSecrets = await getAwsSecrets();

  const resend = new Resend(siteSecrets?.resendToken);
  const fromAddr = siteSecrets?.mailFromAddr || "";
  const toAddr = siteSecrets?.mailToAddr || "";

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const from = `Contact Form <${fromAddr}>`;
  const secretKey = siteSecrets?.recaptchaSecretKey || "";

  console.log(
    "validating recaptcha with secretKey",
    secretKey,
    "token",
    reCaptchaToken,
  );

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${reCaptchaToken}`,
  );

  const body = await response.text();

  if (!JSON.parse(body)["success"]) {
    return {
      error: "Invalid reCaptcha response",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from,
      to: toAddr,
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
