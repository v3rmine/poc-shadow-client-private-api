use url::Url;

#[derive(Debug, Clone)]
pub struct ComputerEnv {
  url: Option<Url>,
  token: Option<String>,
}

default_url_w_token!(ComputerEnv);
