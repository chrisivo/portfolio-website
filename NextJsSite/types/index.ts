export interface ISiteConfig {
  readonly resendToken: string;
  readonly mailFromAddr: string;
  readonly mailToAddr: string;
  readonly recaptchaSiteKey: string;
  readonly recaptchaSecretKey: string;
  readonly googleAnalyticsTagId: string;
}
