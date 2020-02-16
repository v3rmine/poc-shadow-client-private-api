use url::Url;

#[derive(Debug, Clone)]
pub struct DispatcherEnv {
  url: Url,
}

default_url!(DispatcherEnv, crate::constants::DEFAULT_DISPATCHER_ENDPOINT);
