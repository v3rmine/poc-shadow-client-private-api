extern crate dotenv;
extern crate shadowtech_api;

use shadowtech_api::auth::control;
use shadowtech_api::{Result, Shadow};

use dotenv::var;

fn main() -> Result<()> {
  dotenv::dotenv()?;

  let s = Shadow::new(
    var("EMAIL")?,
    var("PASSWORD")?,
    var("SESSION_UUID"),
    var("SHADOW_UUID"),
  );

  let resp = s.start_vm()?;

  println!("{:#?}", resp);

  Ok(())
}
