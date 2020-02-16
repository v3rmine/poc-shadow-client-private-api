use serde::Serialize;
use url::Url;

mod queries;

pub use queries::*;

#[derive(Debug, Clone)]
pub struct LogEnv {
  url: Option<Url>,
  token: Option<String>,
}

default_url_w_token!(LogEnv);

#[derive(Serialize, Debug, Clone)]
pub struct LogQuery {
  version: u32,
  name: String,
  timestamp: u64,
  privacy: String,
  metadata: LogQueryMetadata,
  values: LogQueryValues,
}

#[serde(rename_all = "kebab-case")]
#[derive(Serialize, Debug, Clone)]
pub struct LogQueryMetadata {
  version: String,
  packager_version: String,
  launcher_version: String,
  renderer_version: String,
  user_environment: String,
  os_family: String,
  session: String,
  user_uuid: String,
  main_display: String,
  main_display_resolution: String,
  cpu_model: String,
  cpu_cores: String,
  cpu_frequency: String,
  total_memory: String,
  graphic_card: String,
}

#[derive(Serialize, Debug, Clone)]
pub struct LogQueryValues {
  status: String,
}
