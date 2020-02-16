use url::Url;

#[derive(Debug, Clone)]
pub struct AuthEnv {
  url: Url,
}

default_url!(AuthEnv, crate::constants::DEFAULT_AUTH_ENDPOINT);
