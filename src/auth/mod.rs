use url::Url;

mod post_auth_login;
pub use post_auth_login::*;
pub mod control;

#[derive(Debug, Clone)]
pub struct AuthEnv {
  url: Url,
}

default_url!(AuthEnv, crate::constants::DEFAULT_AUTH_ENDPOINT);
