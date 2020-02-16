use crate::client::{Shadow, ToResp};
use crate::constants::{DEFAULT_ACCEPT_ENCODING, DEFAULT_ACCEPT_LANGUAGE, DEFAULT_USER_AGENT};
use crate::Response;

use super::LogQuery;

pub trait ShadowLog {
  fn log(&self, query: LogQuery) -> Response;
}

impl ShadowLog for Shadow {
  fn log(&self, query: LogQuery) -> Response {
    let url = String::new();
    let token = String::new();

    let resp = ureq::post(&format!("{}/log", &url))
      .auth_kind("Bearer", &token)
      .set("Content-Type", "application/json")
      .set("User-Agent", DEFAULT_USER_AGENT)
      .set("X-Shadow-Uuid", &self.shadow_uuid)
      .set("Sec-Fetch-Site", "none")
      .set("Sec-Fetch-Mode", "no-cors")
      .set("Accept-Encoding", DEFAULT_ACCEPT_ENCODING)
      .set("Accept-Language", DEFAULT_ACCEPT_LANGUAGE)
      .send_json(json!(query));

    resp.to_response()
  }
}
