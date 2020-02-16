use url::Url;

#[derive(Debug, Clone)]
pub struct StatusEnv {
  url: Url,
}

default_url!(StatusEnv, crate::constants::DEFAULT_STATUS_ENDPOINT);
